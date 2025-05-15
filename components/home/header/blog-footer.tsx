import React from "react";
import Link from "next/link";
import { Twitter, ThumbsDown, Linkedin } from "lucide-react";

const BlogFooter: React.FC = () => {
  return (
    <footer className="py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold text-purple-700">ByteCode</h2>
            <p className="mt-2 text-gray-600">
              Where ideas meet innovation. Dive into a world of insightful
              articles written by passionate thinkers and industry experts.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <ThumbsDown size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-medium text-gray-800">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/articles"
                  className="text-gray-600 hover:text-gray-900"
                >
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/topics"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Topics
                </Link>
              </li>
              <li>
                <Link
                  href="/authors"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Authors
                </Link>
              </li>
              <li>
                <Link
                  href="/podcasts"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Podcasts
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-medium text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/licenses"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-10">
          <h3 className="font-medium">Stay Updated</h3>
          <div className="mt-4 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2 sm:mb-0 sm:mr-2 flex-grow"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} ByteCode. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default BlogFooter;
