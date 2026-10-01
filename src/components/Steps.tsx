"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { steps } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Steps() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.55"] });

  return (
    <ol ref={ref} className="relative space-y-14 pl-[4.75rem] sm:pl-24">
      <span aria-hidden className="absolute bottom-6 left-7 top-6 w-px bg-rule" />
      <motion.span
        aria-hidden
        style={reduce ? undefined : { scaleY: scrollYProgress }}
        className="foil absolute bottom-6 left-7 top-6 w-px origin-top"
      />
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <Reveal>
            <span
              aria-hidden
              className="foil absolute left-[-4.75rem] top-[-0.35rem] grid size-14 place-items-center rounded-full sm:left-[-6rem]"
            >
              <span className="grid size-[3.2rem] place-items-center rounded-full bg-paper font-display text-2xl tabular-nums">
                {i + 1}
              </span>
            </span>
            <h3 className="text-3xl sm:text-4xl">{step.title}</h3>
            <p className="mt-3 max-w-[52ch] text-ink-soft">{step.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
