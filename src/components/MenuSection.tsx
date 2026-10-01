"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { menu, sides, type MenuGroup } from "@/lib/content";
import { Plate } from "./Plate";
import { FoilRule, Reveal } from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

function Group({ group, onActive }: { group: MenuGroup; onActive: () => void }) {
  return (
    <motion.section
      aria-labelledby={`menu-${group.id}`}
      onViewportEnter={onActive}
      viewport={{ margin: "-45% 0px -45% 0px" }}
      className="pt-14 first:pt-0"
    >
      <Reveal>
        <div className="mb-7 flex items-center gap-5 lg:hidden">
          <Plate photo={group.photo} sizes="120px" className="w-24 shrink-0" />
          <p className="text-sm text-ink-soft">{group.photo.caption}</p>
        </div>
        <h3 id={`menu-${group.id}`} className="text-3xl italic text-accent-deep sm:text-4xl">
          {group.title}
        </h3>
        {group.note && <p className="mt-2 text-[0.95rem] text-ink-soft">{group.note}</p>}
      </Reveal>
      <ul className="mt-7 space-y-6">
        {group.items.map((item, i) => (
          <li key={item.name}>
            <Reveal delay={Math.min(i, 5) * 0.05}>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-xl sm:text-[1.4rem]">{item.name}</span>
                <span
                  aria-hidden
                  className="min-w-6 flex-1 translate-y-[-0.3em] border-b border-dotted border-accent/70"
                />
                <span className="font-display text-xl tabular-nums sm:text-[1.4rem]">
                  {item.price}
                </span>
              </div>
              {item.detail && (
                <p className="mt-1 max-w-[52ch] text-[0.98rem] text-ink-soft">{item.detail}</p>
              )}
              {item.note && <p className="mt-1 text-[0.95rem] text-accent-deep">{item.note}</p>}
            </Reveal>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const photo = menu[active].photo;

  return (
    <section id="menu" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
        <FoilRule className="mb-16 lg:mb-24" />
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <h2 className="text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                  The menu
                </h2>
                <p className="mt-4 max-w-[38ch] text-ink-soft">
                  Everything is cooked for your order. Prices are per meal.
                </p>
              </Reveal>
              <div className="mt-12 hidden lg:block">
                <div className="relative w-[82%]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={photo.src}
                      initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: -14 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06, rotate: 10 }}
                      transition={{ duration: 0.8, ease }}
                    >
                      <Plate photo={photo} sizes="34vw" />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <p aria-live="polite" className="mt-6 text-sm text-ink-soft">
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {menu.map((group, i) => (
              <Group key={group.id} group={group} onActive={() => setActive(i)} />
            ))}

            <Reveal className="mt-16 border border-rule bg-ivory p-7 sm:p-9">
              <h3 className="text-2xl">Sides to choose from</h3>
              <p className="mt-3 text-ink">{sides.join(", ")}.</p>
              <p className="mt-4 text-[0.95rem] text-ink-soft">
                Load your wedges with cheese and bacon for $3. Side dishes, a side of wings and
                extra catfish fillets are add-ons to meals only and cannot be bought on their own.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
