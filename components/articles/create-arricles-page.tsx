import React, { useActionState, useState } from "react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import "react-quill-new/dist/quill.snow.css";
import { createArticle } from "@/actions/create-article";
import { error } from "console";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

function CreateArticlesPage() {
  const [content, setContent] = useState();
  const [formState, action, isPending] = useActionState(createArticle, {
    error: {},
  });
  return (
    <div className="max-4 mx-auto p-6">
      <CardHeader>
        <CardTitle>Create New Article</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-6">
          <div className="space-y-2">
            <Input
              type="text"
              name="title"
              placeholder="Enter a article title"
            />
            {formState.error.title && (
              <span className="text-red-600 text-sm">
                {formState.error.title}
              </span>
            )}
          </div>
          <Label>Category</Label>
          <div>
            <select className="flex h-10 w-full rounded-md">
              <option value="">Select category</option>
              <option value="technology">technology</option>
              <option value="programming">Programming</option>
              <option value="web-debelopment">Web dvelopment</option>
            </select>
            {formState.error.Category && (
              <span className="text-red-600 text-sm">
                {formState.error.Category}
              </span>
          </div>
          <div className="space-y-2">
            <Label>featured Image</Label>
            <Input
              type="file"
              id="featuredImage"
              name="featuredImage"
              accept="image/*"
            />
          </div>
          <div className="space-y-2">
            <Label>Content</Label>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            {formState.error.content && (
              <span className="text-red-600 text-sm">
                {formState.error.content}
              </span>
          </div>
          <div className="flex justify-end gap-4">
            <Button variant={"outline"}>Cancel</Button>
            <Button type="submit" disabled={isPending}>
              {
                isPending ? "Loading..." : "Public Article"
              }
            </Button>
          </div>
        </form>
      </CardContent>
    </div>
  );
}

export default CreateArticlesPage;
