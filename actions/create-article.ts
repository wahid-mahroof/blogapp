"use server ";
import { Cagliostro } from "next/font/google";
import { z } from "Zod";

const createArticleSchema = z.object({
  titlt: z.string().min(3).max(100),
  category: z.string().min(3).max(50),
  content: z.string().min(10),
});

type createArticlesFormstatec = {
  error: {
    title?: string[];
    Category?: string[];
    featuredImage?: string[];
    content?: string[];
    formError?: string[];
  };
};
export const createArticle = async (formData: FormData) => {
  const result = createArticleSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    content: formData.get("content"),
  });

  if (!result.success) {
  }
};
