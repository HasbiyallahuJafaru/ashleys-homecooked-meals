import type { ReactNode } from "react";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 text-[0.95rem] font-semibold tracking-wide transition duration-300 ease-out-expo active:scale-[0.97]";

const variants = {
  foil: "foil text-ink shadow-[0_14px_28px_-16px_rgb(150_62_8/0.7)] hover:-translate-y-0.5 hover:shadow-[0_20px_32px_-16px_rgb(150_62_8/0.75)] hover:brightness-105",
  line: "border border-accent text-ink hover:bg-ivory",
};

export function Button({
  href,
  variant = "foil",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
