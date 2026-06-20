"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog } from "@/components/ui/Dialog";

export const Gallery = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      image: "/images/clinic-equipment.png",
    },
    {
      title: "Exercise & Rehabilitation Zone",
      image: "/images/clinic-rehab-zone.png",
    },
    {
      title: "Private Consultation Room",
      image: "/images/clinic-consultation.png",
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

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation support for accessibility and premium feel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 14 },
    },
  } as const;

  return (
    <section
      id="gallery"
      className="bg-white py-[100px] px-4 md:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto text-center relative animate-fade-in">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            05 / Clinic Tour
          </div>
          <h2 className="text-3xl sm:text-[48px] font-bold text-text-dark tracking-tight leading-tight">
            Modern. Clean. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Comfortable.</span>
          </h2>
          <p className="text-sm sm:text-base text-text-gray max-w-xl mt-3 font-medium leading-relaxed">
            Take a visual tour of our state-of-the-art healing spaces designed specifically for your comfort and recovery journey.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4" />
        </motion.div>

        {/* Slider Controls */}
        <div className="absolute right-0 top-4 hidden md:flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-gray hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-gray hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery Slider with Staggered Entrance */}
        <motion.div
          ref={sliderRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-16 px-2 text-left -mx-4 md:-mx-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory scroll-smooth"
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => openLightbox(index)}
              className="flex-shrink-0 w-[300px] sm:w-[450px] aspect-[4/3] snap-start relative rounded-3xl overflow-hidden shadow-premium group border border-border/60 cursor-pointer hover:shadow-premium-lg transition-all duration-300"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-768px) 300px, 450px"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white text-lg sm:text-xl font-bold leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {slide.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Dialog Modal */}
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="max-w-5xl bg-slate-950 border-slate-900 rounded-2xl p-0 overflow-hidden"
      >
        <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] w-full flex items-center justify-center bg-slate-950 select-none">
          
          {/* Active Image Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full p-6 sm:p-12 md:p-16 flex items-center justify-center"
          >
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>

          {/* Navigation Controls inside Lightbox */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer z-35"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer z-35"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Title & Counter Footer */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 pt-16 flex items-end justify-between z-30">
            <div className="text-left">
              <span className="text-[10px] font-bold text-primary tracking-wider uppercase">Our Premium Spaces</span>
              <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mt-0.5">{slides[currentIndex].title}</h3>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-400 bg-slate-900/90 border border-white/5 px-3 py-1.5 rounded-xl flex items-center gap-1 select-none">
              <span className="text-white">{currentIndex + 1}</span>
              <span className="text-slate-600">/</span>
              <span>{slides.length}</span>
            </div>
          </div>
        </div>
      </Dialog>
    </section>
  );
};
