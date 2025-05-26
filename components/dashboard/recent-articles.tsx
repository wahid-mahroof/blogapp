import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge, Link } from "lucide-react";

function RecentArticles() {
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
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>
                <Badge
                  fontVariant={"secondary"}
                  className="rounded-full bg-green-100 text-green-800"
                >
                  Published
                </Badge>
              </TableCell>
              <TableCell>2</TableCell>
              <TableCell>12 feb</TableCell>
              <TableCell>
                <div>
                  <Link href="/dashboard/articles/${123}/edit" />
                  <Button variant={"ghost"} size={"sm"}>
                    Edit
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default RecentArticles;
