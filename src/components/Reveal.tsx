"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// The foil rule that opens each section: it draws outward from its centre
// ornament, the way a line is stamped on an invitation.
export function FoilRule({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className={`relative flex items-center justify-center ${className}`}>
      <motion.span
        className="foil-rule block w-full origin-center"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1.4, ease }}
      />
      <motion.span
        className="foil absolute size-2.5 rotate-45"
        initial={reduce ? false : { scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      />
    </div>
  );
}
