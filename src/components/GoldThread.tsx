"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

// One accent thread runs the length of the page and draws itself as you read.
export function GoldThread() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const beadY = useTransform(progress, (v) => `${v * 100}vh`);

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-y-0 left-6 z-30 hidden w-px lg:block">
      <div className="absolute inset-0 bg-rule/50" />
      <motion.div style={{ scaleY: progress }} className="foil absolute inset-0 origin-top" />
      <motion.div
        style={{ y: beadY }}
        className="foil absolute -left-[3px] -top-1 size-[7px] rotate-45"
      />
    </div>
  );
}
