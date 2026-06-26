"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const galleryItems = [
  { category: "workshops", label: "Workshop: AI Explorers Session" },
  { category: "workshops", label: "Workshop: Digital Creativity" },
  { category: "workshops", label: "Workshop: Financial Literacy" },
  { category: "learning", label: "Learning Session: Little Farmers" },
  { category: "learning", label: "Learning Session: Coding Basics" },
  { category: "learning", label: "Career Immersion Day" },
  { category: "activities", label: "Young Entrepreneurs Activity" },
  { category: "activities", label: "Farming Activity: Planting Day" },
  { category: "activities", label: "Team Building Activity" },
  { category: "events", label: "Pitch Day 2024" },
  { category: "events", label: "Harvest Celebration" },
  { category: "events", label: "Open Day 2024" },
];

type CategoryKey = "all" | "workshops" | "learning" | "activities" | "events";

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered = active === "all" ? galleryItems : galleryItems.filter((i) => i.category === active);

  const tabs: CategoryKey[] = ["all", "workshops", "learning", "activities", "events"];

  return (
    <>
      {/* Hero */}
      <section className="py-16 border-b border-[#E8DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">{t("hero.title")}</h1>
          <p className="mt-4 text-lg text-gray-500">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Placeholder notice */}
          <p className="text-center text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg p-3 mb-8 max-w-xl mx-auto">
            {t("placeholderNote")}
          </p>

          {/* Category tabs — matching the mockup's bottom tab bar */}
          <div className="flex items-center gap-2 justify-center flex-wrap mb-10">
            {tabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  active === cat
                    ? "bg-brand-blue text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t(`categories.${cat}` as Parameters<typeof t>[0])}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100 border border-gray-200 hover:shadow-lg transition-all"
              >
                {/* PLACEHOLDER IMAGE — replace once parental consent obtained */}
                <Image
                  src="/placeholder-hero.jpg"
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
