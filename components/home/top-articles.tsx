import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";

const TopArticles = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        className={cn(
          "group relative overflow-hidden transition-all hover:scale-[1.02]",
          "border border-gray-200/50 dark:border-white/10,bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
        )}
      >
        <div className="p-6">
          <Link href={`/articles/${1234}`}>
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661436185717-f779de991178?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                alt="article"
                fill
                className="object-cover"
              />
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default TopArticles;
