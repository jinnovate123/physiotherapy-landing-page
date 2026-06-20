"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Dialog } from "@/components/ui/Dialog";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const patientStories = [
    {
      id: "1",
      name: "Rahul Sharma",
      treatment: "Basic Pain Recovery",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&h=530&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "2",
      name: "Priya Patel",
      treatment: "Knee Pain Treatment",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&h=530&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "3",
      name: "Mahesh Joshi",
      treatment: "Sports Injury Rehab",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&h=530&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "4",
      name: "Neha Verma",
      treatment: "Post-Surgical Recovery",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=530&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "5",
      name: "Amit Singh",
      treatment: "Neck Pain Relief",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&h=530&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
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
    hidden: { opacity: 0, scale: 0.96, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 14 },
    },
  } as const;

  return (
    <section
      id="stories"
      className="bg-section-bg py-[100px] px-4 md:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        {/* Section Headers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            02 / Patient Success
          </div>
          <h2 className="text-3xl sm:text-[48px] font-bold text-text-dark tracking-tight leading-tight max-w-3xl">
            Real People. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Real Recoveries.</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mt-4" />
        </motion.div>

        {/* Carousel Slider Controls */}
        <div className="absolute right-0 top-0 hidden md:flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-gray hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-gray hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <motion.div
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-8 pt-16 px-6 -mx-4 md:mx-0 md:px-0 snap-x snap-mandatory scroll-smooth"
        >
          {patientStories.map((story) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex-shrink-0 w-[calc(100vw-48px)] sm:w-[320px] snap-center md:snap-start"
            >
              <Card
                hoverEffect={false}
                className="relative bg-white rounded-[2rem] overflow-hidden border border-border/50 p-0 shadow-premium hover:shadow-[0_20px_45px_-10px_rgba(37,99,235,0.18)] hover:border-primary/15 transition-all duration-300 group aspect-[3/4]"
              >
                {/* Full-size Image Container */}
                <div
                  onClick={() => setSelectedVideo(story.videoUrl)}
                  className="absolute inset-0 bg-slate-950 cursor-pointer overflow-hidden h-full w-full"
                >
                  <Image
                    src={story.image}
                    alt={`${story.name}'s testimonial`}
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-105 opacity-90 group-hover:opacity-95"
                    sizes="(max-w-768px) 280px, 320px"
                  />

                  {/* Play Button Overlay (frosted glass + outer pulsing ring) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/10 group-hover:bg-slate-950/30 transition-colors duration-300">
                    {/* Pulsating Ring */}
                    <div className="absolute w-14 h-14 rounded-full bg-white/25 animate-ping opacity-75 group-hover:hidden" />

                    {/* Play Button */}
                    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-primary group-hover:border-primary/20 group-hover:scale-110 group-hover:shadow-lg">
                      <Play className="w-5 h-5 fill-white stroke-none ml-0.5" />
                    </div>
                  </div>

                  {/* Floating Glassmorphic Info Card Overlay at the bottom */}
                  <div className="absolute bottom-5 left-5 right-5 p-5 backdrop-blur-md bg-slate-950/50 border border-white/10 rounded-2xl flex flex-col items-start text-left transition-all duration-300 group-hover:bg-slate-950/75 group-hover:border-white/20">
                    <h4 className="text-white text-base font-bold tracking-tight">
                      {story.name}
                    </h4>
                    <span className="text-[10px] font-bold text-accent-green bg-accent-green/15 border border-accent-green/30 px-2.5 py-0.5 rounded-full mt-1.5 uppercase tracking-wider">
                      {story.treatment}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Dialog Modal */}
      <Dialog
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        className="max-w-3xl aspect-video bg-black"
      >
        {selectedVideo && (
          <video
            src={selectedVideo}
            controls
            autoPlay
            loop
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            onClick={(e) => {
              const video = e.currentTarget;
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            }}
            className="clean-video w-full h-full object-contain cursor-pointer"
          />
        )}
      </Dialog>
    </section>
  );
};
