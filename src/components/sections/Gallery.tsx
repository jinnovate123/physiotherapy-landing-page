"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Gallery = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "Reception Area",
      image: "/images/clinic-reception.png",
    },
    {
      title: "Therapy & Treatment Room",
      image: "/images/clinic-therapy.png",
    },
    {
      title: "Advanced Equipment Area",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      title: "Exercise & Rehabilitation Zone",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      title: "Team Collaboration Workspace",
      image: "https://images.unsplash.com/photo-1504813184591-015578f7c72a?auto=format&fit=crop&w=800&h=500&q=80",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 450;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="gallery"
      className="bg-white py-[100px] px-4 md:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto text-center relative">
        {/* Section Header */}
        <span className="text-sm font-bold text-primary tracking-wider uppercase">
          Our Clinic
        </span>
        <h2 className="text-3xl sm:text-[48px] font-semibold text-text-dark mt-2 tracking-tight">
          Modern. Clean. Comfortable.
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />

        {/* Slider Controls */}
        <div className="absolute right-0 top-0 hidden md:flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-gray hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-gray hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-16 px-2 text-left -mx-4 md:-mx-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory scroll-smooth"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] sm:w-[450px] aspect-[4/3] snap-start relative rounded-3xl overflow-hidden shadow-premium group border border-border/60"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-w-768px) 300px, 450px"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white text-lg sm:text-xl font-bold leading-tight">
                  {slide.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
