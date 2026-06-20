import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { DoctorProfile } from "@/components/sections/DoctorProfile";
import { Treatments } from "@/components/sections/Treatments";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TreatmentProcess } from "@/components/sections/TreatmentProcess";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Appointment } from "@/components/sections/Appointment";
import { VisitUs } from "@/components/sections/VisitUs";
import { Footer } from "@/components/sections/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Doctor Profile Section */}
        <DoctorProfile />

        {/* 4. Treatments Section */}
        <Treatments />

        {/* 5. Video Testimonials Section */}
        <Testimonials />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 8. Treatment Process Section */}
        <TreatmentProcess />

        {/* 9. Clinic Gallery Section */}
        <Gallery />

        {/* 10. Reviews Section */}
        <Reviews />

        {/* 11. Appointment Section */}
        <Appointment />

        {/* 12. Visit Us Section */}
        <VisitUs />
      </main>

      {/* 13. Premium Footer */}
      <Footer />

      {/* Sticky WhatsApp Floating Button */}
      <a
        href="https://wa.me/919737920278"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-accent-green text-white shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Hover Tooltip tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
