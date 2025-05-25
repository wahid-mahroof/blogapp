import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

function RecentArticles() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="">RecentArticles</CardTitle>
          <Button>View All</Button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default RecentArticles;
