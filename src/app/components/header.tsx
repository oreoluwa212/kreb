"use client";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  Home,
  Download,
  Search,
  Settings,
  User,
  Menu,
  ChevronDown,
  Bell,
  Archive,
  FileText,
  Bookmark,
  Share2,
} from "lucide-react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-full min-w-0">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs sm:text-sm">#</span>
          </div>
          <div className="flex items-center space-x-1 min-w-0 overflow-hidden">
            <span className="text-xs sm:text-sm text-gray-900 dark:text-white font-medium truncate">
              hunoconvinderfencet
            </span>
            <div className="w-4 h-4 flex-shrink-0"></div>
          </div>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-200 w-full min-w-0">
      <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-shrink-0">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xs sm:text-sm">#</span>
        </div>
        <div className="flex items-center space-x-1 min-w-0 overflow-hidden">
          <span className="text-xs sm:text-sm !text-gray-900 dark:!text-white font-medium truncate">
            hunoconvinderfencet
          </span>
          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 !text-gray-500 dark:!text-gray-400 flex-shrink-0" />
        </div>
      </div>

      <div className="hidden lg:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1 space-x-1 flex-shrink-0">
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-white dark:hover:bg-gray-700 h-7 w-7 p-0 rounded-md"
        >
          <Home className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-white dark:hover:bg-gray-700 h-7 w-7 p-0 rounded-md"
        >
          <Archive className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-white dark:hover:bg-gray-700 h-7 w-7 p-0 rounded-md"
        >
          <Download className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-white dark:hover:bg-gray-700 h-7 w-7 p-0 rounded-md"
        >
          <FileText className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-white dark:hover:bg-gray-700 h-7 w-7 p-0 rounded-md"
        >
          <Search className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-white dark:hover:bg-gray-700 h-7 w-7 p-0 rounded-md"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-white dark:hover:bg-gray-700 h-7 w-7 p-0 rounded-md"
        >
          <Share2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-white dark:hover:bg-gray-700 h-7 w-7 p-0 rounded-md"
        >
          <Settings className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-white dark:hover:bg-gray-700 h-7 w-7 p-0 rounded-md"
        >
          <User className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-shrink-0">
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hidden md:inline-flex"
        >
          <span className="text-xs sm:text-sm">Gallery</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hidden md:inline-flex"
        >
          <span className="text-xs sm:text-sm">Support</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 h-6 w-6 sm:h-8 sm:w-8 p-0 flex-shrink-0"
        >
          <Bell className="h-3 w-3 sm:h-4 sm:w-4 fill-none stroke-current" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="!text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 h-6 w-6 sm:h-8 sm:w-8 p-0 flex-shrink-0"
        >
          {theme === "dark" ? (
            <Sun className="h-3 w-3 sm:h-4 sm:w-4" />
          ) : (
            <Moon className="h-3 w-3 sm:h-4 sm:w-4" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden !text-gray-600 dark:!text-gray-400 hover:!text-gray-800 dark:hover:!text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 h-6 w-6 sm:h-8 sm:w-8 p-0 flex-shrink-0"
        >
          <Menu className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>

        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
      </div>
    </header>
  );
}
