"use client";

import React from "react";
import { Users, Award, ShieldCheck, HeartPulse, Sparkles, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Therapists",
      description: "Highly qualified and experienced professionals.",
      color: "text-blue-500 bg-blue-50",
    },
    {
      icon: Award,
      title: "Advanced Techniques",
      description: "Evidence-based modern therapy & equipment.",
      color: "text-cyan-500 bg-cyan-50",
    },
    {
      icon: ShieldCheck,
      title: "Personalized Care",
      description: "Customized treatment plans for every patient.",
      color: "text-green-500 bg-green-50",
    },
    {
      icon: HeartPulse,
      title: "Modern Facility",
      description: "State-of-the-art equipment and clean environment.",
      color: "text-indigo-500 bg-indigo-50",
    },
    {
      icon: Sparkles,
      title: "Safe & Effective",
      description: "Patient safety and effective recovery is our priority.",
      color: "text-purple-500 bg-purple-50",
    },
    {
      icon: Activity,
      title: "Holistic Approach",
      description: "Improving mobility, strength and overall well-being.",
      color: "text-emerald-500 bg-emerald-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
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
      id="why-choose-us"
      className="bg-white py-[100px] px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side text & CTA with smooth reveal */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-start text-left"
        >
          <div className="px-3.5 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-3 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            03 / Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-[48px] font-bold text-text-dark tracking-tight leading-tight">
            Your Recovery is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Our Commitment</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4" />
          <p className="text-base text-text-gray mt-6 max-w-[450px] leading-relaxed font-medium">
            We combine advanced techniques, personalized plans, and compassionate care to deliver the best results. Our dedicated therapists work with you at every step to ensure a safe, efficient, and permanent recovery.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const appointmentSection = document.getElementById("appointment");
              appointmentSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
          >
            Learn More About Us
          </Button>
        </motion.div>

        {/* Right Side: 6 feature cards with proper stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((feat, i) => (
            <motion.div key={i} variants={itemVariants} className="h-full">
              <Card
                hoverEffect={true}
                className="flex items-start gap-4 p-6 bg-white border border-border/80 rounded-2xl shadow-premium hover:shadow-premium-lg hover:border-primary/10 transition-all duration-300 h-full group"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${feat.color}`}
                >
                  <feat.icon className="w-6 h-6" />
                </div>
                {/* Text */}
                <div className="flex flex-col items-start text-left">
                  <CardTitle className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors duration-200">
                    {feat.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-text-gray mt-1 leading-relaxed font-medium">
                    {feat.description}
                  </CardDescription>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
