"use client";

import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [cardWidth, setCardWidth] = useState(600);
  const [gap, setGap] = useState(24);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1);
        setCardWidth(width - 48);
      } else if (width < 1024) {
        setCardsPerView(1);
        setCardWidth(width * 0.9);
      } else {
        setCardsPerView(2);
        setCardWidth((width - gap * (cardsPerView - 1)) / cardsPerView);
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

  const extendedCards = [...cards, ...cards, ...cards];
  const startIndex = cards.length;

  const [realIndex, setRealIndex] = useState(startIndex);

  useEffect(() => {
    if (isMounted) {
      setRealIndex(startIndex);
      setCurrentSlide(0);
    }
  }, [cardsPerView, isMounted]);

  const nextSlide = () => {
    const newIndex = realIndex + 1;
    setRealIndex(newIndex);
    setCurrentSlide((prev) => prev + 1);

    if (newIndex >= cards.length * 2) {
      setTimeout(() => {
        setRealIndex(cards.length);
        setCurrentSlide(cards.length - startIndex);
      }, 300);
    }
  };

  const prevSlide = () => {
    const newIndex = realIndex - 1;
    setRealIndex(newIndex);
    setCurrentSlide((prev) => prev - 1);

    if (newIndex < cards.length) {
      setTimeout(() => {
        setRealIndex(cards.length * 2 - 1);
        setCurrentSlide(cards.length - 1 - (startIndex - cards.length));
      }, 300);
    }
  };

  const goToSlide = (index: number) => {
    const targetIndex = startIndex + index;
    setRealIndex(targetIndex);
    setCurrentSlide(index);
  };

  if (!isMounted) {
    return (
      <div className="relative mb-8 w-full">
        <div className="overflow-hidden px-4 sm:px-0">
          <div className="flex gap-4 sm:gap-6 lg:gap-8">
            <div
              className="flex-shrink-0 h-64 sm:h-72 lg:h-80 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"
              style={{ width: 600 }}
            />
            <div
              className="flex-shrink-0 h-64 sm:h-72 lg:h-80 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse hidden lg:block"
              style={{ width: 600 }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mb-8 w-full">
      <div className="overflow-hidden px-4 sm:px-0">
        <div
          className="flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${
              (realIndex - startIndex) * (cardWidth + gap)
            }px)`,
          }}
        >
          {extendedCards.map((card, index) => (
            <Card
              key={`${card.id}-${Math.floor(index / cards.length)}`}
              className={`flex-shrink-0 h-64 sm:h-72 lg:h-80 bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} relative overflow-hidden border-0`}
              style={{ width: cardWidth }}
            >
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />

              <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between text-white">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1 text-xs text-white">
                    <span className="font-medium">{card.badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-5xl mt-4 font-bold text-white leading-tight text-center">
                    {card.title}
                  </h2>
                </div>
                <p className="text-white/95 text-sm font-medium">
                  {card.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-5">
                  <p className="text-white/85 text-xs leading-relaxed flex-1">
                    {card.description}
                  </p>

                  <Button className="bg-white text-black hover:bg-white/90 rounded-full px-4 py-2 text-xs sm:text-sm whitespace-nowrap flex-shrink-0">
                    {card.buttonText}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm !text-white border-0 z-10 rounded-full h-8 w-8 sm:h-10 sm:w-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm !text-white border-0 z-10 rounded-full h-8 w-8 sm:h-10 sm:w-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <div className="flex justify-center mt-4 sm:mt-6 gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentSlide % cards.length === index
                ? "bg-blue-500 w-4 sm:w-6"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
