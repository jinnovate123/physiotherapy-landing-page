"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const VisitUs = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      value: (
        <>
          123, Wellness Avenue,
          <br />
          Healthy City, India - 382001
        </>
      ),
      type: "address"
    },
    {
      icon: Phone,
      title: "Phone",
      value: <a href="tel:+919876543210">+91 98765 43210</a>,
      type: "phone"
    },
    {
      icon: Mail,
      title: "Email",
      value: <a href="mailto:info@movewellphysio.com">info@movewellphysio.com</a>,
      type: "email"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: (
        <>
          Mon - Sat: 09:00 AM - 07:00 PM
          <br />
          Sunday: Closed
        </>
      ),
      type: "hours"
    }
  ];

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as const;

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  } as const;

  return (
    <section
      id="contact"
      className="bg-white py-[100px] px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", duration: 1.2 }}
            className="h-full"
          >
            <Card
              hoverEffect={false}
              className="flex flex-col justify-between p-8 sm:p-10 bg-section-bg border border-border/80 rounded-3xl shadow-premium h-full"
            >
              <div>
                <span className="text-sm font-bold text-primary tracking-wider uppercase flex items-center gap-1.5 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Find Us
                </span>
                <h2 className="text-3xl font-semibold text-text-dark mt-2 tracking-tight text-left">
                  Visit Our Clinic
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full mt-4 mb-10 text-left" />

                {/* Details List with Staggered Entrance */}
                <motion.div 
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-6"
                >
                  {contactDetails.map((detail, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={listItemVariants}
                      className="flex items-start gap-4 text-left group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <detail.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider">
                          {detail.title}
                        </h4>
                        <p className={`text-base text-text-gray mt-1 font-medium transition-colors ${
                          detail.type === 'phone' || detail.type === 'email' 
                            ? 'font-semibold hover:text-primary' 
                            : ''
                        }`}>
                          {detail.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-10 text-left">
                <Button
                  variant="green"
                  size="lg"
                  leftIcon={<MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                  onClick={() => {
                    window.open("https://wa.me/919876543210", "_blank");
                  }}
                  className="w-full sm:w-auto hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", duration: 1.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/80 h-full min-h-[450px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MoveWell Physiotherapy Clinic Location Map"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
