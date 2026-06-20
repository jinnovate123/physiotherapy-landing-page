"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -8 } : undefined}
        transition={hoverEffect ? { duration: 0.3, ease: "easeOut" } : undefined}
        className={cn(
          "bg-white rounded-2xl border border-border/80 shadow-premium p-6 transition-shadow duration-300 hover:shadow-premium-lg",
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export const CardTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-[22px] font-semibold text-text-dark leading-tight", className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-base text-text-gray mt-2 leading-relaxed", className)} {...props}>
    {children}
  </p>
);
