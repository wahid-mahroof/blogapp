"use server ";
import { auth } from "@clerk/nextjs/server";
import { promises } from "dns";
import { Cagliostro } from "next/font/google";
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
export const createArticle = async (
  formData: FormData
): Promise<createArticlesFormstate> => {
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
  redirect("/dashboard");
};
