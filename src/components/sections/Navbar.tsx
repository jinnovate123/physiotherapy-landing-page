"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ChevronRight } from "lucide-react";
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
    { name: "Patient Stories", href: "#stories" },
    { name: "Contact", href: "#contact" },
  ];

  const menuContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        height: { type: "spring", stiffness: 100, damping: 15 },
        opacity: { duration: 0.2 },
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.25, ease: "easeInOut" },
        opacity: { duration: 0.15 },
      },
    },
  } as const;

  const menuLinkVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  } as const;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200/55 shadow-[0_2px_15px_-3px_rgba(15,23,42,0.03)]" 
            : "bg-white/60 backdrop-blur-md border-b border-transparent"
        } flex items-center justify-between px-4 md:px-6 lg:px-8`}
        style={{ 
          height: "88px", 
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)" 
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
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
                className="relative text-sm font-semibold text-text-gray hover:text-primary transition-colors duration-200 py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-semibold text-text-gray hover:text-primary transition-all duration-300 bg-slate-50 hover:bg-slate-100/80 px-3.5 py-2 rounded-full border border-slate-200/50"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              +91 98765 43210
            </a>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Calendar className="w-4 h-4" />}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
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
            className="lg:hidden p-2 rounded-lg text-text-dark hover:bg-section-bg transition-colors duration-200 cursor-pointer z-50"
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
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-[88px] left-0 w-full bg-white/95 backdrop-blur-xl z-30 shadow-xl border-b border-slate-100 py-6 px-6 flex flex-col gap-6 lg:hidden overflow-hidden"
          >
            <motion.nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <motion.a
                  variants={menuLinkVariants}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-text-dark hover:text-primary transition-colors py-2.5 border-b border-slate-100/50 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-text-gray/40" />
                </motion.a>
              ))}
            </motion.nav>

            <motion.div variants={menuLinkVariants} className="flex flex-col gap-4 pt-2">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-base font-semibold text-text-dark hover:bg-slate-50 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 98765 43210
              </a>
              <Button
                variant="primary"
                size="md"
                leftIcon={<Calendar className="w-4 h-4" />}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/10 w-full"
                onClick={() => {
                  setIsOpen(false);
                  const appointmentSection = document.getElementById("appointment");
                  appointmentSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Appointment
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
