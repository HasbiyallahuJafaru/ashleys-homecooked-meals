import {
  ChatCircleText,
  FacebookLogo,
  InstagramLogo,
  Phone,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { GoldThread } from "@/components/GoldThread";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Nav } from "@/components/Nav";
import { Plate } from "@/components/Plate";
import { FoilRule, Reveal } from "@/components/Reveal";
import { Steps } from "@/components/Steps";
import { SundayBand } from "@/components/SundayBand";
import { business, links, photos, socials } from "@/lib/content";

const socialIcons = {
  Facebook: FacebookLogo,
  Instagram: InstagramLogo,
  TikTok: TiktokLogo,
};

const wrap = "mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16";

export default function Home() {
  return (
    <>
      <Nav />
      <GoldThread />
      <main id="main">
        <Hero />

        <section aria-label="At a glance" className="border-y border-rule bg-ivory">
          <dl className={`${wrap} grid divide-rule sm:grid-cols-3 sm:divide-x`}>
            {[
              ["When", `${business.days}. Times vary.`],
              ["How", "Pre-orders only, at least 24 hours ahead."],
              ["Where", "Curbside pickup in Tacoma, Washington."],
            ].map(([term, detail]) => (
              <div key={term} className="py-7 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <dt className="font-display text-2xl italic text-accent-deep">{term}</dt>
                <dd className="mt-1 text-ink">{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="story-title" className="py-24 lg:py-40">
          <div className={`${wrap} relative`}>
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <h2
                  id="story-title"
                  className="text-4xl leading-[1.12] tracking-[-0.015em] sm:text-5xl lg:text-6xl"
                >
                  We&rsquo;re a new small business serving up homemade soulful meals{" "}
                  <em className="text-accent-deep">made with love.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mx-auto mt-8 max-w-[56ch] text-lg text-ink-soft">
                  From modest beginnings, we&rsquo;ve grown through unwavering dedication and a
                  commitment to continuous improvement. Cooking in Tacoma since {business.since}.
                </p>
              </Reveal>
            </div>
            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 items-center gap-5 sm:gap-10">
              <Reveal>
                <Plate photo={photos.greens} sizes="(min-width: 640px) 14rem, 28vw" />
              </Reveal>
              <Reveal delay={0.12} className="-mt-10">
                <Plate photo={photos.basketCounter} sizes="(min-width: 640px) 14rem, 28vw" />
              </Reveal>
              <Reveal delay={0.24}>
                <Plate photo={photos.pudding} sizes="(min-width: 640px) 14rem, 28vw" />
              </Reveal>
            </div>
          </div>
        </section>

        <MenuSection />

        <SundayBand />

        <section id="order" aria-labelledby="order-title" className="py-24 lg:py-36">
          <div className={`${wrap} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <h2
                    id="order-title"
                    className="text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl"
                  >
                    How to order
                  </h2>
                  <p className="mt-5 max-w-[40ch] text-ink-soft">
                    Feeding a crowd? For larger orders, get in touch even further in advance.
                  </p>
                  <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <Button href={links.order}>
                      <ChatCircleText size={19} weight="bold" aria-hidden />
                      Text to order
                    </Button>
                    <a href={links.call} className="link-accent px-2 py-3 font-semibold">
                      {business.phoneDisplay}
                    </a>
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Steps />
            </div>
          </div>
        </section>

        <section id="catering" aria-labelledby="catering-title" className="pb-24 lg:pb-36">
          <div className={wrap}>
            <Reveal>
              <div className="relative border border-rule px-6 py-16 text-center before:pointer-events-none before:absolute before:inset-[6px] before:border before:border-accent/70 sm:px-12 lg:py-28">
                <div className="absolute -left-6 -top-10 hidden w-36 md:block lg:-left-10 lg:w-52">
                  <Plate photo={photos.mac} sizes="13rem" />
                </div>
                <div className="absolute -bottom-10 -right-6 hidden w-36 md:block lg:-right-10 lg:w-52">
                  <Plate photo={photos.pudding} sizes="13rem" />
                </div>
                <div className="relative mx-auto max-w-3xl">
                  <h2
                    id="catering-title"
                    className="text-4xl leading-[1.1] tracking-[-0.015em] sm:text-5xl lg:text-6xl"
                  >
                    Let Ashley&rsquo;s Homecooked Meals cater your next event.
                  </h2>
                  <p className="mx-auto mt-6 max-w-[50ch] text-lg text-ink-soft">
                    Soul food by the tray for gatherings in and around Tacoma. Tell Ashley the
                    date and how many you are feeding.
                  </p>
                  <div className="mt-9">
                    <Button href={links.catering} variant="line">
                      Ask about catering
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-label="What customers say" className="pb-24 lg:pb-36">
          <figure className={`${wrap} text-center`}>
            <FoilRule className="mx-auto mb-14 max-w-xl" />
            <Reveal>
              <blockquote className="mx-auto max-w-4xl font-display text-3xl italic leading-[1.25] sm:text-5xl">
                &ldquo;The food from Ashley&rsquo;s Homecooked Meals is absolutely divine!&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-ink-soft">A customer in Tacoma</figcaption>
            </Reveal>
          </figure>
        </section>

        <section id="visit" aria-labelledby="visit-title" className="bg-ivory py-24 lg:py-32">
          <div className={wrap}>
            <Reveal>
              <h2
                id="visit-title"
                className="max-w-3xl text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl"
              >
                Pull up a chair.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-12 border-t border-accent/60 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal>
                <h3 className="text-2xl italic text-accent-deep">Open</h3>
                <p className="mt-3">{business.days}.</p>
                <p className="text-ink-soft">Times vary. Pre-orders only.</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="text-2xl italic text-accent-deep">Order</h3>
                <p className="mt-3">
                  <a href={links.call} className="link-accent inline-flex items-center gap-2 py-1">
                    <Phone size={17} aria-hidden />
                    {business.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a href={links.email} className="link-accent inline-block break-all py-1">
                    {business.email}
                  </a>
                </p>
                <p className="text-ink-soft">{business.city}</p>
              </Reveal>
              <Reveal delay={0.16}>
                <h3 className="text-2xl italic text-accent-deep">Pay</h3>
                <dl className="mt-3 space-y-1">
                  <div>
                    <dt className="text-ink-soft">Cash App</dt>
                    <dd className="break-all">{business.cashApp}</dd>
                  </div>
                  <div className="pt-2">
                    <dt className="text-ink-soft">Zelle</dt>
                    <dd className="tabular-nums">{business.zelle}</dd>
                  </div>
                </dl>
                <p className="mt-1 text-ink-soft">Payment is due when you order.</p>
              </Reveal>
              <Reveal delay={0.24}>
                <h3 className="text-2xl italic text-accent-deep">Follow</h3>
                <ul className="mt-3">
                  {socials.map((s) => {
                    const Icon = socialIcons[s.name];
                    return (
                      <li key={s.name}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-accent inline-flex items-center gap-2 py-1"
                        >
                          <Icon size={18} aria-hidden />
                          <span className="sr-only">{s.name}: </span>
                          {s.handle}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
            <Reveal className="mt-16">
              <Button href={links.order}>
                <ChatCircleText size={19} weight="bold" aria-hidden />
                Text to order
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule py-12">
        <div className={`${wrap} grid gap-8 lg:grid-cols-12`}>
          <p className="lg:col-span-4">
            <span className="font-script text-5xl leading-[1.2] text-accent-deep">Ashley&rsquo;s</span>
            <span className="mt-1 block font-display text-sm uppercase tracking-[0.22em]">
              Homecooked Meals
            </span>
          </p>
          <p className="max-w-[60ch] text-[0.95rem] text-ink-soft lg:col-span-5">
            Please be aware that some of our menu items may contain common allergens, including
            shellfish, dairy, eggs, nuts and gluten.
          </p>
          <p className="text-[0.95rem] text-ink-soft lg:col-span-3 lg:text-right">
            &copy; 2026 {business.name}
          </p>
        </div>
      </footer>
    </>
  );
}
