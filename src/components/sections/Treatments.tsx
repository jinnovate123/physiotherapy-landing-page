"use client";

import React from "react";
import { Activity, Flame, HeartPulse, Accessibility, ShieldCheck, ArrowRight } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { motion } from "framer-motion";

export const Treatments = () => {
  const treatmentList = [
    {
      icon: Flame,
      title: "Pain Management",
      description:
        "Effective solutions for back pain, neck pain, knee pain & more.",
      color: "text-red-500 bg-red-50",
    },
    {
      icon: Activity,
      title: "Sports Injury Rehab",
      description:
        "Specialized treatment for athletes to recover and perform better.",
      color: "text-blue-500 bg-blue-50",
    },
    {
      icon: ShieldCheck,
      title: "Spine & Posture Care",
      description:
        "Improve posture, reduce chronic pain & enhance spine health.",
      color: "text-amber-500 bg-amber-50",
    },
    {
      icon: HeartPulse,
      title: "Post-Surgical Rehab",
      description:
        "Faster recovery and safe rehabilitation after surgery.",
      color: "text-purple-500 bg-purple-50",
    },
    {
      icon: Accessibility,
      title: "Manual Therapy",
      description:
        "Hands-on techniques to improve mobility & reduce pain.",
      color: "text-green-500 bg-green-50",
    },
    {
      icon: HeartPulse,
      title: "Neurological Rehab",
      description:
        "Support for stroke, paralysis and neurological conditions.",
      color: "text-rose-500 bg-rose-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 95, damping: 15 },
    },
  } as const;

  return (
    <section
      id="treatments"
      className="bg-white py-[100px] px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-[1280px] mx-auto text-center">
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
            01 / Our Treatments
          </div>
          <h2 className="text-3xl sm:text-[48px] font-bold text-text-dark tracking-tight leading-tight max-w-3xl">
            Personalized Care for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Every Need</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4" />
        </motion.div>

        {/* Treatments Grid with proper stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 text-left"
        >
          {treatmentList.map((treatment, i) => (
            <motion.div key={i} variants={itemVariants} className="h-full">
              <Card
                hoverEffect={true}
                className="flex flex-col h-full bg-white border border-border/80 rounded-3xl p-8 shadow-premium hover:shadow-premium-lg hover:border-primary/15 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)] transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${treatment.color}`}
                >
                  <treatment.icon className="w-7 h-7" />
                </div>

                {/* Title & Desc */}
                <CardTitle className="text-[22px] font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors duration-200">
                  {treatment.title}
                </CardTitle>
                <CardDescription className="text-text-gray leading-relaxed flex-grow text-sm mb-6 font-medium">
                  {treatment.description}
                </CardDescription>

                {/* Learn More Action */}
                <div className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-200 cursor-pointer mt-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
