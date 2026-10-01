"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { photos, sunday } from "@/lib/content";
import { Plate } from "./Plate";
import { Reveal } from "./Reveal";

// The ivory ground opens from a single point, like a plate being set down,
// as the section scrolls into view.
export function SundayBand() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.15"] });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["circle(0% at 50% 30%)", "circle(110% at 50% 30%)"],
  );

  return (
    <section ref={ref} aria-labelledby="sunday-title" className="relative py-24 lg:py-36">
      <motion.div
        aria-hidden
        style={reduce ? undefined : { clipPath }}
        className="absolute inset-0 bg-ivory"
      />
      <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">
        <Reveal>
          <Plate
            photo={photos.basket}
            sizes="(min-width: 1024px) 26rem, 70vw"
            className="mx-auto w-[70%] max-w-[26rem]"
          />
        </Reveal>
        <Reveal className="mt-12">
          <p className="font-script text-5xl leading-[1.2] text-accent-deep sm:text-6xl">
            Sundays only
          </p>
          <h2
            id="sunday-title"
            className="mt-2 text-5xl leading-[1.05] tracking-[-0.02em] sm:text-7xl"
          >
            {sunday.title}
          </h2>
        </Reveal>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {sunday.includes.map((line, i) => (
            <li key={line} className="lg:border-l lg:border-rule lg:first:border-l-0">
              <Reveal delay={i * 0.08} className="px-4 font-display text-xl">
                {line}
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-12">
          <p className="font-display text-6xl tabular-nums text-accent-deep">{sunday.price}</p>
        </Reveal>
      </div>
    </section>
  );
}
