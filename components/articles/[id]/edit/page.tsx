import React from "react";
import EditArticlePage from "../../edit-article-page";

type EditArticleParams = {
  params:Promise<{id:string}>
}

function page =  async () {
  return (
    <div>
      <EditArticlePage />
    </div>
  );
}

export default page;
