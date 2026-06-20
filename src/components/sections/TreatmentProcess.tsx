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
        <span className="text-sm font-bold text-primary tracking-wider uppercase">
          Our Process
        </span>
        <h2 className="text-3xl sm:text-[48px] font-semibold text-text-dark mt-2 tracking-tight">
          Our Treatment Process
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />

        {/* Timeline Grid */}
        <div className="relative mt-20">
          {/* Desktop Connecting Line */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-border/80 hidden lg:block z-0" />

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Bubble */}
                  <div className="relative">
                    {/* Index Badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                      {index + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="w-20 h-20 rounded-full bg-white border border-border shadow-premium flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-8 h-8 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h4 className="text-lg font-bold text-text-dark mt-6 transition-colors duration-200 group-hover:text-primary">
                    {step.title}
                  </h4>
                  <p className="text-sm text-text-gray mt-2 leading-relaxed max-w-[200px]">
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
