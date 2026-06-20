"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const BeforeAfter = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const results = [
    {
      id: 1,
      title: "Lower Back Pain",
      duration: "3 Months Treatment",
      beforeImage: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=240&h=200&q=80",
      afterImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=240&h=200&q=80",
    },
    {
      id: 2,
      title: "Frozen Shoulder",
      duration: "2 Months Treatment",
      beforeImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=240&h=200&q=80",
      afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=240&h=200&q=80",
    },
    {
      id: 3,
      title: "Knee Pain",
      duration: "4 Months Treatment",
      beforeImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=240&h=200&q=80",
      afterImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=240&h=200&q=80",
    },
    {
      id: 4,
      title: "Post-Surgery Rehab",
      duration: "3 Months Treatment",
      beforeImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=240&h=200&q=80",
      afterImage: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=240&h=200&q=80",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="results"
      className="bg-white py-[100px] px-4 md:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto text-center relative">
        {/* Section Header */}
        <span className="text-sm font-bold text-primary tracking-wider uppercase">
          Results That Inspire
        </span>
        <h2 className="text-3xl sm:text-[48px] font-semibold text-text-dark mt-2 tracking-tight">
          Before & After Transformations
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />

        {/* Carousel Controls */}
        <div className="absolute right-0 top-0 hidden md:flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-gray hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-gray hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Transformations Slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-16 px-2 text-left -mx-4 md:-mx-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory scroll-smooth"
        >
          {results.map((result) => (
            <div
              key={result.id}
              className="flex-shrink-0 w-[290px] sm:w-[320px] snap-start"
            >
              <Card
                hoverEffect={true}
                className="bg-white rounded-3xl overflow-hidden border border-border/80 p-5 shadow-premium hover:shadow-premium-lg"
              >
                {/* Images side-by-side layout */}
                <div className="grid grid-cols-2 gap-3 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  {/* Before Frame */}
                  <div className="relative h-full w-full">
                    <Image
                      src={result.beforeImage}
                      alt="Before treatment"
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-slate-900/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      Before
                    </div>
                  </div>

                  {/* After Frame */}
                  <div className="relative h-full w-full">
                    <Image
                      src={result.afterImage}
                      alt="After treatment"
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-accent-green/90 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      After
                    </div>
                  </div>

                  {/* Intersect badge (checkmark style) */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent-green text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <Check className="w-4 h-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="mt-5 flex flex-col items-start">
                  <h4 className="text-lg font-bold text-text-dark leading-snug">
                    {result.title}
                  </h4>
                  <p className="text-sm font-semibold text-text-gray mt-1">
                    {result.duration}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
