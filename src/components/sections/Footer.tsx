"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-footer-bg text-slate-300 pt-20 pb-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <a href="#home" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-sm">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  MoveWell
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-accent-green uppercase mt-0.5">
                  Physiotherapy
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Advanced physiotherapy care for pain relief, injury recovery, and long-term wellness. Move better, feel stronger, and live pain-free under expert care.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-5 1.7-5 5v2z" />
                    </svg>
                  ),
                  href: "https://facebook.com",
                },
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.2 2.4h3.3L14.3 11l8.5 11.3h-6.7L10.8 15.4 4.8 22H1.5l7.6-8.7L1 2.4h6.9l4.7 6.2 5.6-6.2zm-1.2 17.6h1.8L7.1 4.3H5.1l11.9 15.7z" />
                    </svg>
                  ),
                  href: "https://twitter.com",
                },
                {
                  icon: (
                    <svg
                      className="w-4 h-4 stroke-current fill-none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                  href: "https://instagram.com",
                },
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  href: "https://linkedin.com",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Treatments", href: "#treatments" },
                { name: "Results", href: "#results" },
                { name: "Patient Stories", href: "#stories" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors text-slate-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Treatments
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                "Pain Management",
                "Sports Injury Rehab",
                "Spine & Posture Care",
                "Post-Surgical Rehab",
                "Manual Therapy",
                "Neurological Rehab",
              ].map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#treatments"
                    className="hover:text-primary transition-colors text-slate-400"
                  >
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li>
                <span className="font-semibold text-slate-300 block mb-1">Address</span>
                123, Wellness Avenue, Healthy City, India - 382001
              </li>
              <li>
                <span className="font-semibold text-slate-300 block mb-1">Phone</span>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-300 block mb-1">Email</span>
                <a href="mailto:info@movewellphysio.com" className="hover:text-primary transition-colors">
                  info@movewellphysio.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Newsletter
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Subscribe to our newsletter to receive the latest updates, exercise tips, and clinic news.
            </p>
            {subscribed ? (
              <div className="p-3 bg-green-950/40 border border-green-800 text-green-400 rounded-xl text-xs font-semibold w-full">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative w-full flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700/80 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-1.5 rounded-lg bg-primary hover:bg-primary-dark text-white transition-colors cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-xs text-slate-500">
          <p>© 2026 MoveWell Physiotherapy. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
