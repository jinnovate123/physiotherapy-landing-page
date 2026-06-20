"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";

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
    // Simulate API call
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
      // Clear success notification after 5 seconds
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

  return (
    <section
      id="appointment"
      className="bg-white py-[100px] px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/6] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border/80 group">
            <Image
              src="/images/appointment.png"
              alt="Female therapist guiding patient with training ball exercise"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-102"
              sizes="(max-w-1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 flex flex-col items-start bg-section-bg rounded-3xl p-6 sm:p-10 border border-border/80 shadow-premium">
            <span className="text-sm font-bold text-primary tracking-wider uppercase">
              Book Appointment
            </span>
            <h2 className="text-3xl font-semibold text-text-dark mt-2 tracking-tight">
              Start Your Recovery Journey
            </h2>
            <p className="text-sm text-text-gray mt-2 leading-relaxed">
              Fill in the form below and our team will get back to you within 24 hours to confirm your appointment.
            </p>

            {isSuccess && (
              <div className="w-full mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-semibold text-left">
                Success! Your appointment request has been submitted. We will contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="w-full mt-8 flex flex-col gap-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  error={errors.name}
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  error={errors.phone}
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  error={errors.email}
                />
                <Select
                  label="Select Treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  options={treatments}
                  error={errors.treatment}
                />
              </div>

              {/* Row 3 */}
              <Input
                label="Preferred Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                error={errors.date}
              />

              {/* Row 4 */}
              <Textarea
                label="Message (Optional)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your symptoms or medical history"
              />

              {/* Booking Button */}
              <Button
                variant="primary"
                type="submit"
                isLoading={isSubmitting}
                className="w-full mt-4 flex items-center justify-center py-4 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary-dark cursor-pointer text-base"
                leftIcon={<Calendar className="w-5 h-5" />}
              >
                Book Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
