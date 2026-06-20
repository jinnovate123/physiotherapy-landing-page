"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 88) {
        if (!isOpen) {
          setShowNavbar(false);
        }
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Results", href: "#results" },
    { name: "Patient Stories", href: "#stories" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "glass-nav shadow-sm" : "bg-white"
        } flex items-center justify-between px-4 md:px-6 lg:px-8`}
        style={{ 
          height: "88px", 
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)" 
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:scale-105 transition-transform duration-200">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-text-dark leading-none">
                MoveWell
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-accent-green uppercase mt-0.5">
                Physiotherapy
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-text-gray hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-semibold text-text-dark hover:text-primary transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-primary" />
              +91 98765 43210
            </a>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Calendar className="w-4 h-4" />}
              onClick={() => {
                const appointmentSection = document.getElementById("appointment");
                appointmentSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-text-dark hover:bg-section-bg transition-colors duration-200 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[88px] left-0 w-full bg-white z-30 shadow-lg border-b border-border/80 py-6 px-4 flex flex-col gap-6 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-text-dark hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <hr className="border-border/80" />

            <div className="flex flex-col gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 py-3 border border-border/80 rounded-xl text-base font-semibold text-text-dark hover:bg-section-bg transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 98765 43210
              </a>
              <Button
                variant="primary"
                size="md"
                leftIcon={<Calendar className="w-4 h-4" />}
                onClick={() => {
                  setIsOpen(false);
                  const appointmentSection = document.getElementById("appointment");
                  appointmentSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
