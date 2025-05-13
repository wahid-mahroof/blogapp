import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-950 to-indigo-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl"></div>
      <div className="container relative h-full flex-col  items-center justify-center px-4 py-24 md:flex-row md:py-32">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Explore the world Through{""}
            <span className="bg-gradient-to-r from-voilet-400 bg-clip-text ">
              {""}
              Words
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            Discover insightfull articles thought-providing stories,and expert
            prespectives on technology lifestyole and innovation
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button className="rounded-full text-sm">Start Reading</Button>
            <Button className="rounded-full text-sm" variant={"outline"}>
              Explore Topics
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-8 text-white md:mx-w-md">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary"> 1K+</div>
              <div className="text-sm text-gray-400">Published articles</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 text-white md:mx-w-md">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary"> 50+</div>
              <div className="text-sm text-gray-400">Expert writers</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 text-white md:mx-w-md">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary"> 10M</div>
              <div className="text-sm text-gray-400">Monthly Readers</div>
            </div>

            {/* image frame */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
