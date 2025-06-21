
"use client";

import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

// --- Individual Shape Components ---

const CircleGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="4" cy="4" r="4" fill="currentColor"/>
    <circle cx="4" cy="24" r="4" fill="currentColor"/>
    <circle cx="4" cy="44" r="4" fill="currentColor"/>
    <circle cx="4" cy="64" r="4" fill="currentColor"/>
    <circle cx="4" cy="84" r="4" fill="currentColor"/>
    <circle cx="24" cy="4" r="4" fill="currentColor"/>
    <circle cx="24" cy="24" r="4" fill="currentColor"/>
    <circle cx="24" cy="44" r="4" fill="currentColor"/>
    <circle cx="24" cy="64" r="4" fill="currentColor"/>
    <circle cx="24" cy="84" r="4" fill="currentColor"/>
    <circle cx="44" cy="4" r="4" fill="currentColor"/>
    <circle cx="44" cy="24" r="4" fill="currentColor"/>
    <circle cx="44" cy="44" r="4" fill="currentColor"/>
    <circle cx="44" cy="64" r="4" fill="currentColor"/>
    <circle cx="44" cy="84" r="4" fill="currentColor"/>
    <circle cx="64" cy="4" r="4" fill="currentColor"/>
    <circle cx="64" cy="24" r="4" fill="currentColor"/>
    <circle cx="64" cy="44" r="4" fill="currentColor"/>
    <circle cx="64" cy="64" r="4" fill="currentColor"/>
    <circle cx="64" cy="84" r="4" fill="currentColor"/>
    <circle cx="84" cy="4" r="4" fill="currentColor"/>
    <circle cx="84" cy="24" r="4" fill="currentColor"/>
    <circle cx="84" cy="44" r="4" fill="currentColor"/>
    <circle cx="84" cy="64" r="4" fill="currentColor"/>
    <circle cx="84" cy="84" r="4" fill="currentColor"/>
  </svg>
);

const Plus = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M50 0V100" stroke="currentColor" strokeWidth="8"/>
        <path d="M0 50L100 50" stroke="currentColor" strokeWidth="8"/>
    </svg>
);

const Wiggle = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 188 127" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M185.5 2C143.292 23.6358 52.8427 101.353 2.5 124.5" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    </svg>
);

const Triangle = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M50 0L100 86.6H0L50 0Z" fill="currentColor"/>
    </svg>
);

const Square = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" stroke="currentColor" strokeWidth="8"/>
  </svg>
);

// --- Main Shapes Component ---

interface GeometricShapesProps {
  variant: 'hero' | 'features' | 'how-it-works' | 'cta';
  className?: string;
}

export const GeometricShapes = ({ variant, className }: GeometricShapesProps) => {
  // Use theme colors with opacity for subtlety. Adapts to light/dark mode.
  const baseColor = "text-foreground/5 dark:text-foreground/10";
  const accentColor = "text-primary/10 dark:text-primary/15";

  const renderShapes = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            <CircleGrid className={cn(baseColor, "absolute -top-24 -left-24 w-80 h-80")} />
            <Triangle className={cn(accentColor, "absolute -bottom-24 -right-12 w-72 h-72 transform rotate-12")} />
          </>
        );
      case 'features':
        return (
          <>
            <Plus className={cn(accentColor, "absolute -top-10 -right-10 w-48 h-48 transform rotate-45")} />
            <Wiggle className={cn(baseColor, "absolute bottom-10 left-0 w-96 h-96 transform -rotate-12")} />
          </>
        );
      case 'how-it-works':
        return (
          <>
             <Square className={cn(baseColor, "absolute top-1/4 -left-20 w-64 h-64 transform rotate-[30deg]")} />
             <Plus className={cn(accentColor, "absolute bottom-1/4 -right-16 w-56 h-56 transform -rotate-12")} />
          </>
        );
      case 'cta':
        return (
          <>
            <Triangle className={cn("text-white/10", "absolute top-0 right-0 w-80 h-80 transform translate-x-1/3 -translate-y-1/3 rotate-45")} />
            <CircleGrid className={cn("text-white/5", "absolute bottom-0 left-0 w-96 h-96 transform -translate-x-1/4 translate-y-1/4")} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 hidden md:block",
        className
      )}
    >
      {renderShapes()}
    </div>
  );
};
