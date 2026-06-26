"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import AboutSection from "./AboutSection";

// ─── Types ───────────────────────────────────────────────────────────────────
type NoteData = {
  id: number;
  text: string;
  bg: string;
  pinColor: string;
  rotate: number;
  icon: React.ReactNode;
  pathway: { title: string; items: string[] };
  dashed?: boolean;
  cta?: boolean;
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const PlaneIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 17L4 11l5 6-5 6z" /><path d="M9 17h18" />
    <path d="M13 11l4-6 4 6" /><path d="M13 23l4 6 4-6" />
  </svg>
);

const RobotIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="13" width="18" height="14" rx="3" /><rect x="12" y="17" width="4" height="4" rx="1" /><rect x="18" y="17" width="4" height="4" rx="1" />
    <line x1="17" y1="8" x2="17" y2="13" /><circle cx="17" cy="6.5" r="2.5" />
    <path d="M8 21H4v-4h4" /><path d="M26 21h4v-4h-4" />
    <line x1="13" y1="27" x2="13" y2="31" /><line x1="21" y1="27" x2="21" y2="31" />
  </svg>
);

const ChartIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="21" width="7" height="10" rx="1" /><rect x="13" y="14" width="7" height="17" rx="1" /><rect x="23" y="7" width="7" height="24" rx="1" />
    <line x1="1" y1="31" x2="33" y2="31" />
  </svg>
);

const HeartIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 29 L4 17a7.5 7.5 0 0 1 13-7 7.5 7.5 0 0 1 13 7z" />
  </svg>
);

const CrownIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 26h26L34 9l-9 7-8-12-8 12-9-7z" /><line x1="4" y1="30" x2="30" y2="30" />
  </svg>
);

const LightbulbIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3a7 7 0 0 1 5 12c-.7.7-1 1.6-1 2.5V19H10v-1.5c0-.9-.3-1.8-1-2.5A7 7 0 0 1 14 3z" />
    <line x1="10" y1="22" x2="18" y2="22" /><line x1="11" y1="25" x2="17" y2="25" />
  </svg>
);

const BookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h8a4 4 0 0 1 4 4v16a3 3 0 0 0-3-3H4z" /><path d="M24 4h-8a4 4 0 0 0-4 4v16a3 3 0 0 1 3-3h9z" />
  </svg>
);

const ToolsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4l-8 8-4 8 8-4 8-8z" /><path d="M4 24l8-8" />
    <circle cx="22" cy="6" r="2" />
  </svg>
);

const RocketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 24l4-4" /><path d="M10 18l4-8 8-6-6 8z" />
    <path d="M18 4a10 10 0 0 1 6 6l-4 4V8z" />
  </svg>
);

// ─── Notes Data ───────────────────────────────────────────────────────────────
const NOTES: NoteData[] = [
  {
    id: 1,
    text: "I want to become a pilot.",
    bg: "#FF85B8",
    pinColor: "#F58220",
    rotate: -3,
    icon: <PlaneIcon />,
    pathway: { title: "Aviation & STEM", items: ["Real flight exposure", "Aeronautics projects", "Career mentorship", "Leadership training"] },
  },
  {
    id: 2,
    text: "I want to build a robot.",
    bg: "#FFD700",
    pinColor: "#17479E",
    rotate: 2.5,
    icon: <RobotIcon />,
    pathway: { title: "Technology Program", items: ["Coding & robotics", "Hands-on STEM", "Innovation workshops", "Tech mentorship"] },
  },
  {
    id: 3,
    text: "I want to start a business.",
    bg: "#60AEFF",
    pinColor: "#7C3AED",
    rotate: -1.5,
    icon: <ChartIcon />,
    pathway: { title: "Entrepreneurship", items: ["Business fundamentals", "Startup thinking", "Financial literacy", "Pitch coaching"] },
  },
  {
    id: 4,
    text: "I want to help my community.",
    bg: "#4DD68A",
    pinColor: "#16A34A",
    rotate: 3,
    icon: <HeartIcon />,
    pathway: { title: "Community Leadership", items: ["Social projects", "Agriculture programs", "Community service", "Teamwork skills"] },
  },
  {
    id: 5,
    text: "I want to be a great leader.",
    bg: "#A78BFA",
    pinColor: "#17479E",
    rotate: -2,
    icon: <CrownIcon />,
    pathway: { title: "Leadership Pathways", items: ["Confidence building", "Public speaking", "Mentorship circles", "Life skills"] },
  },
  {
    id: 6,
    text: "What's your dream?",
    bg: "#FFF8F0",
    pinColor: "#F58220",
    rotate: 1.5,
    icon: (
      <div className="w-9 h-9 rounded-full border-2 border-[#F58220] flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#F58220" strokeWidth="2.5" strokeLinecap="round">
          <line x1="9" y1="2" x2="9" y2="16" /><line x1="2" y1="9" x2="16" y2="9" />
        </svg>
      </div>
    ),
    pathway: { title: "Share your dream", items: ["Tell us your goal", "We find the path", "Join DreamDo", "Start your journey"] },
    dashed: true,
    cta: true,
  },
];

// ─── Decoratives ──────────────────────────────────────────────────────────────
const StarDecor = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 1l2.2 5.6 5.8.5-4.4 4 1.4 5.9L10 14.2l-5 2.8 1.4-5.9L2 7.1l5.8-.5z" />
  </svg>
);

const SparkleDecor = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0l1.4 5.6L15 8l-5.6 1.4L8 15l-1.4-5.6L1 8l5.6-1.4z" />
  </svg>
);

// ─── StickyNote ───────────────────────────────────────────────────────────────
function StickyNote({ note, index }: { note: NoteData; index: number }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 1, y: -30 }}
        animate={{ opacity: 1, y: 0, rotate: note.rotate }}
        transition={{ delay: index * 0.08, type: "spring", stiffness: 160, damping: 18 }}
        whileHover={{
          y: -12,
          rotate: note.rotate * 0.3,
          boxShadow: "0 24px 50px rgba(0,0,0,0.18)",
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        style={{
          backgroundColor: note.bg,
          boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
          border: note.dashed ? "2px dashed #F58220" : "none",
          borderRadius: "12px",
          cursor: "pointer",
        }}
        className="w-full h-full p-5 flex flex-col gap-3 select-none"
      >
        {/* Push pin */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.08 + 0.25, type: "spring", stiffness: 500 }}
          style={{ backgroundColor: note.pinColor }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-white shadow-md"
        />

        <div className="mt-1">{note.icon}</div>

        {note.cta ? (
          <div>
            <p
              className="font-bold leading-snug"
              style={{ color: "#F58220", fontFamily: "var(--font-handwriting)", fontSize: "1.15rem" }}
            >
              {note.text}
            </p>
            <p
              className="mt-1 text-gray-500"
              style={{ fontFamily: "var(--font-handwriting)", fontSize: "0.85rem" }}
            >
              Tap to share ↗
            </p>
          </div>
        ) : (
          <p
            className="font-bold text-gray-900 leading-snug"
            style={{ fontFamily: "var(--font-handwriting)", fontSize: "1.15rem" }}
          >
            {note.text}
          </p>
        )}
      </motion.div>

    </div>
  );
}

// ─── Section Data ─────────────────────────────────────────────────────────────
function LeafIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 30C17 18 5 10 5 10s8-2 16 4 8 14 8 14-4-4-12-4c-4 0-7 2-7 2" />
      <line x1="5" y1="10" x2="17" y2="30" />
    </svg>
  );
}

const programs = [
  {
    title: "Little Farmers",
    desc: "Children get hands-on experience in sustainable agriculture — growing food, caring for the environment, and building futures in food security.",
    color: "#16A34A", bg: "#DCFCE7",
    icon: <LeafIcon />,
  },
  {
    title: "AI Explorers",
    desc: "From coding basics to robotics and AI, children discover the tools that power tomorrow — and learn how to build them from scratch.",
    color: "#17479E", bg: "#DBEAFE",
    icon: <RobotIcon />,
  },
  {
    title: "Young Entrepreneurs",
    desc: "Business fundamentals, startup thinking, and financial literacy — empowering children to create opportunities, not just seek them.",
    color: "#F58220", bg: "#FFEDD5",
    icon: <ChartIcon />,
  },
  {
    title: "Pathways Leadership",
    desc: "Confidence, communication, and community leadership skills that help every child step fully into their potential.",
    color: "#7C3AED", bg: "#EDE9FE",
    icon: <CrownIcon />,
  },
];

const blogPosts = [
  {
    title: "How 10-year-old Amara built her first app",
    date: "June 2025", category: "Technology", color: "#17479E", bg: "#DBEAFE",
    excerpt: "Amara joined AI Explorers with zero coding experience. Six months later, she built a mobile app that helps her village track water usage.",
  },
  {
    title: "From seed to market: little farmers' first harvest",
    date: "May 2025", category: "Agriculture", color: "#16A34A", bg: "#DCFCE7",
    excerpt: "The Little Farmers cohort in Nairobi harvested their first crop and sold it at the local market — earning over KES 15,000.",
  },
  {
    title: "Meet the young entrepreneurs of 2025",
    date: "April 2025", category: "Entrepreneurship", color: "#F58220", bg: "#FFEDD5",
    excerpt: "This year's Young Entrepreneurs cohort pitched their business ideas to a panel of investors. Here are the top 5 standout pitches.",
  },
];

const pricingTiers = [
  {
    name: "Explorer",
    price: "KES 2,500", period: "/month",
    desc: "Perfect for getting started",
    features: ["1 Program access", "Online learning resources", "Monthly progress report", "Community forum access"],
    cta: "Get Started", highlight: false, color: "#17479E",
  },
  {
    name: "Achiever",
    price: "KES 5,000", period: "/month",
    desc: "Most popular for active learners",
    features: ["2 Programs access", "Live mentorship sessions", "Weekly workshops", "Priority support", "Certificate of completion"],
    cta: "Start Learning", highlight: true, color: "#F58220",
  },
  {
    name: "Champion",
    price: "KES 8,500", period: "/month",
    desc: "The full DreamDo experience",
    features: ["All programs access", "1-on-1 coaching", "Field trips & excursions", "DreamDo certification", "Alumni network"],
    cta: "Become a Champion", highlight: false, color: "#7C3AED",
  },
];

// ─── Section heading helper ───────────────────────────────────────────────────
function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#17479E" }}>{title}</h2>
      <div className="mt-4 w-14 h-1.5 rounded-full mx-auto" style={{ backgroundColor: "#F58220" }} />
      {subtitle && <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HomeClient() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section
        style={{ height: "calc(100vh - 100px)" }}
        className="relative overflow-x-hidden"
      >
        {/* Blurred ambient background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/placeholder-hero.jpg"
            alt=""
            fill
            quality={40}
            priority
            aria-hidden="true"
            className="object-cover"
            style={{ filter: "blur(28px)", transform: "scale(1.12)" }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(250,251,253,0.55)" }} />
        </div>

        <div
          className="grid h-full relative z-10"
          style={{ gridTemplateColumns: "45% 55%" }}
        >
          {/* ── Left 45%: Child image on top, text below ──────────────────── */}
          <div className="flex flex-col h-full relative">

            {/* Child image — top, takes ~60% of column height */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-start justify-start pl-10 sm:pl-12 lg:pl-14 pt-4 overflow-hidden"
              style={{ flex: "0 0 52%" }}
            >
              {/* PLACEHOLDER IMAGE — replace once parental consent obtained */}
              <Image
                src="/placeholder-hero.jpg"
                alt="A smiling child ready to pursue their dream"
                width={480}
                height={640}
                quality={90}
                priority
                style={{
                  width: "auto",
                  height: "auto",
                  maxHeight: "90%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  objectPosition: "top left",
                  borderRadius: "24px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
                }}
              />
            </motion.div>

            {/* Text block — below the image, takes remaining ~40% */}
            <div className="flex-1 flex flex-col justify-center pl-10 sm:pl-12 lg:pl-14 pr-8 pb-4">
              <motion.h1
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  fontSize: "clamp(1.6rem, 2.8vw, 2.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                }}
              >
                <span style={{ color: "#F58220" }}>Every dream</span>
                <br />
                <span style={{ color: "#17479E" }}>matters.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{
                  fontSize: "0.9rem",
                  color: "#1e293b",
                  marginTop: "12px",
                  lineHeight: "1.6",
                  fontWeight: 500,
                }}
              >
                We help children turn their dreams into real skills, opportunities and future careers through hands-on learning.
              </motion.p>

              {/* Decorative stars */}
              <StarDecor className="absolute bottom-24 right-6 w-5 h-5 opacity-25" style={{ color: "#F58220" }} />
              <SparkleDecor className="absolute bottom-12 right-3 w-3 h-3 opacity-20" style={{ color: "#17479E" }} />
            </div>
          </div>

          {/* ── Right 60%: Dream Wall ───────────────────────────────────── */}
          <div className="flex items-stretch justify-center pt-2 px-6 lg:px-8 pb-2 relative h-full">
            {/* Decorative elements around the board */}
            <StarDecor    className="absolute top-3  left-8  w-5 h-5 opacity-25" style={{ color: "#F58220" }} />
            <SparkleDecor className="absolute top-6 right-12 w-4 h-4 opacity-20" style={{ color: "#17479E" }} />
            <StarDecor    className="absolute bottom-12 right-8 w-5 h-5 opacity-20" style={{ color: "#F58220" }} />
            <SparkleDecor className="absolute bottom-6 left-16  w-3 h-3 opacity-15" style={{ color: "#17479E" }} />

            {/* The pinboard */}
            <div
              className="w-full relative"
              style={{
                height: "100%",
                borderRadius: "32px",
                background: "#FFFFFF",
                boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="grid h-full"
                style={{
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridTemplateRows: "repeat(2, 1fr)",
                  gap: "10px",
                  padding: "16px",
                  overflow: "visible",
                }}
              >
                {NOTES.map((note, i) =>
                  note.cta ? (
                    <Link href="/contact" key={note.id} className="block">
                      <StickyNote note={note} index={i} />
                    </Link>
                  ) : (
                    <StickyNote key={note.id} note={note} index={i} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT (full section with hero, mission/vision, core values, problem/solution) ═══ */}
      <AboutSection />

      {/* ═══ PROGRAMS, BLOG, PRICING, CONTACT — DISABLED (single-page: home + about only) ══ */}
      {false && (
      <>

      {/* ═══ PROGRAMS ═══════════════════════════════════════════════════════ */}
      <section id="programs" className="py-24" style={{ backgroundColor: "#EEF2FF" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <SectionHeading
            title="Our Programs"
            subtitle="Hands-on programs designed to turn children's dreams into real-world skills and opportunities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border-t-4"
                style={{ borderColor: p.color }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: p.bg, color: p.color }}>
                  {p.icon}
                </div>
                <h3 className="text-xl font-extrabold mb-3" style={{ color: p.color }}>{p.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG ════════════════════════════════════════════════════════════ */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <SectionHeading title="Latest Stories" subtitle="Real stories from children, parents, and mentors in the DreamDo community." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-3 w-full" style={{ backgroundColor: post.color }} />
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: post.bg, color: post.color }}>{post.category}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="font-extrabold text-gray-900 mb-3 leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24" style={{ backgroundColor: "#FAFBFD" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <SectionHeading title="Simple Pricing" subtitle="Invest in your child's future with a plan that works for your family." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 flex flex-col ${tier.highlight ? "text-white shadow-2xl scale-105" : "bg-white border border-gray-100"}`}
                style={{ backgroundColor: tier.highlight ? tier.color : undefined }}
              >
                <div className="mb-6">
                  <h3 className={`text-xl font-extrabold mb-1 ${tier.highlight ? "text-white" : ""}`} style={{ color: tier.highlight ? undefined : tier.color }}>{tier.name}</h3>
                  <p className={`text-sm ${tier.highlight ? "text-white/80" : "text-gray-400"}`}>{tier.desc}</p>
                </div>
                <div className="mb-6">
                  <span className={`text-4xl font-extrabold ${tier.highlight ? "text-white" : "text-gray-900"}`}>{tier.price}</span>
                  <span className={`text-sm ml-1 ${tier.highlight ? "text-white/70" : "text-gray-400"}`}>{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map(f => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${tier.highlight ? "text-white/90" : "text-gray-600"}`}>
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke={tier.highlight ? "white" : tier.color} strokeWidth="2.5" strokeLinecap="round">
                        <path d="M3 8l3.5 3.5L13 4"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className={`w-full text-center py-3 rounded-xl font-bold text-sm transition hover:opacity-90 ${tier.highlight ? "bg-white" : "text-white"}`}
                  style={{ color: tier.highlight ? tier.color : undefined, backgroundColor: tier.highlight ? undefined : tier.color }}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24" style={{ backgroundColor: "#17479E" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get in Touch</h2>
            <div className="mt-4 w-14 h-1.5 rounded-full mx-auto" style={{ backgroundColor: "#F58220" }} />
            <p className="mt-5 text-blue-200 leading-relaxed">Have a question or want to enrol your child? We'll get back to you within 24 hours.</p>
          </div>

          {status === "sent" ? (
            <div className="bg-white/10 rounded-3xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M6 16l7 7L26 9"/></svg>
              </div>
              <p className="text-white text-xl font-bold">Message sent!</p>
              <p className="text-blue-200 mt-2">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Your name</label>
                <input
                  type="text" required value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email address</label>
                <input
                  type="email" required value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Message</label>
                <textarea
                  required rows={5} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Tell us about your child and their dream…"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit" disabled={status === "sending"}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#F58220" }}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
                {status === "error" && <p className="text-red-500 text-sm text-center mt-3">Something went wrong. Please try again.</p>}
              </div>
            </form>
          )}
        </div>
      </section>

      </>
      )}

    </>
  );
}
