"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const TopArticles = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="group relative overflow-hidden transition-all hover:scale-[1.02] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 backdrop-blur-lg">
        <div className="p-6">
          <Link href="/articles/1">
            <div className="relative h-48 w-full overflow-hidden rounded-xl">
              <Image
                src="https://img.freepik.com/free-photo/side-view-female-asian-woman-sitting-cafe-working-laptop_1098-17167.jpg"
                alt="article"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-x-3 mt-4 text-sm text-muted-foreground">
            <Avatar>
              <AvatarImage src="/avatar1.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span> wahid Mahroof</span>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            How to become frontend developer in 2024
          </h3>

          <p className="mt-2 text-gray-600 dark:text-white">Web devlopment</p>
          <div
            className="mt-6 flex items-center
           justify-between text-sm text-gray-500 dark:text-gray-400"
          >
            <span className="">12 feb</span>
            <span className="">{12} min to read</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TopArticles;
