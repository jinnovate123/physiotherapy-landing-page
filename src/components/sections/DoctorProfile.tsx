"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Award, Users, Stethoscope, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { motion, useInView } from "framer-motion";

// Helper CountUp animation component
const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
  end, 
  duration = 1.5, 
  suffix = "" 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / endValue), 25);
    
    const timer = setInterval(() => {
      start += Math.ceil(endValue / (totalMiliseconds / incrementTime));
      if (start >= endValue) {
        clearInterval(timer);
        setCount(endValue);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const DoctorProfile = () => {
  const specializations = [
    "Certified Manual Therapist",
    "Sports Injury Specialist",
    "Pain Management Expert",
    "Post-Surgical Rehabilitation Expert",
  ];

  const stats = [
    { icon: Award, endValue: 15, suffix: "+", label: "Years Experience" },
    { icon: Users, endValue: 20, suffix: "K+", label: "Patients Treated" },
    { icon: Stethoscope, endValue: 10, suffix: "+", label: "Advanced Therapies" },
    { icon: Star, endValue: 5, suffix: "★", label: "Patient Rating" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.12,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  } as const;

  const specVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 + custom * 0.1, duration: 0.4, ease: "easeOut" as const }
    })
  };

  return (
    <section
      id="about"
      className="bg-section-bg py-[100px] px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", duration: 1.2 }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-border/80 shadow-premium"
          >
            {/* Image Container with floating animation */}
            <motion.div 
              animate={{
                y: [0, -6, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="md:col-span-5 relative aspect-[1/1] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-border/40 group cursor-pointer"
            >
              <Image
                src="/images/doctor-priya.png"
                alt="Dr. Priya Mehta, Senior Physiotherapist"
                fill
                className="object-cover object-top transition-transform duration-750 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 250px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Info */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <span className="text-sm font-bold text-primary tracking-wider uppercase mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Meet Your Therapist
              </span>
              <h2 className="text-3xl font-bold text-text-dark leading-tight">
                Dr. Priya Mehta
              </h2>
              <span className="text-sm font-semibold text-text-gray mt-1">
                MPT (Musculoskeletal), BPT
              </span>
              <span className="text-xs font-medium text-primary mt-1.5 bg-primary/5 px-2.5 py-0.5 rounded-full border border-primary/10">
                15+ Years of Experience
              </span>

              <p className="text-sm text-text-gray mt-4 leading-relaxed font-medium">
                Specialized in orthopedics, sports injury, spine rehabilitation, and post-surgery recovery. Dedicated to restoring patient movement and wellness.
              </p>

              {/* Checklist with staggered delay */}
              <div className="mt-6 flex flex-col gap-3">
                {specializations.map((spec, i) => (
                  <motion.div 
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={specVariants}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-accent-green shrink-0" />
                    <span className="text-sm font-semibold text-text-dark">
                      {spec}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Stat Cards with proper stagger animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <Card
                  hoverEffect={true}
                  className="flex flex-col items-start p-6 bg-white border border-border/80 rounded-2xl shadow-premium hover:shadow-premium-lg h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-text-dark leading-none tracking-tight">
                    <CountUp end={stat.endValue} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm font-semibold text-text-gray mt-2 leading-tight">
                    {stat.label}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
