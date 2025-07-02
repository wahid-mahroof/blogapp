import React from "react";
import EditArticlePage from "../../edit-article-page";
import { Prisma } from "@/lib/prisma";

type EditArticleParams = {
  params: Promise<{ id: string }>;
};

const page: React.FC<EditArticleParams> = async ({ params }) => {
  const id = (await params).id;
  const article = await Prisma.article.findunique({
    where: { id },
  });
  if (!article) return <h1>Article not found gor this {id}</h1>;
  return (
    <div>
      <EditArticlePage />
    </div>
  );
};

export default page;
