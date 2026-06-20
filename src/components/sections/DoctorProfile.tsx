"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, Users, Stethoscope, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export const DoctorProfile = () => {
  const specializations = [
    "Certified Manual Therapist",
    "Sports Injury Specialist",
    "Pain Management Expert",
    "Post-Surgical Rehabilitation Expert",
  ];

  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "20K+", label: "Patients Treated" },
    { icon: Stethoscope, value: "10+", label: "Advanced Therapies" },
    { icon: Star, value: "5★", label: "Patient Rating" },
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
      id="about"
      className="bg-section-bg py-[100px] px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", duration: 1.2 }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-border/80 shadow-premium"
          >
            {/* Image Container */}
            <div className="md:col-span-5 relative aspect-[1/1] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-border/40">
              <Image
                src="/images/doctor-priya.png"
                alt="Dr. Priya Mehta, Senior Physiotherapist"
                fill
                className="object-cover object-top"
                sizes="(max-w-768px) 100vw, 250px"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <span className="text-sm font-bold text-primary tracking-wider uppercase mb-1">
                Meet Your Therapist
              </span>
              <h2 className="text-3xl font-bold text-text-dark leading-tight">
                Dr. Priya Mehta
              </h2>
              <span className="text-sm font-semibold text-text-gray mt-1">
                MPT (Musculoskeletal), BPT
              </span>
              <span className="text-xs font-medium text-primary mt-0.5 bg-primary/5 px-2.5 py-0.5 rounded-full">
                15+ Years of Experience
              </span>

              <p className="text-sm text-text-gray mt-4 leading-relaxed">
                Specialized in orthopedics, sports injury, spine rehabilitation, and post-surgery recovery. Dedicated to restoring patient movement and wellness.
              </p>

              {/* Checklist */}
              <div className="mt-6 flex flex-col gap-3">
                {specializations.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" />
                    <span className="text-sm font-semibold text-text-dark">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Stat Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <Card
                key={i}
                hoverEffect={true}
                className="flex flex-col items-start p-6 bg-white border border-border/80 rounded-2xl shadow-premium hover:shadow-premium-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-bold text-text-dark leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-text-gray mt-2 leading-tight">
                  {stat.label}
                </span>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
