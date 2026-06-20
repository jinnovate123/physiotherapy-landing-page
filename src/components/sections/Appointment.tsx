"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, User, Phone, Mail, Activity, MessageSquare, Sparkles, Star } from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const treatments = [
    { value: "", label: "Choose treatment..." },
    { value: "pain", label: "Pain Management" },
    { value: "sports", label: "Sports Injury Rehab" },
    { value: "spine", label: "Spine & Posture Care" },
    { value: "surgery", label: "Post-Surgical Rehab" },
    { value: "manual", label: "Manual Therapy" },
    { value: "neuro", label: "Neurological Rehab" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.treatment) newErrors.treatment = "Please select a treatment";
    if (!formData.date) newErrors.date = "Preferred date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        treatment: "",
        date: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const formContainerVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  } as const;

  const formItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  } as const;

  return (
    <section
      id="appointment"
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/20 py-[100px] px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative luxury blurred glow shapes in background */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-300/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "12s" }} />

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with floating animation & premium offset frame */}
          <div className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/6] max-h-[600px] group">
            {/* Offset background designer frame */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-100/50 to-indigo-100/30 rounded-[32px] blur-sm -z-10 group-hover:scale-[1.01] transition-transform duration-500" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                type: "spring",
                duration: 1.2,
                y: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.5
                }
              }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/60 cursor-pointer"
            >
              <Image
                src="/images/appointment.png"
                alt="Female therapist guiding patient with training ball exercise"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge 1: Next Slot */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/80 flex items-center gap-2 text-xs font-bold text-text-dark z-10 hover:scale-105 transition-transform duration-200 select-none"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Next Slot: Today</span>
              </motion.div>

              {/* Floating Badge 2: Rating & Stats */}
              <motion.div 
                animate={{ y: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/80 flex items-center gap-3 z-10 hover:scale-105 transition-transform duration-200 select-none"
              >
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-dark">4.9/5 Rating</div>
                  <div className="text-[10px] text-text-gray font-medium">1,200+ Recovered Patients</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Appointment Form */}
          <motion.div 
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col items-start bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
          >
            <motion.div 
              variants={formItemVariants} 
              className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-2 select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              07 / Book Appointment
            </motion.div>
            
            <motion.h2 variants={formItemVariants} className="text-3xl font-bold text-text-dark tracking-tight">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Recovery Journey</span>
            </motion.h2>
            <motion.p variants={formItemVariants} className="text-sm text-text-gray mt-2 leading-relaxed font-medium">
              Fill in the form below and our team will get back to you within 24 hours to confirm your appointment.
            </motion.p>

            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="w-full mt-6 p-4.5 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-2xl text-emerald-700 text-sm font-semibold text-left flex items-start gap-3 shadow-md"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 animate-bounce">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-emerald-800 font-bold text-base">Booking Request Received!</h4>
                  <p className="text-emerald-700/90 text-sm font-medium mt-1">
                    Your appointment request has been submitted successfully. A specialist will call you within 24 hours to confirm your time slot.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="w-full mt-6 flex flex-col gap-4">
              {/* Row 1 */}
              <motion.div variants={formItemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  error={errors.name}
                  icon={<User className="w-4 h-4" />}
                  className="py-2.5 text-sm"
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  error={errors.phone}
                  icon={<Phone className="w-4 h-4" />}
                  className="py-2.5 text-sm"
                />
              </motion.div>

              {/* Row 2 */}
              <motion.div variants={formItemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  error={errors.email}
                  icon={<Mail className="w-4 h-4" />}
                  className="py-2.5 text-sm"
                />
                <Select
                  label="Select Treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  options={treatments}
                  error={errors.treatment}
                  icon={<Activity className="w-4 h-4" />}
                  className="py-2.5 text-sm"
                />
              </motion.div>

              {/* Row 3 */}
              <motion.div variants={formItemVariants}>
                <Input
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  error={errors.date}
                  icon={<Calendar className="w-4 h-4" />}
                  className="premium-date-input py-2.5 text-sm"
                />
              </motion.div>

              {/* Row 4 */}
              <motion.div variants={formItemVariants}>
                <Textarea
                  label="Message (Optional)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your symptoms or medical history"
                  icon={<MessageSquare className="w-4 h-4" />}
                  className="py-2.5 text-sm min-h-[80px]"
                />
              </motion.div>

              {/* Booking Button */}
              <motion.div variants={formItemVariants}>
                <Button
                  variant="primary"
                  type="submit"
                  isLoading={isSubmitting}
                  className="w-full mt-2 flex items-center justify-center py-3 bg-gradient-to-r from-blue-600 via-primary to-indigo-600 hover:from-blue-700 hover:via-primary-dark hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm"
                  leftIcon={<Calendar className="w-4.5 h-4.5" />}
                >
                  Book Appointment
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
