import { FileText, Link, MessageCircle, PlusCircle } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import RecentArticles from "./recent-articles";

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
            <Button>
              <PlusCircle className="h-4 w-4" />
              new Article
            </Button>
          </Link>
        </div>

        {/* quick stats */}

        <div className="grid md:grid-cols-3 mb-8 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Total Articles{" "}
              </CardTitle>
              <FileText className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-sm text-muted-foreground">
                +5 from last month
              </p>
            </CardContent>
          </Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Total Comments{" "}
            </CardTitle>
            <MessageCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground">
              12 waiting moderative
            </p>
          </CardContent>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                Avg Rating time{" "}
              </CardTitle>
              <FileText className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-sm text-muted-foreground">
                0.6 last month month
              </p>
            </CardContent>
          </Card>
        </div>

        <RecentArticles />
      </main>
    </div>
  );
};

export default BlogDashboard;
