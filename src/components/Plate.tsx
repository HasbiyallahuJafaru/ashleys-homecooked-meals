"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Photo } from "@/lib/content";

type PlateProps = {
  photo?: Photo;
  label?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

// Every image on the site is an orange-rimmed circle. The foil rim turns as the
// plate crosses the viewport, so the foil catches the light on scroll.
export function Plate({ photo, label, sizes, priority, className = "" }: PlateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <div
      ref={ref}
      className={`relative aspect-square rounded-full shadow-plate ${className}`}
    >
      <motion.div
        aria-hidden
        style={reduce ? undefined : { rotate }}
        className="foil-conic absolute inset-0 rounded-full"
      />
      <div aria-hidden className="absolute inset-[3px] rounded-full bg-paper" />
      <div className="absolute inset-[9px] overflow-hidden rounded-full bg-ivory sm:inset-[11px]">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
            style={{ objectPosition: photo.position }}
          />
        ) : (
          <div className="flex h-full items-center justify-center p-8 text-center font-display text-lg italic text-ink-soft">
            {label ?? "Photo to come"}
          </div>
        )}
      </div>
    </div>
  );
}
