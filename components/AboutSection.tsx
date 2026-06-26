import Image from "next/image";

const coreValues = [
  { name: "Learning by Doing", desc: "We learn by practical experience and action." },
  { name: "Creativity", desc: "We encourage imagination, innovation, and original thinking." },
  { name: "Responsibility", desc: "We take ownership of our actions and contribute positively to our communities." },
  { name: "Innovation", desc: "We embrace new ideas and tools to solve real-world challenges." },
  { name: "Community", desc: "We believe in the power of teamwork and building strong networks." },
  { name: "Sustainability", desc: "We promote practices that protect our planet and ensure a better tomorrow." },
];

const valueIcons = [
  <svg key="book" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>,
  <svg key="bulb" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
    <line x1="12" y1="2" x2="12" y2="3"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="2" y1="12" x2="3" y2="12"/>
    <line x1="19.78" y1="4.22" x2="18.36" y2="5.64"/>
    <line x1="21" y1="12" x2="20" y2="12"/>
  </svg>,
  <svg key="shield" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>,
  <svg key="rocket" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>,
  <svg key="users" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  <svg key="leaf" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>,
];

export default function AboutSection() {
  return (
    <div style={{ fontFamily: "var(--font-poppins, 'Poppins', sans-serif)", backgroundColor: "#FFFFFF" }}>

      {/* ── About Hero ── */}
      <section id="about" style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 60px 0" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: 60, minHeight: "clamp(380px, 46vw, 580px)" }}
        >
          {/* Left: text */}
          <div className="py-12 lg:py-0">
            <span style={{
              display: "block", fontSize: 18, fontWeight: 600,
              color: "#F58220", letterSpacing: 1,
              textTransform: "uppercase", marginBottom: 16,
            }}>
              About Us
            </span>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 800, color: "#17479E",
              lineHeight: 1.05, margin: "0 0 24px 0",
            }}>
              Empowering every child to build a brighter future.
            </h2>
            <p style={{
              fontSize: "clamp(1rem, 1.4vw, 1.35rem)",
              lineHeight: 1.8, color: "#333333",
              margin: "0 0 36px 0", fontWeight: 400,
            }}>
              DreamDo is dedicated to equipping children and youth with practical skills, mindset, and opportunities to help them dream, plan, and achieve.
            </p>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{
                height: 56, padding: "0 32px",
                backgroundColor: "#17479E", color: "#FFFFFF",
                borderRadius: 12, fontWeight: 600, fontSize: 16,
                textDecoration: "none",
              }}
            >
              Our Programs
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right: hero image */}
          <div
            className="hidden lg:block relative"
            style={{ height: 560, borderRadius: 24, overflow: "hidden" }}
          >
            {/* PLACEHOLDER IMAGE — replace once parental consent obtained */}
            <Image
              src="/placeholder-hero.jpg"
              alt="DreamDo — a child ready to learn"
              fill
              quality={90}
              sizes="(max-width: 1024px) 0vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section style={{ maxWidth: 1440, margin: "30px auto 0", padding: "0 60px" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ borderRadius: 24, overflow: "hidden" }}
        >
          {/* Mission — blue */}
          <div style={{
            backgroundColor: "#17479E",
            padding: "clamp(30px, 4vw, 50px)",
            display: "flex", flexDirection: "column",
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 28, flexShrink: 0,
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 20px 0" }}>
              Our Mission
            </h3>
            <p style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.35rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", margin: 0 }}>
              Empowering children and youth through experiential learning, entrepreneurship, agriculture, technology, and career exploration to become confident problem-solvers and future leaders.
            </p>
          </div>

          {/* Vision — orange */}
          <div style={{
            backgroundColor: "#F58220",
            padding: "clamp(30px, 4vw, 50px)",
            display: "flex", flexDirection: "column",
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 28, flexShrink: 0,
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 20px 0" }}>
              Our Vision
            </h3>
            <p style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.35rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", margin: 0 }}>
              A generation of African young people equipped with the skills, mindset, and opportunities to create thriving communities and sustainable futures.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 60px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 700, color: "#17479E", margin: 0 }}>
          Our Core Values
        </h2>
        <div style={{ width: 80, height: 4, backgroundColor: "#F58220", margin: "16px auto 50px", borderRadius: 999 }} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ gap: 0 }}>
          {coreValues.map((v, i) => (
            <div
              key={v.name}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                textAlign: "center", padding: "0 clamp(8px, 1.5vw, 20px)",
                borderRight: i < 5 ? "1px solid #EAEAEA" : "none",
              }}
            >
              <div style={{
                width: "clamp(70px, 7vw, 100px)", height: "clamp(70px, 7vw, 100px)",
                borderRadius: "50%", backgroundColor: "#F8FAFC",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                {valueIcons[i]}
              </div>
              <h3 style={{ fontSize: "clamp(0.85rem, 1.1vw, 1.4rem)", fontWeight: 700, color: "#17479E", margin: "18px 0 8px" }}>
                {v.name}
              </h3>
              <p style={{ fontSize: "clamp(0.72rem, 0.85vw, 1.05rem)", lineHeight: 1.7, color: "#666666", margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem → Solution ── */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "0 60px 80px" }}>
        <div style={{
          backgroundColor: "#FFFFFF", borderRadius: 28,
          padding: "clamp(28px, 4vw, 50px)",
          boxShadow: "0 20px 80px rgba(0,0,0,0.06)",
        }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-10">

            {/* Problem */}
            <div>
              <div style={{
                width: 80, height: 80, backgroundColor: "#FFF3E8",
                borderRadius: "50%", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: 20,
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F58220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 9a3 3 0 1 1 6 0c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "clamp(1.3rem, 2vw, 2.25rem)", fontWeight: 700, color: "#333333", margin: "0 0 14px 0" }}>
                The Problem
              </h3>
              <p style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.3rem)", lineHeight: 1.8, color: "#555555", margin: 0 }}>
                Young people lack practical exposure and career guidance.
              </p>
            </div>

            {/* Arrow */}
            <div
              className="hidden md:flex items-center justify-center"
              style={{
                width: 64, height: 64, borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)", flexShrink: 0,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>

            {/* Solution */}
            <div>
              <div style={{
                width: 80, height: 80, backgroundColor: "#ECF9EC",
                borderRadius: "50%", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: 20,
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "clamp(1.3rem, 2vw, 2.25rem)", fontWeight: 700, color: "#333333", margin: "0 0 14px 0" }}>
                Our Solution
              </h3>
              <p style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.3rem)", lineHeight: 1.8, color: "#555555", margin: 0 }}>
                DreamDo connects children and youth with hands-on learning experiences that build skills, confidence, and real opportunities for the future.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Decorative wave ── */}
      <div style={{ height: 90, overflow: "hidden", display: "block" }}>
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <path
            d="M0,90 L0,38 C90,8 180,68 270,38 C360,8 450,68 540,38 C615,16 675,58 720,38 L720,90 Z"
            fill="#17479E"
          />
          <path
            d="M720,90 L720,38 C765,18 825,68 900,38 C990,5 1080,68 1170,38 C1260,8 1360,65 1440,38 L1440,90 Z"
            fill="#F58220"
          />
        </svg>
      </div>

    </div>
  );
}
