"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = "text", icon, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label className="text-sm font-medium text-text-dark/95">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-gray/50 group-focus-within:text-primary transition-colors duration-200">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              "w-full py-3 bg-white border border-border/80 rounded-xl text-text-dark text-base placeholder:text-text-gray/40 transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10",
              icon ? "pl-11 pr-4" : "px-4",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              className
            )}
            {...props}
          />
        </div>
        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
  icon?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, error, icon, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label className="text-sm font-medium text-text-dark/95">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-gray/50 group-focus-within:text-primary transition-colors duration-200 z-10">
              {icon}
            </div>
          )}
          <select
            ref={ref}
            className={cn(
              "w-full py-3 bg-white border border-border/80 rounded-xl text-text-dark text-base placeholder:text-text-gray/40 transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 appearance-none cursor-pointer",
              icon ? "pl-11 pr-10" : "px-4 pr-10",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              className
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-text-gray/50 group-focus-within:text-primary transition-colors duration-200">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
      </div>
    );
  }
);
Select.displayName = "Select";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label className="text-sm font-medium text-text-dark/95">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute top-3.5 left-4 pointer-events-none text-text-gray/50 group-focus-within:text-primary transition-colors duration-200">
              {icon}
            </div>
          )}
          <textarea
            ref={ref}
            className={cn(
              "w-full py-3 bg-white border border-border/80 rounded-xl text-text-dark text-base placeholder:text-text-gray/40 transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 min-h-[100px] resize-y",
              icon ? "pl-11 pr-4" : "px-4",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              className
            )}
            {...props}
          />
        </div>
        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
