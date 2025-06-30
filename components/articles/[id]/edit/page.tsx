import React from "react";
import EditArticlePage from "../../edit-article-page";

type EditArticleParams = {
  params:Promise<{id:string}>
}

const  page :React.FC<EditArticleParams>  async ({params}) => {
  const id = (await params).id;
  const
  return (
    <div>
      <EditArticlePage />
    </div>
  );
}

export default page;
