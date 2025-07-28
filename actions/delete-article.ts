"use server";

import { Prisma } from "@/lib/prisma";

export const deleteArticle = async (articleId: string) => {
  await Prisma.article.delete({
    where: { id: articleId },
  });
};
