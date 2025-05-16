"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import SearchInput from "./search-input";
import ToggleMode from "./toggle-mode";
import { Menu, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full  border-b bg-background/95 backdrop-blur supports-[background-filter]:bg-background/60 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex  h-16 items-center justify-between">
          {/* left section*/}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to bg-indigo-500 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Byte
                </span>
                <span className="text-foreground">Code</span>
              </span>
            </Link>
          </div>
          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={"/articles"}
              className="text-sm font-medium text-foreground transition-colors  hover:text-foreground "
            >
              Articles
            </Link>
            <Link
              href={"/tutorial"}
              className="text-sm font-medium text-foreground transition-colors  hover:text-foreground "
            >
              Tutorial
            </Link>{" "}
            <Link
              href={"/about"}
              className="text-sm font-medium text-foreground transition-colors  hover:text-foreground "
            >
              About
            </Link>{" "}
            <Link
              href={"/dashboard"}
              className="text-sm font-medium text-foreground transition-colors  hover:text-foreground "
            >
              Dashboard
            </Link>
          </div>

          {/* right section */}
          <div className="flex items-center gap-4 ">
            <SearchInput />
            <ToggleMode />

            {/* user action */}
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <div className="hidden md:flex items-center gap-2">
                <SignInButton>
                  <Button variant={"outline"}>Login</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Signup</Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>

          {/* Mobile Menu  button */}
          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <Button>
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5 " />
            )}
          </Button>
        </div>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 space-y-4 border-t">
          {/* search bar */}
          <div className="px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 w-full focus-visible:ring-1"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
