"use client";

import React from "react";
import { UserCheck, Search, FileSpreadsheet, HeartPulse, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export const TreatmentProcess = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Consultation",
      description: "Detailed assessment and patient history.",
    },
    {
      icon: Search,
      title: "Diagnosis",
      description: "Identify the root cause of your pain.",
    },
    {
      icon: FileSpreadsheet,
      title: "Treatment Plan",
      description: "Personalized plan designed for you.",
    },
    {
      icon: HeartPulse,
      title: "Therapy & Recovery",
      description: "Guided sessions for effective recovery.",
    },
    {
      icon: RefreshCw,
      title: "Follow Up",
      description: "Continuous support for long-term results.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-section-bg py-[100px] px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto text-center">
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
            04 / Recovery Process
          </div>
          <h2 className="text-3xl sm:text-[48px] font-bold text-text-dark tracking-tight leading-tight max-w-3xl">
            Our Step-by-Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Treatment Journey</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4" />
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative mt-20">
          {/* Desktop Connecting Line (Track) */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-[3px] bg-slate-200 hidden lg:block z-0 overflow-hidden rounded-full">
            {/* Desktop Connecting Line (Animated Fill) */}
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-gradient-to-r from-primary via-primary-dark to-accent-green rounded-full"
            />
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 90, 
                    damping: 14, 
                    delay: index * 0.15 
                  }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step Bubble */}
                  <div className="relative">
                    {/* Index Badge */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon Container */}
                    <div className="w-20 h-20 rounded-full bg-white border border-border shadow-premium flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_10px_25px_-5px_rgba(37,99,235,0.3)] transition-all duration-300">
                      <Icon className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h4 className="text-lg font-bold text-text-dark mt-6 transition-colors duration-200 group-hover:text-primary">
                    {step.title}
                  </h4>
                  <p className="text-sm text-text-gray mt-2 leading-relaxed max-w-[200px] font-medium">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
