"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("common.nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (href: string) =>
    `text-sm font-medium transition hover:text-brand-blue ${
      pathname === href || pathname.startsWith(href + "/")
        ? "text-brand-blue border-b-2 border-brand-blue pb-0.5"
        : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm" style={{ overflow: "visible" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[100px] flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <Image
            src="/logo.png"
            alt="DreamDo logo"
            width={300}
            height={84}
            className="w-auto object-contain"
            style={{ height: "84px" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          <Link href="/" className={linkClass("/")}>
            {t("home")}
          </Link>
          <a href="/#about" className="text-sm font-medium text-gray-700 transition hover:text-brand-blue">
            {t("about")}
          </a>

          {/* ── DISABLED NAV LINKS (single-page: home + about only) ──────────────
          <div className="relative" onMouseEnter={() => setDropdown("services")} onMouseLeave={() => setDropdown(null)}>
            Programs dropdown
          </div>
          <a href="/#gallery">Gallery</a>
          <a href="/#blog">Blog</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#contact">Contact</a>
          ── END DISABLED ── */}

        </nav>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <LanguageSwitcher />
          <a
            href="/#about"
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-brand-orange text-white font-semibold text-sm hover:bg-orange-600 transition whitespace-nowrap"
          >
            {t("bookSession")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6">
          <nav className="flex flex-col pt-4 space-y-1 text-sm font-medium">
            <Link href="/" className="py-2.5 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-brand-blue transition" onClick={() => setMobileOpen(false)}>{t("home")}</Link>
            <a href="/#about" className="py-2.5 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-brand-blue transition" onClick={() => setMobileOpen(false)}>{t("about")}</a>
            {/* ── DISABLED (single-page: home + about only) ──
            <a href="/#programs">Programs</a>
            <a href="/#gallery">Gallery</a>
            <a href="/#blog">Blog</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#contact">Contact</a>
            ── END DISABLED ── */}
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <LanguageSwitcher />
            <a
              href="/#about"
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-brand-orange text-white font-semibold text-sm hover:bg-orange-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              {t("bookSession")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
