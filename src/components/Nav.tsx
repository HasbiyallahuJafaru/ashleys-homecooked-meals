"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ChatCircleText, List, X } from "@phosphor-icons/react";
import { links } from "@/lib/content";
import { Button } from "./Button";

const items = [
  { href: "#menu", label: "Menu" },
  { href: "#order", label: "How to order" },
  { href: "#catering", label: "Catering" },
  { href: "#visit", label: "Find us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    if (next !== scrolled) setScrolled(next);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-500 ${
        scrolled || open
          ? "bg-paper/92 shadow-[0_1px_0_var(--color-rule)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-16">
        <a href="#top" className="flex items-baseline gap-2 leading-none" aria-label="Ashley's Homecooked Meals, back to top">
          <span className="font-script text-[2rem] text-accent-deep">Ashley&rsquo;s</span>
          <span className="hidden font-display text-[0.8rem] uppercase tracking-[0.22em] text-ink sm:inline">
            Homecooked Meals
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[0.95rem] text-ink"
            >
              {item.label}
              <span className="foil absolute inset-x-0 bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={links.order} className="min-h-11 px-5">
            <ChatCircleText size={18} weight="bold" aria-hidden />
            Text to order
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-rule text-ink md:hidden"
          >
            {open ? <X size={20} aria-hidden /> : <List size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-rule md:hidden"
          >
            <ul className="px-5 py-4 sm:px-8">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
