import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk, Pinyon_Script } from "next/font/google";
import { business, socials } from "@/lib/content";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

const description =
  "Homemade soul food in Tacoma, Washington, cooked to order and made with love. Pre-order by text for curbside pickup on Thursdays, Fridays and Sundays.";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: "Ashley's Homecooked Meals | Homemade soul food in Tacoma",
  description,
  openGraph: {
    title: "Ashley's Homecooked Meals",
    description,
    images: ["/images/steak-plate.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const contract = `<!--
THESIS: The site is an orange-foil dinner invitation and menu card to Ashley's table. It refuses the restaurant template of a full-bleed hero photo over a card grid.
OWN-WORLD: White card stock, ivory insets, foil-orange hairlines and double rules, engraved Bodoni display, Pinyon script for Ashley's own words, every photo an orange-rimmed circle whose rim turns in the light as you scroll.
STORY: Visitor sees real plates and real prices, understands it is pre-order and cooked for them, then texts Ashley.
FIRST VIEWPORT: Left, a ruled invitation card holding the headline at display scale, one line of offer and the Text to order action. Right, one large orange-rimmed plate with a smaller plate overlapping its lower left.
FORM: Orange-foil dinner invitation, candidate 6 of 7, seed cbbf4431.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  description,
  telephone: business.phoneE164,
  email: business.email,
  servesCuisine: "Soul food",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tacoma",
    addressRegion: "WA",
    addressCountry: "US",
  },
  sameAs: socials.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${hanken.variable} ${pinyon.variable} antialiased`}
    >
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: contract }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
