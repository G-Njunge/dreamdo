import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "programs.hero" });
  return { title: t("title"), description: t("subtitle") };
}

// ── Card component ────────────────────────────────────────────────────────────
function ProgramCard({
  href,
  imageAlt,
  ageRange,
  title,
  summary,
  style,
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  ageRange: string;
  title: string;
  summary: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 18,
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
        ...style,
      }}
    >
      {/* Image */}
      <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
        {/* Age badge */}
        <span
          style={{
            position: "absolute", top: 13, left: 13,
            backgroundColor: "#F58220", color: "#fff",
            borderRadius: 999, padding: "3px 11px",
            fontSize: 11, fontWeight: 700, letterSpacing: 0.2,
          }}
        >
          {ageRange}
        </span>
        {/* Arrow */}
        <div
          style={{
            position: "absolute", top: 13, right: 13,
            width: 30, height: 30, borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </div>
      {/* Text */}
      <div style={{ padding: "13px 15px 15px", backgroundColor: "#FFFFFF", flexShrink: 0 }}>
        <p style={{ fontWeight: 700, fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)", color: "#111111", margin: "0 0 4px 0" }}>
          {title}
        </p>
        <p style={{ fontSize: "clamp(0.7rem, 0.82vw, 0.85rem)", color: "#F58220", margin: 0, lineHeight: 1.5 }}>
          {summary}
        </p>
      </div>
    </a>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ProgramsPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  void locale;

  return (
    <main
      style={{
        fontFamily: "var(--font-poppins, 'Poppins', sans-serif)",
        backgroundColor: "#FAFBFD",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 80px" }}>

        {/* ── Header ── */}
        <div
          style={{
            display: "flex", alignItems: "flex-start",
            justifyContent: "space-between", gap: 24, marginBottom: 36,
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
                fontWeight: 700, color: "#111111",
                lineHeight: 1.1, margin: "0 0 14px 0",
              }}
            >
              Pathways designed for every age
            </h1>
            <p style={{ fontSize: "clamp(0.875rem, 1.15vw, 1rem)", color: "#555555", margin: 0, lineHeight: 1.65 }}>
              Pick the pathway designed for your young doer&apos;s age group.{" "}
              <span style={{ color: "#F58220", fontWeight: 600 }}>Four programs, one mission:</span>{" "}
              learning by doing.
            </p>
          </div>

          <a
            href="/"
            style={{
              flexShrink: 0,
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "9px 18px", borderRadius: 9,
              backgroundColor: "#FFFFFF", border: "1px solid #DEDEDE",
              color: "#333333", fontWeight: 500, fontSize: 13,
              textDecoration: "none", whiteSpace: "nowrap",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            Programs
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* ── Bento grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 14,
            height: "clamp(500px, 60vw, 700px)",
          }}
        >
          {/* Little Farmers — spans both rows */}
          <ProgramCard
            href="/programs/little-farmers"
            imageSrc="/little farmer.jpeg"
            imageAlt="Little Farmers — children learning about plants"
            ageRange="Ages 6–10"
            title="Little Farmers"
            summary="Sensory learning, basic plant biology, responsibility, and connecting with nature."
            style={{ gridRow: "1 / 3" }}
          />

          {/* AI Explorers — top right */}
          <ProgramCard
            href="/programs/ai-explorers"
            imageSrc="/placeholder-hero.jpg"
            imageAlt="AI Explorers — children coding"
            ageRange="Ages 10–14"
            title="AI Explorers"
            summary="Introduction to digital logic, basic coding, how AI works, and digital creativity."
          />

          {/* Bottom right — two cards side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <ProgramCard
              href="/programs/young-entrepreneurs"
              imageSrc="/young entrepreneurs.jpeg"
              imageAlt="Young Entrepreneurs — students presenting ideas"
              ageRange="Ages 12–16"
              title="Young Entrepreneurs"
              summary="Business fundamentals, design thinking, and pitching ideas."
              style={{ height: "100%" }}
            />
            <ProgramCard
              href="/programs/pathways"
              imageSrc="/placeholder-hero.jpg"
              imageAlt="DreamDo Pathways — high school mentorship"
              ageRange="Ages 14–18"
              title="DreamDo Pathways"
              summary="High school career exposure, industry shadowing, mentorship, and real-world problem-solving."
              style={{ height: "100%" }}
            />
          </div>
        </div>

      </div>
    </main>
  );
}
