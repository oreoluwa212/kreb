"use client";

import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [cardWidth, setCardWidth] = useState(384);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1);
        setCardWidth(width - 48);
      } else if (width < 1024) {
        setCardsPerView(1);
        setCardWidth(384);
      } else {
        setCardsPerView(2);
        setCardWidth(384);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const cards = [
    {
      id: 1,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the latest new and powerful WAN 2.2 model. Exceptional context coherence and ultra-photorealistic scenes.",
      badge: "FEATURED MODEL",
      buttonText: "Try WAN 2.2",
      gradientFrom: "from-orange-400 via-pink-400 to-blue-400",
      gradientTo: "dark:from-orange-900 dark:via-pink-900 dark:to-blue-900",
    },
    {
      id: 2,
      title: "OpenSou",
      subtitle: "FLUX1 Krea",
      description:
        "With more style wrapped in our FLUX1 Krea model. Quick, decent, comprehend fun our model capable. Real-like technical aspect of all the images.",
      badge: "LO MODEL",
      buttonText: "Try FLUX1",
      gradientFrom: "from-amber-700 to-amber-900",
      gradientTo: "dark:from-amber-800 dark:to-amber-950",
    },
    {
      id: 3,
      title: "Stable XL",
      subtitle: "Stable Diffusion XL",
      description:
        "Create stunning artwork with Stable Diffusion XL. Enhanced detail, better composition, and improved prompt following for artistic creation.",
      badge: "POPULAR",
      buttonText: "Try Stable XL",
      gradientFrom: "from-purple-500 via-blue-500 to-cyan-500",
      gradientTo: "dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900",
    },
    {
      id: 4,
      title: "Midjourney",
      subtitle: "Midjourney v6",
      description:
        "Professional-grade image generation with Midjourney's latest model. Perfect for commercial projects and artistic exploration.",
      badge: "PRO",
      buttonText: "Try Midjourney",
      gradientFrom: "from-emerald-500 via-teal-500 to-blue-500",
      gradientTo: "dark:from-emerald-900 dark:via-teal-900 dark:to-blue-900",
    },
    {
      id: 5,
      title: "DALL-E 3",
      subtitle: "OpenAI DALL-E 3",
      description:
        "Advanced AI image generation from OpenAI. Exceptional prompt understanding and creative interpretation for unique visual content.",
      badge: "LATEST",
      buttonText: "Try DALL-E 3",
      gradientFrom: "from-rose-500 via-pink-500 to-purple-500",
      gradientTo: "dark:from-rose-900 dark:via-pink-900 dark:to-purple-900",
    },
  ];

  const maxSlide = Math.max(0, cards.length - cardsPerView);
  const gap = 24;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <div className="relative mb-8 w-full">
      <div className="overflow-hidden px-3 sm:px-0">
        <div
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (cardWidth + gap)}px)`,
          }}
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              className={`flex-shrink-0 h-64 sm:h-72 bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} relative overflow-hidden border-0`}
              style={{ width: cardWidth }}
            >
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />

              <div className="relative p-4 sm:p-6 h-full flex flex-col justify-between text-white">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 text-xs text-white">
                    <span className="font-medium">{card.badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white my-4 sm:my-7 leading-tight text-center">
                    {card.title}
                  </h2>

                  <p className="text-white/95 text-sm font-medium mb-2 sm:mb-3">
                    {card.subtitle}
                  </p>

                  <p className="text-white/85 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm !text-white border-0 z-10 rounded-full h-8 w-8 sm:h-10 sm:w-10"
        onClick={prevSlide}
        disabled={currentSlide === 0}
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm !text-white border-0 z-10 rounded-full h-8 w-8 sm:h-10 sm:w-10"
        onClick={nextSlide}
        disabled={currentSlide >= maxSlide}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <div className="flex justify-center mt-4 sm:mt-6 gap-2">
        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentSlide === index
                ? "bg-blue-500 w-4 sm:w-6"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
