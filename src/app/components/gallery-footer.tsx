"use client";

import { Button } from "./ui/button";
import { User, Heart } from "lucide-react";

export function GalleryFooter() {
  return (
    <div className="mt-12">
      <div className="border-t border-gray-200 dark:border-gray-700 pt-8 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold !text-gray-900 dark:!text-white">
            Gallery
          </h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <User className="h-4 w-4 mr-2" />
              Legal
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <Heart className="h-4 w-4 mr-2" />
              Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
