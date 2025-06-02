"use server ";
import { auth } from "@clerk/nextjs/server";
import { promises } from "dns";
import { redirect } from "next/dist/server/api-utils";

import { z } from "Zod";

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
  // start creating articles

  const imageFile = formData.get('featuredImage') as File | null;
  if(!imageFile || imageFile.name === "undefined"){
    return{
      error:{
        featuredImage:['image file is required']
      }
    }
  }
  redirect("/dashboard");
};
