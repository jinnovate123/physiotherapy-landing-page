"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, Award, Users, HeartPulse, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  } as const;

  const trustMetrics = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "20K+", label: "Happy Patients" },
    { icon: HeartPulse, value: "10+", label: "Specialized Treatments" },
    { icon: ShieldCheck, value: "98%", label: "Success Rate" },
  ];

  return (
    <section
      id="home"
      className="relative bg-white pt-[120px] pb-12 lg:pt-[128px] lg:pb-0 lg:h-[calc(100vh-88px)] lg:min-h-[650px] flex items-center lg:items-start px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative blurred background shapes */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Side Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-sm font-semibold text-primary mb-4"
          >
            <span>Expert Care. Personalized Recovery.</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold text-text-dark leading-[1.05] tracking-tight mb-4"
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
            className="text-sm sm:text-base text-text-gray max-w-[540px] mb-6 leading-relaxed"
          >
            Advanced physiotherapy care for pain relief, injury recovery, and
            long-term wellness. Your health, our priority.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
          >
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={() => {
                const appointmentSection = document.getElementById("appointment");
                appointmentSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto"
            >
              Book Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="w-5 h-5 text-primary" />}
              onClick={() => {
                window.location.href = "tel:+919876543210";
              }}
              className="w-full sm:w-auto"
            >
              Call Now
            </Button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-6 border-t border-border/80"
          >
            {trustMetrics.map((metric, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                  <metric.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-text-dark leading-none">
                    {metric.value}
                  </span>
                  <span className="text-xs text-text-gray font-medium mt-1 leading-tight">
                    {metric.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.2, bounce: 0.1 }}
          className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-auto lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-border/80 group"
        >
          <Image
            src="/images/hero-therapist.png"
            alt="Female physiotherapist helping patient with shoulder mobility exercise"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-103"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
