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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  } as const;

  return (
    <section
      id="why-choose-us"
      className="bg-white py-[100px] px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side text & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <span className="text-sm font-bold text-primary tracking-wider uppercase">
            Why Choose MoveWell?
          </span>
          <h2 className="text-3xl sm:text-[48px] font-semibold text-text-dark mt-2 tracking-tight leading-tight">
            Your Recovery is Our Commitment
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-4" />
          <p className="text-base text-text-gray mt-6 max-w-[450px] leading-relaxed">
            We combine advanced techniques, personalized plans, and compassionate care to deliver the best results. Our dedicated therapists work with you at every step to ensure a safe, efficient, and permanent recovery.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const appointmentSection = document.getElementById("appointment");
              appointmentSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8"
          >
            Learn More About Us
          </Button>
        </div>

        {/* Right Side: 6 feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((feat, i) => (
            <Card
              key={i}
              hoverEffect={true}
              className="flex items-start gap-4 p-6 bg-white border border-border/80 rounded-2xl shadow-premium hover:shadow-premium-lg"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${feat.color}`}
              >
                <feat.icon className="w-6 h-6" />
              </div>
              {/* Text */}
              <div className="flex flex-col items-start text-left">
                <CardTitle className="text-lg font-bold text-text-dark">
                  {feat.title}
                </CardTitle>
                <CardDescription className="text-sm text-text-gray mt-1 leading-relaxed">
                  {feat.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
