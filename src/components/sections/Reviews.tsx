"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export const Reviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reviewList = [
    {
      id: 1,
      name: "Rajesh Kumar",
      date: "2 weeks ago",
      text: "Excellent treatment and personal care. My back pain is completely gone. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 2,
      name: "Sneha Iyer",
      date: "1 month ago",
      text: "Very professional team and great results. My shoulder pain is much better now!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 3,
      name: "Vikram Singh",
      date: "3 weeks ago",
      text: "Best physiotherapy clinic I have ever visited. Thank you MoveWell!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 4,
      name: "Pooja Mehta",
      date: "2 months ago",
      text: "Friendly staff and effective treatment. I feel more active and pain-free.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 5,
      name: "Amit Patel",
      date: "1 month ago",
      text: "Great experience! The therapy really helped me recover faster!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100&q=80",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
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
        staggerChildren: 0.08,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  } as const;

  return (
    <section
      id="reviews"
      className="bg-section-bg py-[100px] px-4 md:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto text-center relative">
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
            06 / Patient Reviews
          </div>
          <h2 className="text-3xl sm:text-[48px] font-bold text-text-dark tracking-tight leading-tight max-w-3xl">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Thousands</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4" />
        </motion.div>

        {/* Carousel Controls */}
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

        {/* Reviews Cards List with Staggered Entrance */}
        <motion.div
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-8 pt-16 px-6 -mx-4 md:mx-0 md:px-0 snap-x snap-mandatory scroll-smooth"
        >
          {reviewList.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="flex-shrink-0 w-[calc(100vw-48px)] sm:w-[320px] snap-center md:snap-start"
            >
              <Card
                hoverEffect={true}
                className="bg-white rounded-3xl border border-border/80 p-6 shadow-premium hover:shadow-premium-lg flex flex-col h-full justify-between group"
              >
                <div>
                  {/* Card Header (Avatar + Name + Rating + Google Icon) */}
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border/40 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-text-dark leading-none">
                          {review.name}
                        </span>
                        <span className="text-xs text-text-gray mt-1 leading-none">
                          {review.date}
                        </span>
                      </div>
                    </div>

                    {/* Google Icon logo */}
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.927h6.6c-.29 1.5-.14 2.5-.14 2.5l5.285 4.1C23.745 20.73 24 16.48 23.745 12.27z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-5.285-4.1c-1.48.99-3.37 1.58-5.3 1.58-4.08 0-7.53-2.77-8.77-6.5L.23 16.2c2.48 4.93 7.57 8.3 13.52 8.3z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M3.23 12.07A8.06 8.06 0 0 1 3.23 9.3l-5.09-3.92C-3.4 9.17-3.4 14.83-1.86 16.2l5.09-4.13z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.96 1.19 15.24 0 12 0 6.05 0 .96 3.37.23 8.3l5.09 3.92c1.24-3.73 4.69-6.47 8.77-6.47z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 text-amber-400 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-text-gray leading-relaxed font-medium">
                    "{review.text}"
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
