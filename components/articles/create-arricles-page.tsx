import React from "react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

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
          <Label>Category</Label>
          <div>
            <select className="flex h-10 w-full rounded-md">
              <option value="">Select category</option>
              <option value="technology">technology</option>
              <option value="programming">Programming</option>
              <option value="web-debelopment">Web dvelopment</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>featured Image</Label>
          </div>
        </form>
      </CardContent>
    </div>
  );
}

export default CreateArticlesPage;
