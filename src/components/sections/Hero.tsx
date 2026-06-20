"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone, Award, Users, HeartPulse, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";

// Reusable premium counter animation component
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
    const incrementTime = Math.max(Math.floor(totalMiliseconds / endValue), 20);

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

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 95,
        damping: 15,
      },
    },
  } as const;

  const trustMetrics = [
    { icon: Award, endValue: 15, suffix: "+", label: "Years Experience" },
    { icon: Users, endValue: 20, suffix: "K+", label: "Happy Patients" },
    { icon: HeartPulse, endValue: 10, suffix: "+", label: "Specialized Treatments" },
    { icon: ShieldCheck, endValue: 98, suffix: "%", label: "Success Rate" },
  ];

  return (
    <section
      id="home"
      className="relative bg-white pt-[100px] pb-12 lg:pt-[128px] lg:pb-0 lg:h-[calc(100vh-88px)] lg:min-h-[650px] flex items-center lg:items-start px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative floating animated glow shapes */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] right-[-10%] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] left-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent-green/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Side Info: Centered on mobile, Left-aligned on Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-xs sm:text-sm font-semibold text-primary mb-4 shadow-sm"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Expert Care. Personalized Recovery.
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-[34px] sm:text-[50px] lg:text-[64px] font-bold text-text-dark leading-[1.1] sm:leading-[1.05] tracking-tight mb-4"
          >
            Move Better.
            <br />
            Feel Stronger.
            <br />
            <span className="text-accent-green">Live Pain-Free.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-base text-text-gray max-w-[500px] lg:max-w-[540px] mb-6 leading-relaxed font-medium px-2 sm:px-0"
          >
            Advanced physiotherapy care for pain relief, injury recovery, and
            long-term wellness. Your health, our priority.
          </motion.p>

          {/* CTAs: Stacked vertically on mobile, row on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-8 px-4 sm:px-0"
          >
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              onClick={() => {
                const appointmentSection = document.getElementById("appointment");
                appointmentSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group py-3.5 sm:py-3 text-sm sm:text-base"
            >
              Book Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />}
              onClick={() => {
                window.location.href = "tel:+919876543210";
              }}
              className="w-full sm:w-auto hover:bg-slate-50 transition-all duration-300 group py-3.5 sm:py-3 text-sm sm:text-base"
            >
              Call Now
            </Button>
          </motion.div>

          {/* Trust Metrics Grid: Cards styling on mobile for premium look */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-6 w-full pt-6 border-t border-border/80 px-2 sm:px-0"
          >
            {trustMetrics.map((metric, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 p-3 sm:p-0 bg-slate-50/50 sm:bg-transparent rounded-2xl border border-slate-100 sm:border-0"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                  <metric.icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-xl font-bold text-text-dark leading-none tracking-tight">
                    <CountUp end={metric.endValue} suffix={metric.suffix} />
                  </span>
                  <span className="text-[10px] sm:text-xs text-text-gray font-semibold mt-1 sm:mt-1.5 leading-tight">
                    {metric.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Image: Clean Margins on Mobile, Full Span on Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0]
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 0.2
            }
          }}
          className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-auto lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border/80 group cursor-pointer max-w-[calc(100%-24px)] mx-auto lg:max-w-none"
        >
          <Image
            src="/images/hero-therapist.png"
            alt="Female physiotherapist helping patient with shoulder mobility exercise"
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
