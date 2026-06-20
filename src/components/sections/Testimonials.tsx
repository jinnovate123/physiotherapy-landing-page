"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const patientStories = [
    {
      id: "1",
      name: "Rahul Sharma",
      treatment: "Basic Pain Recovery",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with high quality physio video if desired
    },
    {
      id: "2",
      name: "Priya Patel",
      treatment: "Knee Pain Treatment",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "3",
      name: "Mahesh Joshi",
      treatment: "Sports Injury Rehab",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "4",
      name: "Neha Verma",
      treatment: "Post-Surgical Recovery",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "5",
      name: "Amit Singh",
      treatment: "Neck Pain Relief",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  return (
    <section
      id="stories"
      className="bg-section-bg py-[100px] px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Section Headers */}
        <span className="text-sm font-bold text-primary tracking-wider uppercase">
          Patient Stories
        </span>
        <h2 className="text-3xl sm:text-[48px] font-semibold text-text-dark mt-2 tracking-tight">
          Real People. Real Recoveries.
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />

        {/* Stories Horizontal Scrolling Area */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-16 px-2 text-left -mx-4 md:-mx-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory scroll-smooth">
          {patientStories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ y: -6 }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
            >
              <Card
                hoverEffect={false}
                className="bg-white rounded-3xl overflow-hidden border border-border/85 p-0 shadow-premium hover:shadow-premium-lg transition-shadow duration-300"
              >
                {/* Thumbnail Container */}
                <div
                  onClick={() => setSelectedVideo(story.videoUrl)}
                  className="relative aspect-[4/3] bg-slate-900 group cursor-pointer overflow-hidden"
                >
                  <Image
                    src={story.image}
                    alt={`${story.name}'s testimonial`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-300 group-hover:bg-black/35">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                </div>

                {/* Patient details */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-text-dark">{story.name}</h4>
                  <p className="text-sm text-text-gray mt-1 font-medium">
                    {story.treatment}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Button variant="primary" size="md">
            View More Stories
          </Button>
        </div>
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
            className="w-full h-full object-contain"
          />
        )}
      </Dialog>
    </section>
  );
};
