"use client"
import React, { startTransition, useTransition } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge, Link } from "lucide-react";
import { Prisma } from "@prisma/client";
import { useFormStatus } from "react-dom";
import { deleteArticle } from "@/actions/delete-article";

type RecentArticlesProps = {
  articles:Prisma.ArticlesGetPayload>{
    include:{
      comments: true;
      author: {
        select: {
          name:true;
          email:true;
          imageUrl:true
        }
      }
      }
    }
  }>[];
};

function RecentArticles : React.FC<RecentArticlesProps> = ({articles}) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="">RecentArticles</CardTitle>
          <Button
            className="text-muted-foreground "
            size="sm"
            variant={"ghost"}
          >
            View All
          </Button>
        </div>
      </CardHeader>


      {
        !articles.length ? (<CardContent> No articles

        </CardContent>) : (
 <CardContent>
 <Table>
   <TableHeader>
     <TableRow>
       <TableHead>Title</TableHead>
       <TableHead>Status</TableHead>
       <TableHead>Comments</TableHead>
       <TableHead>Data</TableHead>
       <TableHead>Actions</TableHead>
     </TableRow>
   </TableHeader>

   <TableBody>
    {articles.map((article)=>(
       <TableRow key={article.id}>
       <TableCell>{article.title}</TableCell>
       <TableCell>
         <Badge
           fontVariant={"secondary"}
           className="rounded-full bg-green-100 text-green-800"
         >
           Published
         </Badge>
       </TableCell>
       <TableCell>{article.comments.length}</TableCell>
       <TableCell>{article.createdAt.toDateString}</TableCell>
       <TableCell>
         <div className="flex gap-2">
           <Link href="/dashboard/articles/${article.id}/edit" >
           <Button variant={"ghost"} size={"sm"}>
             Edit
           </Button>
           </Link>
           <DeleteButton articleId = {article.id}/>
         </div>
       </TableCell>
     </TableRow>
    ))
    }
    
   </TableBody>
 </Table>
</CardContent>
        )
      }
     
    </Card>
  );
}

export default RecentArticles;

type DeleteButtonProps = {
  articleId : String
}

const DeleteButton : React.FC<DeleteButtonProps> = ({articleId}) => {
  const [isPending,startTransition] = useTransition();
  return (
    <form action={
      () => {
        startTransition(async() => {
          await deleteArticle(articleId);
        })
      }
    }>
      <Button disabled={pending} variant={"ghost"} size={"sm"} type="submit">
        {pending ? "loading..." : "Delete"}
      </Button>
    </form>
  );
};
