import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Car, Users, Fuel, Snowflake, Cog, Phone, MapPin, Clock, Shield,
  Sparkles, BadgeCheck, MousePointer2, Star, ChevronDown, ArrowRight,
  Plane, Route as RouteIcon, Briefcase, Mountain,
  MessageCircle, Menu, X, CheckCircle2, Gauge, HandCoins, Timer, Navigation,
} from "lucide-react";

import heroCar from "@/assets/hero-car.jpg";
import interior from "@/assets/interior.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carHatchback from "@/assets/car-hatchback.jpg";
import carMuv from "@/assets/car-muv.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bezawada Car Rentals — Premium Self Drive & Car Hire in Vijayawada" },
      { name: "description", content: "Luxury self drive cars, car hire with driver, airport transfers, one-way cabs, corporate rentals & outstation trips in Vijayawada. 24×7 support." },
      { property: "og:title", content: "Bezawada Car Rentals — Drive Your Journey with Confidence" },
      { property: "og:description", content: "Premium self drive cars and chauffeur-driven rentals in Vijayawada." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const PHONE = "+919393093095";
const PHONE_DISPLAY = "+91 93930 93095";

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#07111c] text-white selection:bg-[#d4af37]/40">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Fleet />
      <WhyUs />
      <Process />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Ambient background ---------------- */
function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[#d4af37]/10 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#132238] blur-[160px]" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#d4af37]/[0.06] blur-[180px]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Fleet", "#fleet"],
    ["Why Us", "#why"],
    ["Testimonials", "#testimonials"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 lg:px-8`}>
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "bg-transparent"
          }`}
        >
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#8a6c15] shadow-lg shadow-[#d4af37]/25">
              <span className="font-display text-lg font-bold text-[#0d1b2a]">B</span>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold tracking-wide">Bezawada</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">Car Rentals</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative rounded-lg px-3 py-2 text-sm text-white/80 transition hover:text-white"
              >
                {label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-[#d4af37] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 transition hover:border-[#d4af37]/60 hover:text-white"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <GoldButton href="#contact">Book Now</GoldButton>
          </div>

          <button
            className="lg:hidden rounded-lg p-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mt-2 rounded-2xl p-4 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm text-white/85 hover:bg-white/5"
                  >
                    {label}
                  </a>
                ))}
                <div className="mt-2 flex gap-2">
                  <a href={`tel:${PHONE}`} className="flex-1 rounded-full border border-white/15 px-4 py-2 text-center text-sm">Call Now</a>
                  <a href="#contact" className="flex-1 rounded-full bg-[#d4af37] px-4 py-2 text-center text-sm font-semibold text-[#0d1b2a]">Book</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

function GoldButton({
  children,
  href,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300";
  if (variant === "ghost") {
    return (
      <a
        href={href}
        className={`${base} border border-[#d4af37]/50 text-white hover:border-[#d4af37] hover:bg-[#d4af37]/10 ${className}`}
      >
        <span className="relative z-10">{children}</span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    );
  }
  return (
    <a
      href={href}
      className={`${base} bg-gradient-to-r from-[#d4af37] via-[#f5e6a3] to-[#d4af37] bg-[length:200%_100%] text-[#0d1b2a] shadow-lg shadow-[#d4af37]/30 hover:bg-[length:100%_100%] hover:shadow-xl hover:shadow-[#d4af37]/40 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </a>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headline = ["Premium", "Self", "Drive", "Cars", "&", "Car", "Rentals"];

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* background image with parallax zoom */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxury SUV driving on highway at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07111c]/70 via-[#07111c]/50 to-[#07111c]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111c] via-transparent to-[#07111c]/60" />
      {/* light sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -inset-y-10 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent"
          style={{ animation: "lightSweep 8s ease-in-out infinite" }}
        />
      </div>
      {/* floating particles */}
      <FloatingParticles />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-32 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#d4af37]"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Vijayawada's Premier Rental
        </motion.div>

        <h1 className="max-w-4xl font-display text-[44px] leading-[1.02] font-bold sm:text-6xl lg:text-[72px]">
          {headline.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mr-3 inline-block"
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.0, duration: 0.9 }}
            className="block gold-text"
          >
            in Vijayawada
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#b8c2cc] sm:text-lg"
        >
          Affordable self drive cars, chauffeur-driven rentals, one-way cabs and
          airport transfers — backed by 24×7 support and a spotless, verified fleet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <GoldButton href="#contact">Book Now</GoldButton>
          <GoldButton href={`tel:${PHONE}`} variant="ghost">
            Call {PHONE_DISPLAY}
          </GoldButton>
        </motion.div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { k: "Available", v: "Today" },
            { k: "Cars", v: "100+" },
            { k: "Support", v: "24×7" },
            { k: "Booking", v: "Instant" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl px-5 py-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">{s.k}</div>
              <div className="mt-1 font-display text-2xl font-semibold">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center gap-2">
          <div className="relative flex h-10 w-6 justify-center rounded-full border border-white/30 pt-2">
            <span
              className="h-2 w-1 rounded-full bg-[#d4af37]"
              style={{ animation: "scrollWheel 1.6s ease-in-out infinite" }}
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </div>
    </section>
  );
}

function FloatingParticles() {
  const dots = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0">
      {dots.map((_, i) => {
        const size = 4 + ((i * 7) % 8);
        const left = (i * 83) % 100;
        const top = (i * 47) % 100;
        const delay = (i * 0.4) % 4;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-[#d4af37]/60 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `floaty ${6 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              opacity: 0.35,
            }}
          />
        );
      })}
    </div>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const items = [
    "Self Drive Cars", "Airport Transfers", "One-Way Cabs", "Corporate Rentals",
    "Outstation Trips", "Chauffeur Service", "24×7 Support", "Verified Fleet",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-[#0a1524] py-6">
      <div className="flex w-max animate-marquee gap-14 pl-14">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-14 font-display text-2xl text-white/40">
            <span>{t}</span>
            <span className="text-[#d4af37]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Section utils ---------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
      <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
      {children}
    </div>
  );
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-[56px]">
      {children}
    </h2>
  );
}
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-[#d4af37]/20">
              <img src={interior} alt="Luxury car interior" loading="lazy" className="h-[520px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111c] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block glass-strong rounded-2xl p-5 w-56">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#d4af37]/15 text-[#d4af37]">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-display font-semibold">10+</div>
                  <div className="text-xs text-[#b8c2cc]">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionEyebrow>About Bezawada</SectionEyebrow>
          <SectionTitle>
            Crafted for travellers who <span className="gold-text">expect more</span>.
          </SectionTitle>
          <p className="mt-5 max-w-xl text-[#b8c2cc]">
            From weekend getaways to corporate travel, Bezawada Car Rentals delivers a
            meticulously maintained fleet, verified drivers, and transparent pricing —
            all wrapped in a service experience shaped by ten years on Vijayawada's roads.
          </p>

          <div className="mt-10 space-y-6">
            {[
              { t: "Our Mission", d: "Make premium mobility effortless, safe and honest for every traveller." },
              { t: "Our Vision", d: "Be Andhra's most trusted name in self drive and chauffeur-driven rentals." },
              { t: "Our Experience", d: "10+ years, 5000+ bookings and a fleet built for comfort and reliability." },
            ].map((item, i) => (
              <div key={i} className="relative pl-8">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[#d4af37] shadow-[0_0_0_4px_rgba(212,175,55,0.15)]" />
                <div className="font-display text-lg font-semibold">{item.t}</div>
                <div className="mt-1 text-sm text-[#b8c2cc]">{item.d}</div>
                <span className="absolute left-[5px] top-6 h-full w-px bg-gradient-to-b from-[#d4af37]/40 to-transparent" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    { icon: Car, t: "Self Drive Cars", d: "Take the wheel with our clean, well-maintained fleet on flexible daily and weekly plans." },
    { icon: Users, t: "Car Hire with Driver", d: "Professional, verified chauffeurs for city travel, meetings and weekend getaways." },
    { icon: RouteIcon, t: "One Way Cabs", d: "Skip the return fare — book intercity one-way rides across Andhra & Telangana." },
    { icon: Plane, t: "Airport Transfers", d: "On-time pickups and drops at Vijayawada Airport with meet-and-greet service." },
    { icon: Briefcase, t: "Corporate Rentals", d: "Monthly plans, dedicated drivers and priority support for businesses and teams." },
    { icon: Mountain, t: "Outstation Trips", d: "Comfortable sedans, SUVs and MUVs for multi-day tours and pilgrimages." },
  ];
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionEyebrow>Services</SectionEyebrow>
            <SectionTitle>
              Every kind of ride, <span className="gold-text">one signature standard</span>.
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[#b8c2cc]">
              Whether you're driving yourself or sitting back, our service is
              consistent — clean cars, honest fares, and always on time.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function ServiceCard({
  icon: Icon, t, d,
}: { icon: any; t: string; d: string }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(212,175,55,0.18), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-transparent text-[#d4af37] ring-1 ring-[#d4af37]/30">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold">{t}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#b8c2cc]">{d}</p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#d4af37]"
        >
          Book Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#d4af37]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

/* ---------------- Fleet ---------------- */
function Fleet() {
  const cars = [
    { name: "Premium SUV", img: carSuv, seats: 7, trans: "Automatic", fuel: "Diesel", ac: true, tag: "SUV" },
    { name: "Luxury Sedan", img: carSedan, seats: 5, trans: "Automatic", fuel: "Petrol", ac: true, tag: "Sedan" },
    { name: "City Hatchback", img: carHatchback, seats: 5, trans: "Manual", fuel: "Petrol", ac: true, tag: "Hatchback" },
    { name: "Family MUV", img: carMuv, seats: 8, trans: "Manual", fuel: "Diesel", ac: true, tag: "MUV" },
    { name: "Executive Premium", img: carSedan, seats: 5, trans: "Automatic", fuel: "Petrol", ac: true, tag: "Premium" },
  ];
  return (
    <section id="fleet" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionEyebrow>The Fleet</SectionEyebrow>
            <SectionTitle>Choose your <span className="gold-text">ride</span>.</SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[#b8c2cc]">
              Hand-picked models — sanitised between every trip, mechanically checked
              and dressed for the drive.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 -mx-4 overflow-x-auto scroll-smooth px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-6">
            {cars.map((c, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <FleetCard {...c} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function FleetCard({ name, img, seats, trans, fuel, ac, tag }: any) {
  return (
    <div className="group relative w-[320px] shrink-0 snap-start overflow-hidden rounded-3xl glass sm:w-[380px]">
      <div className="relative h-56 overflow-hidden">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent" />
        <div className="absolute top-4 left-4 rounded-full bg-[#d4af37] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d1b2a]">
          {tag}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-2xl font-semibold">{name}</h3>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#b8c2cc]">From</div>
            <div className="font-display text-lg text-[#d4af37]">₹1,499<span className="text-xs text-[#b8c2cc]">/day</span></div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-2 text-center text-xs text-[#b8c2cc]">
          <div className="rounded-xl border border-white/10 py-2">
            <Users className="mx-auto mb-1 h-4 w-4 text-[#d4af37]" />{seats}
          </div>
          <div className="rounded-xl border border-white/10 py-2">
            <Cog className="mx-auto mb-1 h-4 w-4 text-[#d4af37]" />{trans === "Automatic" ? "AT" : "MT"}
          </div>
          <div className="rounded-xl border border-white/10 py-2">
            <Fuel className="mx-auto mb-1 h-4 w-4 text-[#d4af37]" />{fuel}
          </div>
          <div className="rounded-xl border border-white/10 py-2">
            <Snowflake className="mx-auto mb-1 h-4 w-4 text-[#d4af37]" />{ac ? "AC" : "Non-AC"}
          </div>
        </div>

        <a
          href="#contact"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-[#d4af37]/50 py-3 text-sm font-semibold text-white transition hover:bg-[#d4af37] hover:text-[#0d1b2a]"
        >
          Book Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const items = [
    { icon: HandCoins, t: "Affordable Pricing" },
    { icon: Sparkles, t: "Sanitized Vehicles" },
    { icon: BadgeCheck, t: "Verified Drivers" },
    { icon: MapPin, t: "Doorstep Delivery" },
    { icon: Navigation, t: "GPS Enabled" },
    { icon: Clock, t: "24×7 Support" },
    { icon: CheckCircle2, t: "Easy Booking" },
    { icon: Gauge, t: "Transparent Pricing" },
  ];
  return (
    <section id="why" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <SectionEyebrow>Why Bezawada</SectionEyebrow>
          <SectionTitle>
            Eight reasons drivers <span className="gold-text">come back</span>.
          </SectionTitle>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="group relative h-full rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/50">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#d4af37]/15 text-[#d4af37] transition-transform duration-500 group-hover:rotate-6">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-lg font-semibold">{it.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { icon: Car, t: "Choose Car", d: "Pick from SUVs, sedans, hatchbacks & MUVs." },
    { icon: MousePointer2, t: "Book Online", d: "Reserve in under 60 seconds — call or web." },
    { icon: Shield, t: "Verification", d: "Quick KYC & confirmation from our team." },
    { icon: MapPin, t: "Pickup", d: "Doorstep delivery or self pickup — your call." },
    { icon: Timer, t: "Drive", d: "Hit the road with confidence. We're on call 24×7." },
  ];
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <SectionEyebrow>How it works</SectionEyebrow>
          <SectionTitle>From click to <span className="gold-text">key handover</span>.</SectionTitle>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent lg:block" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative rounded-2xl glass p-6 text-center">
                  <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0d1b2a] ring-1 ring-[#d4af37]/50">
                    <s.icon className="h-6 w-6 text-[#d4af37]" />
                    <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-[#d4af37] text-[10px] font-bold text-[#0d1b2a]">
                      {i + 1}
                    </span>
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold">{s.t}</div>
                  <div className="mt-2 text-xs text-[#b8c2cc]">{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setVal(Math.round(p * to));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration, started]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}
function Stats() {
  const stats = [
    { v: 5000, s: "+", l: "Happy Bookings" },
    { v: 100, s: "+", l: "Cars in Fleet" },
    { v: 10, s: "+", l: "Years Experience" },
    { v: 24, s: "×7", l: "Live Support" },
  ];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-3xl glass-strong p-8 md:grid-cols-4 lg:p-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl font-bold gold-text sm:text-5xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-[#b8c2cc]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    { n: "Rakesh K.", r: "Airport Transfer", q: "Driver was on time, car was spotless. Made my early morning flight stress-free. Best in Vijayawada." },
    { n: "Priya S.", r: "Self Drive", q: "Booked an SUV for a weekend trip to Araku. Doorstep delivery, no hidden charges. Loved every mile." },
    { n: "Anil M.", r: "Corporate Rental", q: "We use Bezawada monthly for our team travel. Reliable drivers, transparent invoices — total peace of mind." },
    { n: "Sneha R.", r: "Outstation Trip", q: "Comfortable MUV for our family pilgrimage. Very courteous chauffeur. Highly recommend." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <SectionTitle>Voices from the <span className="gold-text">road</span>.</SectionTitle>
        </Reveal>

        <div className="relative mt-14 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl rounded-3xl glass-strong p-8 text-center lg:p-12"
            >
              <div className="mx-auto flex w-fit gap-1 text-[#d4af37]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[#d4af37]" />
                ))}
              </div>
              <p className="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
                “{items[i].q}”
              </p>
              <div className="mt-6">
                <div className="font-semibold">{items[i].n}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37]">{items[i].r}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === k ? "w-8 bg-[#d4af37]" : "w-3 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "What documents do I need to rent a self drive car?", a: "A valid driving licence, Aadhaar card, and a refundable security deposit at pickup." },
    { q: "Do you offer doorstep delivery in Vijayawada?", a: "Yes — we deliver and pick up the vehicle from your address across Vijayawada for a small convenience fee." },
    { q: "Is fuel included in the rental?", a: "No. Cars come with a fuel level noted at pickup; return with the same level, or pay for the difference." },
    { q: "Can I extend my booking?", a: "Absolutely. Call us at least 4 hours before drop-off and we'll extend based on availability." },
    { q: "Do you provide airport pickups at odd hours?", a: "Yes, our chauffeur service is 24×7 including all major airport pickups and drops in Vijayawada." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <Reveal>
          <div className="text-center">
            <SectionEyebrow>FAQ</SectionEyebrow>
          </div>
          <h2 className="mt-4 text-center font-display text-4xl font-bold sm:text-5xl">
            Questions, <span className="gold-text">answered</span>.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`overflow-hidden rounded-2xl glass transition-all ${isOpen ? "border-[#d4af37]/50" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-[#d4af37] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <div className="px-6 pb-5 text-sm text-[#b8c2cc]">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-[#d4af37]/30 bg-gradient-to-br from-[#0d1b2a] via-[#132238] to-[#0d1b2a] p-10 lg:p-16">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <Reveal>
              <SectionEyebrow>Ready when you are</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                Book your ride <span className="gold-text">today</span>.
              </h2>
              <p className="mt-4 max-w-md text-[#b8c2cc]">
                Instant confirmations, transparent pricing and a car ready at your door.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center justify-start gap-4 lg:justify-end">
                <GoldButton href="#contact">Book Now</GoldButton>
                <GoldButton href={`tel:${PHONE}`} variant="ghost">Call Now</GoldButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <SectionEyebrow>Contact</SectionEyebrow>
          <SectionTitle>Reach the <span className="gold-text">Bezawada</span> desk.</SectionTitle>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal>
            <ContactCard icon={MapPin} title="Visit Us">
              48-19-2/2/GF, Vinayaka Temple Road,<br />
              Nagarjuna Nagar, Sri Ramachandra Nagar,<br />
              Kanuru, Vijayawada, AP - 520008
            </ContactCard>
          </Reveal>
          <Reveal delay={0.05}>
            <ContactCard icon={Phone} title="Call & WhatsApp">
              <a href={`tel:${PHONE}`} className="block text-white hover:text-[#d4af37]">{PHONE_DISPLAY}</a>
              <a href={`https://wa.me/919393093095`} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-[#d4af37]">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </ContactCard>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactCard icon={Clock} title="Working Hours">
              Open 24×7 — every day of the year.<br />
              Booking desk & support available around the clock.
            </ContactCard>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#d4af37]/20">
            <iframe
              title="Bezawada Car Rentals location"
              src="https://www.google.com/maps?q=Kanuru,+Vijayawada,+Andhra+Pradesh+520008&output=embed"
              className="h-[400px] w-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function ContactCard({ icon: Icon, title, children }: any) {
  return (
    <div className="h-full rounded-3xl glass p-7">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#d4af37]/15 text-[#d4af37]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-[#b8c2cc]">{children}</div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050d16] py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#8a6c15]">
              <span className="font-display text-lg font-bold text-[#0d1b2a]">B</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold">Bezawada</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">Car Rentals</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-[#b8c2cc]">
            Drive your journey with confidence. Premium self drive and chauffeur-driven
            rentals across Vijayawada.
          </p>
        </div>
        <FooterCol title="Quick Links" items={[
          ["Home", "#home"], ["About", "#about"], ["Fleet", "#fleet"],
          ["Why Us", "#why"], ["Testimonials", "#testimonials"],
        ]} />
        <FooterCol title="Services" items={[
          ["Self Drive Cars", "#services"],
          ["Car Hire with Driver", "#services"],
          ["One Way Cabs", "#services"],
          ["Airport Transfers", "#services"],
          ["Outstation Trips", "#services"],
        ]} />
        <div>
          <div className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Contact</div>
          <div className="space-y-3 text-sm text-[#b8c2cc]">
            <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#d4af37]" /> Kanuru, Vijayawada</div>
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-[#d4af37]" />{PHONE_DISPLAY}</a>
            <a href="https://wa.me/919393093095" className="flex items-center gap-2 hover:text-white"><MessageCircle className="h-4 w-4 text-[#d4af37]" />WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 px-4 pt-6 text-xs text-[#b8c2cc] md:flex-row lg:px-8">
        <div>© {new Date().getFullYear()} Bezawada Car Rentals. All rights reserved.</div>
        <div>Crafted with care in Vijayawada.</div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">{title}</div>
      <ul className="space-y-3 text-sm text-[#b8c2cc]">
        {items.map(([l, h]) => (
          <li key={l}><a href={h} className="transition hover:text-white">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
