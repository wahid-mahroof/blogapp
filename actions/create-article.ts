"use server ";
import { z } from "Zod";

const createArticleSchema = z.object({
  titlt: z.string().min(3).max(100),
  category: z.string().min(3).max(50),
  content: z.string().min(10),
});
export const createArticle = async (formData: FormData) => {
  const result = createArticleSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    content: formData.get("content"),
  });
};
