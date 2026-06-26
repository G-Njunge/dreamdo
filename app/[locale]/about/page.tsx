import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.hero" });
  return { title: `About Us — DreamDo`, description: t("subtitle") };
}

const valueIcons = [
  /* Learning by Doing — open book */
  <svg key="book" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>,
  /* Creativity — lightbulb */
  <svg key="bulb" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
    <line x1="12" y1="2" x2="12" y2="3"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="2" y1="12" x2="3" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="20" y1="12" x2="21" y2="12"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  </svg>,
  /* Responsibility — shield check */
  <svg key="shield" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>,
  /* Innovation — rocket */
  <svg key="rocket" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>,
  /* Community — users */
  <svg key="users" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  /* Sustainability — leaf */
  <svg key="leaf" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>,
];

export default async function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const values = (t.raw("values.items") ?? []) as { name: string; description: string }[];

  return (
    <div style={{ fontFamily: "var(--font-poppins, 'Poppins', sans-serif)", backgroundColor: "#FFFFFF" }}>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "0 60px" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: 60, minHeight: "clamp(420px, 50vw, 650px)" }}
        >
          {/* Left: text */}
          <div className="py-16 lg:py-0">
            <span
              style={{
                display: "block", fontSize: 20, fontWeight: 600,
                color: "#F58220", letterSpacing: 1,
                textTransform: "uppercase", marginBottom: 20,
              }}
            >
              About Us
            </span>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                fontWeight: 800, color: "#17479E",
                lineHeight: 1.05, margin: "0 0 30px 0",
              }}
            >
              {t("hero.title")}
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
                lineHeight: 1.8, color: "#333333",
                margin: "0 0 40px 0", fontWeight: 400,
              }}
            >
              {t("hero.subtitle")}
            </p>

            <Link
              href="/#programs"
              className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{
                height: 60, padding: "0 36px",
                backgroundColor: "#17479E", color: "#FFFFFF",
                borderRadius: 12, fontWeight: 600,
                fontSize: "clamp(15px, 1.1vw, 17px)", textDecoration: "none",
              }}
            >
              Our Programs
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Right: hero image */}
          <div
            className="hidden lg:block relative"
            style={{ height: 650, borderRadius: 24, overflow: "hidden" }}
          >
            {/* PLACEHOLDER IMAGE — replace once parental consent obtained */}
            <Image
              src="/placeholder-hero.jpg"
              alt="DreamDo — a child ready to learn"
              fill
              quality={90}
              priority
              sizes="(max-width: 1024px) 0vw, 720px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1440, margin: "30px auto 0", padding: "0 60px" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ borderRadius: 24, overflow: "hidden" }}
        >
          {/* Mission — blue */}
          <div
            style={{
              backgroundColor: "#17479E",
              padding: "clamp(30px, 4vw, 50px)",
              display: "flex", flexDirection: "column",
            }}
          >
            <div
              style={{
                width: 80, height: 80, borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 30, flexShrink: 0,
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2.625rem)",
                fontWeight: 700, color: "#FFFFFF", margin: "0 0 25px 0",
              }}
            >
              {t("mission.title")}
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.3vw, 1.5rem)",
                lineHeight: 1.8, color: "rgba(255,255,255,0.9)", margin: 0,
              }}
            >
              {t("mission.text")}
            </p>
          </div>

          {/* Vision — orange */}
          <div
            style={{
              backgroundColor: "#F58220",
              padding: "clamp(30px, 4vw, 50px)",
              display: "flex", flexDirection: "column",
            }}
          >
            <div
              style={{
                width: 80, height: 80, borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 30, flexShrink: 0,
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2.625rem)",
                fontWeight: 700, color: "#FFFFFF", margin: "0 0 25px 0",
              }}
            >
              {t("vision.title")}
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.3vw, 1.5rem)",
                lineHeight: 1.8, color: "rgba(255,255,255,0.9)", margin: 0,
              }}
            >
              {t("vision.text")}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: 1440, margin: "0 auto",
          padding: "120px 60px 80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)",
            fontWeight: 700, color: "#17479E", margin: 0,
          }}
        >
          {t("values.title")}
        </h2>
        <div
          style={{
            width: 80, height: 4, backgroundColor: "#F58220",
            margin: "20px auto 60px", borderRadius: 999,
          }}
        />

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
          style={{ gap: 0 }}
        >
          {values.map((v, i) => (
            <div
              key={v.name}
              className="flex flex-col items-center text-center"
              style={{
                padding: "0 clamp(8px, 1.5vw, 20px)",
                borderRight: i < values.length - 1 ? "1px solid #EAEAEA" : "none",
              }}
            >
              <div
                style={{
                  width: "clamp(72px, 8vw, 110px)",
                  height: "clamp(72px, 8vw, 110px)",
                  borderRadius: "50%", backgroundColor: "#F8FAFC",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}
              >
                {valueIcons[i]}
              </div>
              <h3
                style={{
                  fontSize: "clamp(0.9rem, 1.3vw, 1.75rem)",
                  fontWeight: 700, color: "#17479E",
                  margin: "25px 0 10px",
                }}
              >
                {v.name}
              </h3>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 0.9vw, 1.25rem)",
                  lineHeight: 1.7, color: "#666666", margin: 0,
                }}
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROBLEM → SOLUTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ maxWidth: 1440, margin: "0 auto", padding: "0 60px 100px" }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 28,
            padding: "clamp(30px, 4vw, 50px)",
            boxShadow: "0 20px 80px rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-10"
          >
            {/* Problem */}
            <div>
              <div
                style={{
                  width: 90, height: 90, backgroundColor: "#FFF3E8",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: 25,
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F58220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 9a3 3 0 1 1 6 0c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 2.625rem)",
                  fontWeight: 700, color: "#333333", margin: "0 0 20px 0",
                }}
              >
                {t("story.problemLabel")}
              </h3>
              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.2vw, 1.5rem)",
                  lineHeight: 1.8, color: "#555555", margin: 0,
                }}
              >
                {t("story.problem")}
              </p>
            </div>

            {/* Arrow */}
            <div
              className="hidden md:flex items-center justify-center"
              style={{
                width: 70, height: 70, borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                flexShrink: 0,
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>

            {/* Solution */}
            <div>
              <div
                style={{
                  width: 90, height: 90, backgroundColor: "#ECF9EC",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: 25,
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 2.625rem)",
                  fontWeight: 700, color: "#333333", margin: "0 0 20px 0",
                }}
              >
                {t("story.solutionLabel")}
              </h3>
              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.2vw, 1.5rem)",
                  lineHeight: 1.8, color: "#555555", margin: 0,
                }}
              >
                {t("story.solution")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BOTTOM WAVE
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{ height: 120, overflow: "hidden", display: "block" }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blue left half */}
          <path
            d="M0,120 L0,55 C90,15 180,95 270,55 C360,15 450,95 540,55 C615,25 675,75 720,55 L720,120 Z"
            fill="#17479E"
          />
          {/* Orange right half */}
          <path
            d="M720,120 L720,55 C765,35 825,95 900,55 C990,10 1080,95 1170,55 C1260,15 1360,90 1440,55 L1440,120 Z"
            fill="#F58220"
          />
        </svg>
      </div>

    </div>
  );
}
