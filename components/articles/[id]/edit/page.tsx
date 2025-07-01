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
  return (
    <div>
      <EditArticlePage />
    </div>
  );
};

export default page;
