"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ChatCircleText } from "@phosphor-icons/react";
import { links, photos } from "@/lib/content";
import { Button } from "./Button";
import { Plate } from "./Plate";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bigY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const bigScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const smallY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const cardOpacity = useTransform(scrollYProgress, [0.35, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pb-14 pt-24 lg:pb-16"
    >
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-16">
        <motion.div
          style={reduce ? undefined : { y: cardY, opacity: cardOpacity }}
          className="lg:col-span-6"
        >
          <motion.div
            initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.3, ease }}
            className="relative border border-rule bg-paper p-7 before:pointer-events-none before:absolute before:inset-[6px] before:border before:border-accent/70 sm:p-10 lg:p-12"
          >
            <motion.div
              variants={stagger}
              initial={reduce ? false : "hidden"}
              animate="show"
              className="relative"
            >
              <motion.h1
                variants={rise}
                className="text-[2.3rem] leading-[1.06] tracking-[-0.02em] sm:text-6xl lg:text-[4.6rem]"
              >
                Soul food, <em className="text-accent-deep">made with love.</em>
              </motion.h1>
              <motion.p variants={rise} className="mt-6 max-w-[42ch] text-lg text-ink-soft">
                Homemade plates cooked to order in Tacoma. Pre&#8209;order by text and pick up curbside.
              </motion.p>
              <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={links.order}>
                  <ChatCircleText size={19} weight="bold" aria-hidden />
                  Text to order
                </Button>
                <Button href="#menu" variant="line">
                  See the menu
                </Button>
              </motion.div>
              <motion.p
                variants={rise}
                className="mt-9 flex flex-col gap-1 border-t sm:flex-row sm:items-baseline sm:gap-3 border-rule pt-5"
              >
                <span className="whitespace-nowrap font-script text-[2rem] leading-[1.25] text-accent-deep sm:text-4xl">
                  Let me feed you.
                </span>
                <span className="text-sm text-ink-soft">Ashley, founder</span>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-6 lg:max-w-none lg:pl-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.78, rotate: -18 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease }}
          >
            <motion.div style={reduce ? undefined : { y: bigY, scale: bigScale }}>
              <Plate
                photo={photos.steakPlate}
                priority
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="ml-auto w-[94%]"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.6, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5, ease }}
            className="absolute bottom-[-4%] left-0 w-[38%]"
          >
            <motion.div style={reduce ? undefined : { y: smallY }}>
              <Plate photo={photos.mac} priority sizes="(min-width: 1024px) 18vw, 34vw" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
