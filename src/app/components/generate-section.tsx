"use client";

import { Button } from "./ui/button";
import {
  Wand2,
  Video,
  Mic,
  FileText,
  Zap,
  Train,
  Edit3,
  Headphones,
  ChevronDown,
} from "lucide-react";

interface ModelCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
}

function ModelCard({
  icon,
  title,
  description,
  badge,
  badgeColor = "bg-blue-500",
}: ModelCardProps) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 rounded-lg">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            {badge && (
              <span
                className={`text-xs px-2 py-0.5 rounded-full text-white ${badgeColor}`}
              >
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs !text-gray-600 dark:!text-gray-300 mt-0.5 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      <Button
        variant="secondary"
        size="sm"
        className="text-xs shrink-0 text-gray-700 dark:text-gray-200"
      >
        Open
      </Button>
    </div>
  );
}

export function GenerateSection() {
  const models = [
    {
      id: 1,
      icon: <Wand2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Image",
      description:
        "Generate images using text prompts and turn your imagination into reality with advanced AI models.",
      badge: "NEW",
      badgeColor: "bg-green-500",
    },
    {
      id: 2,
      icon: <Video className="h-6 w-6 text-red-600 dark:text-red-400" />,
      title: "Video",
      description:
        "Generate videos with HaiNet, Pika, Minimax Video, and more cutting-edge video AI models.",
    },
    {
      id: 3,
      icon: <Edit3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Edit",
      description:
        "Edit your photos and videos with AI without prompts and generalized editing tools.",
      badge: "NEW",
      badgeColor: "bg-green-500",
    },
    {
      id: 4,
      icon: (
        <Headphones className="h-6 w-6 text-orange-600 dark:text-orange-400" />
      ),
      title: "Video Lip-sync",
      description:
        "Lip sync any video using AI with 99.9% accuracy and natural-looking results.",
      badge: "BETA",
      badgeColor: "bg-orange-500",
    },
    {
      id: 5,
      icon: <Mic className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Realtime",
      description:
        "Interact via video conferencing or webcam with real-time AI processing capabilities.",
    },
    {
      id: 6,
      icon: <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />,
      title: "Motion Transfer",
      description:
        "Transfer motion from one character to another with precision and natural movement.",
      badge: "NEW",
      badgeColor: "bg-green-500",
    },
    {
      id: 7,
      icon: <FileText className="h-6 w-6 text-gray-600 dark:text-gray-300" />,
      title: "Enhancer",
      description:
        "Enhance your images and documents with AI-powered upscaling and improvement tools.",
      badge: "NEW",
      badgeColor: "bg-green-500",
    },
    {
      id: 8,
      icon: <Train className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Train",
      description:
        "Train new AI models to replicate your style, products, or characters with custom datasets.",
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Generate
        </h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-500 hover:text-blue-400 flex items-center"
        >
          <ChevronDown className="h-4 w-4 mr-1" />
          Show all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            icon={model.icon}
            title={model.title}
            description={model.description}
            badge={model.badge}
            badgeColor={model.badgeColor}
          />
        ))}
      </div>
    </div>
  );
}
