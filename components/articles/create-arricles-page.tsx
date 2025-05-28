import React from "react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

function CreateArticlesPage() {
  return (
    <div className="max-4 mx-auto p-6">
      <CardHeader>
        <CardTitle>Create New Article</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Input
              type="text"
              name="title"
              placeholder="Enter a article title"
            />
          </div>
        </form>
      </CardContent>
    </div>
  );
}

export default CreateArticlesPage;
