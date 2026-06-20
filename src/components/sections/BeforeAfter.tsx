"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Activity,
  User,
  Clock,
  FileText,
  CheckCircle
} from "lucide-react";
import { Card } from "@/components/ui/Card";

interface SliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<SliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(1, Math.min(99, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current || e.pointerType === "mouse") {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const widthScale = sliderPosition > 0 ? (100 / sliderPosition) * 100 : 10000;

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize bg-slate-100 select-none border border-slate-200 shadow-inner group touch-none"
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt="After recovery"
        fill
        priority
        className="object-cover pointer-events-none"
        sizes="(max-w-768px) 100vw, 320px"
      />
      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-accent-green/90 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-wider z-10 border border-white/20 shadow-sm pointer-events-none">
        After
      </div>

      {/* Before Image (Foreground overlay with dynamic width crop) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="absolute inset-y-0 left-0 h-full pointer-events-none"
          style={{ width: `${widthScale}%` }}
        >
          <Image
            src={beforeImage}
            alt="Before recovery"
            fill
            priority
            className="object-cover"
            sizes="(max-w-768px) 100vw, 320px"
          />
        </div>
      </div>
      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-wider z-10 border border-white/10 shadow-sm pointer-events-none">
        Before
      </div>

      {/* Anatomical Alignment Overlay Lines */}
      <div className="absolute inset-0 pointer-events-none border border-white/5 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* Divider slider bar & circular handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(37,99,235,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -left-[1px] w-[3px] bg-gradient-to-b from-primary/80 via-white to-primary/80 blur-[1px]" />

        {/* Double Arrow Slider Badge */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md text-primary border border-primary/20 shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 pointer-events-none">
          <div className="flex items-center gap-0.5 text-primary">
            <ChevronLeft className="w-3 h-3 stroke-[3]" />
            <ChevronRight className="w-3 h-3 stroke-[3]" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface CaseStudy {
  id: number;
  category: "spine" | "joint" | "shoulder" | "post-op";
  categoryLabel: string;
  title: string;
  condition: string;
  duration: string;
  therapist: string;
  patientProfile: string;
  summary: string;
  beforeImage: string;
  afterImage: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    improvement: string;
  }[];
}

export const BeforeAfter = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Cases" },
    { id: "spine", label: "Spine & Neck" },
    { id: "joint", label: "Joints & Knee" },
    { id: "shoulder", label: "Shoulder & Rehab" },
    { id: "post-op", label: "Post-Surgery" },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      category: "spine",
      categoryLabel: "Spine & Neck",
      title: "Lumbar Disc Recovery",
      condition: "L4-L5 Herniation & Sciatica",
      duration: "12 Weeks Treatment",
      therapist: "Dr. Priya Sharma, PT",
      patientProfile: "Aarav K., 34 (Software Eng.)",
      summary: "Patient suffered radiating sciatic pain limiting standing to <10 mins. Restored full standing tolerance via decompression & core stabilization.",
      beforeImage: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&h=450&q=80",
      afterImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&h=450&q=80",
      metrics: [
        { label: "Pain Index (VAS)", before: "8/10", after: "1/10", improvement: "-87% Pain" },
        { label: "Lumbar Flexion", before: "35°", after: "90° (Full)", improvement: "+157% ROM" },
        { label: "Daily Standing", before: "10 min", after: "Unlimited", improvement: "100% Recovered" }
      ]
    },
    {
      id: 2,
      category: "shoulder",
      categoryLabel: "Shoulder & Upper Limb",
      title: "Frozen Shoulder Resolution",
      condition: "Adhesive Capsulitis (Stage 2)",
      duration: "8 Weeks Treatment",
      therapist: "Dr. Priya Sharma, PT",
      patientProfile: "Meera S., 45 (Homemaker)",
      summary: "Severe shoulder stiffness with near-zero external range and disrupted sleep. Restored overhead reach through targeted active release & mobility.",
      beforeImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&h=450&q=80",
      afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&h=450&q=80",
      metrics: [
        { label: "Pain Index (VAS)", before: "7/10", after: "0/10", improvement: "100% Pain Free" },
        { label: "Shoulder Abduction", before: "70°", after: "180° (Full)", improvement: "+110° ROM" },
        { label: "Sleep Disruption", before: "Frequent", after: "None", improvement: "Restored Sleep" }
      ]
    },
    {
      id: 3,
      category: "joint",
      categoryLabel: "Joint & Knee",
      title: "ACL Tear Non-Surgical Rehab",
      condition: "ACL Grade II Sprain & Atrophy",
      duration: "16 Weeks Treatment",
      therapist: "Dr. Priya Sharma, PT",
      patientProfile: "Rohan D., 26 (Amateur Athlete)",
      summary: "Presented with knee instability and quadriceps atrophy post-injury. Rebuilt quad firing torque and dynamic lateral cutting stability.",
      beforeImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=450&q=80",
      afterImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&h=450&q=80",
      metrics: [
        { label: "Pain Index (VAS)", before: "9/10", after: "1/10", improvement: "-88% Pain" },
        { label: "Knee Extension Lag", before: "-12°", after: "0° (Full)", improvement: "Extension Restored" },
        { label: "Quad Symmetry", before: "62%", after: "97%", improvement: "97% Symmetric" }
      ]
    },
    {
      id: 4,
      category: "post-op",
      categoryLabel: "Post-Surgery Rehab",
      title: "Total Knee Replacement Rehab",
      condition: "Post-TKA Gait Stiffness",
      duration: "10 Weeks Treatment",
      therapist: "Dr. Priya Sharma, PT",
      patientProfile: "Savitri G., 68 (Retired Educator)",
      summary: "Post-operative rehab focused on early mobilization. Restored natural walking gait cycle and built stairs climbing confidence.",
      beforeImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&h=450&q=80",
      afterImage: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=600&h=450&q=80",
      metrics: [
        { label: "Pain Index (VAS)", before: "8/10", after: "2/10", improvement: "-75% Pain" },
        { label: "Knee Flexion Range", before: "80°", after: "122° (Full)", improvement: "+42° Range" },
        { label: "Mobility Status", before: "Walker", after: "Independent", improvement: "Fully Independent" }
      ]
    }
  ];

  const filteredCases = activeCategory === "all"
    ? caseStudies
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <section
      id="results"
      className="bg-section-bg py-[100px] px-4 md:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative Premium Glow Background Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3 animate-pulse text-primary" />
            Clinical Success Stories
          </span>
          <h2 className="text-2xl sm:text-[36px] font-semibold text-text-dark tracking-tight leading-tight">
            Before & After Transformations
          </h2>
          <p className="text-sm text-text-gray mt-2.5 max-w-lg mx-auto leading-relaxed">
            Real, measured recovery journeys from patients who restored their mobility and pain-free living through our custom care plans.
          </p>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-4 py-2 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-300 cursor-pointer ${activeCategory === category.id
                  ? "text-white bg-primary shadow-[0_3px_10px_rgba(37,99,235,0.25)]"
                  : "text-text-gray bg-white border border-border/80 hover:text-text-dark hover:border-slate-300"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Transformations Slider: Side-by-side grid on desktop, slides horizontally on mobile */}
        <motion.div
          layout
          className="flex md:grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-6 md:pb-0 px-6 -mx-4 md:mx-auto md:px-0 max-w-[1200px] scroll-smooth"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((result) => (
              <motion.div
                key={result.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 w-[calc(100vw-48px)] sm:w-[320px] md:w-full snap-center md:snap-align-none"
              >
                <Card
                  hoverEffect={false}
                  className="bg-white rounded-2xl overflow-hidden border border-border/60 p-4 md:p-5 shadow-premium hover:shadow-[0_15px_35px_-10px_rgba(15,23,42,0.08)] hover:border-primary/15 transition-all duration-300 flex flex-col md:flex-row gap-5 items-stretch group/card"
                >
                  {/* Left Side: Interactive Slider */}
                  <div className="w-full md:w-[280px] lg:w-[300px] shrink-0">
                    <BeforeAfterSlider
                      beforeImage={result.beforeImage}
                      afterImage={result.afterImage}
                    />
                  </div>

                  {/* Right Side: Case Details */}
                  <div className="flex-grow flex flex-col justify-between py-0.5 text-left">
                    <div>
                      {/* Category & Case Reference Bar */}
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[9px] font-bold text-primary bg-primary/5 border border-primary/10 px-2 py-0.5 rounded uppercase tracking-wider">
                          {result.categoryLabel}
                        </span>
                        <span className="text-[9px] font-medium text-text-gray tracking-wider uppercase">
                          Case Study #{String(result.id).padStart(3, "0")}
                        </span>
                      </div>

                      {/* Title & Conditions */}
                      <h3 className="text-base font-bold text-text-dark leading-tight group-hover/card:text-primary transition-colors duration-300">
                        {result.title}
                      </h3>

                      {/* Patient Profile Details */}
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-center mt-1 text-[11px] text-text-gray">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3 text-slate-400" />
                          {result.patientProfile}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {result.duration}
                        </span>
                      </div>

                      {/* Clinical Outcomes List */}
                      <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-2.5 my-3 space-y-1.5">
                        <div className="flex items-center gap-1 mb-1">
                          <Activity className="w-3.5 h-3.5 text-primary" />
                          <span className="text-[9px] font-bold text-text-dark tracking-wider uppercase">
                            Clinical Outcomes
                          </span>
                        </div>

                        {result.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[11px] py-0.5 border-b border-slate-100 last:border-0">
                            <span className="font-semibold text-slate-600 w-1/3 truncate">
                              {metric.label}
                            </span>

                            <div className="flex items-center gap-1 text-slate-400 w-[110px] justify-start">
                              <span className="text-red-500 font-medium">{metric.before}</span>
                              <span>➔</span>
                              <span className="text-accent-green font-bold bg-accent-green/5 px-1.5 py-0.2 rounded border border-accent-green/10">
                                {metric.after}
                              </span>
                            </div>

                            <span className="text-[10px] font-bold text-accent-green text-right">
                              {metric.improvement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Summary / Clinical Assessment */}
                    <div className="text-[11px] text-text-gray italic leading-relaxed mb-3 flex gap-1.5 items-start">
                      <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">&ldquo;{result.summary}&rdquo;</span>
                    </div>

                    {/* Card Footer: Signature & Verified Stamp */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5.5 h-5.5 rounded-full bg-primary/10 flex items-center justify-center text-[9px] font-bold text-primary">
                          PS
                        </div>
                        <span className="text-[10px] font-bold text-slate-700">
                          {result.therapist}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-accent-green">
                        <CheckCircle className="w-3 h-3 fill-accent-green/10" />
                        Verified Result
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
