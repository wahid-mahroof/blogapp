import { Link, PlusCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const BlogDashboard = () => {
  return (
    <div>
      <main className="flex-1 p-4 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-bold text-2xl">blog Dashboard</h1>
            <p>Manage your content and analytic</p>
          </div>

          <Link href="/dashbaord/articles/create">
            <PlusCircle className="h-4 w-4" />
            <Button>new Article</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogDashboard;
