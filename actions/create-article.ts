"use server ";
import { auth } from "@clerk/nextjs/server";
import { promises } from "dns";
import { redirect } from "next/dist/server/api-utils";

import { z } from "Zod";

import {v2 as cloundinary , UploadApiResponse} from "cloudinary";
import { resolve } from "path";
import { rejects } from "assert";
import { Prisma } from "@/lib/prisma";
cloundinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET
})


const createArticleSchema = z.object({
  titlt: z.string().min(3).max(100),
  category: z.string().min(3).max(50),
  content: z.string().min(10),
});

type createArticlesFormstate = {
  error: {
    title?: string[];
    Category?: string[];
    featuredImage?: string[];
    content?: string[];
    formError?: string[];
  };
};
export const createArticle = async (prevState:createArticlesFormstate,)
  formData:formData
: Promise<createArticlesFormstate> => {
  const result = createArticleSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }
  const { userId } = await auth();
  if (!userId) {
    return {
      error: {
        formError: ["you have to login first"],
      },
    };
  }

  const existingUser = await Prisma.user.findUnique({
    where:{clerkUserId:userId}
  })
  if(!existingUser){
    return {
      errors:{
        formErrors:["User not found  register before creating an article"]
      }
    }
  }
  // start creating articles

  const imageFile = formData.get('featuredImage') as File | null;
  if(!imageFile || imageFile.name === "undefined"){
    return{
      error:{
        featuredImage:['image file is required']
      }
    }
  }

  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const uploadResponse :  UploadApiResponse | undefined = await new Promise((resolve,rejects) => {
    const uploadStream = cloundinary.uploader.upload_stream(
      {resource_type:"auto"},
      (error,result) => {
        if(error){
          rejects(error)
        }else{
          resolve(result)
        }
      }
    );
    uploadStream.end(buffer);
  })

  const imageUrl = uploadResponse?.secure_url;

  if(!imageUrl) {
    return {
      error:{
        featuredImage:["failled to upload image,please try again"]
      }
    }
  }
  try {
    await Prisma.articles.create({
      data:{
        title:result.data.title,
        category:result.data.content,
        content:result.data.content,
        featuredImage:imageUrl,
        authorid:existingUser
      }
    })
  } catch (
    
  ) {
    
  }

  redirect("/dashboard");
};
