"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const VisitUs = () => {
  return (
    <section
      id="contact"
      className="bg-white py-[100px] px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Contact Card */}
          <Card
            hoverEffect={false}
            className="flex flex-col justify-between p-8 sm:p-10 bg-section-bg border border-border/80 rounded-3xl shadow-premium"
          >
            <div>
              <span className="text-sm font-bold text-primary tracking-wider uppercase">
                Find Us
              </span>
              <h2 className="text-3xl font-semibold text-text-dark mt-2 tracking-tight">
                Visit Our Clinic
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mt-4 mb-10" />

              {/* Details List */}
              <div className="flex flex-col gap-6">
                {/* Address */}
                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider">
                      Address
                    </h4>
                    <p className="text-base text-text-gray mt-1 font-medium">
                      123, Wellness Avenue,
                      <br />
                      Healthy City, India - 382001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider">
                      Phone
                    </h4>
                    <p className="text-base text-text-gray mt-1 font-semibold hover:text-primary transition-colors">
                      <a href="tel:+919876543210">+91 98765 43210</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider">
                      Email
                    </h4>
                    <p className="text-base text-text-gray mt-1 font-medium hover:text-primary transition-colors">
                      <a href="mailto:info@movewellphysio.com">info@movewellphysio.com</a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider">
                      Working Hours
                    </h4>
                    <p className="text-base text-text-gray mt-1 font-medium">
                      Mon - Sat: 09:00 AM - 07:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-10">
              <Button
                variant="green"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5" />}
                onClick={() => {
                  window.open("https://wa.me/919876543210", "_blank");
                }}
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </Card>

          {/* Right Column: Google Maps Embed */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/80 h-full min-h-[450px]">
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
          </div>
        </div>
      </div>
    </section>
  );
};
