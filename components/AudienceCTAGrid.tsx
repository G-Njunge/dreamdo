"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type AudienceKey = "parent" | "school" | "employer" | "sponsor";

const cards: { key: AudienceKey; icon: string; href: string; accent: string }[] = [
  { key: "parent", icon: "👨‍👩‍👧", href: "/booking", accent: "group-hover:border-brand-blue" },
  { key: "school", icon: "🏫", href: "/partners", accent: "group-hover:border-brand-orange" },
  { key: "employer", icon: "🏢", href: "/partners", accent: "group-hover:border-green-500" },
  { key: "sponsor", icon: "🤝", href: "/partners", accent: "group-hover:border-purple-500" },
];

const btnColors = {
  parent: "bg-brand-blue hover:bg-blue-700",
  school: "bg-brand-orange hover:bg-orange-600",
  employer: "bg-green-600 hover:bg-green-700",
  sponsor: "bg-purple-600 hover:bg-purple-700",
};

export default function AudienceCTAGrid() {
  const t = useTranslations("home.audience");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{t("title")}</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ key, icon, href, accent }) => (
            <div
              key={key}
              className={`group flex flex-col items-center text-center p-8 bg-white rounded-2xl border-2 border-gray-200 ${accent} hover:shadow-lg transition-all duration-200`}
            >
              <span className="text-5xl mb-5" role="img" aria-hidden="true">{icon}</span>
              <h3 className="text-base font-bold text-gray-900 mb-5">
                {t(`${key}.label` as `${AudienceKey}.label`)}
              </h3>
              <Link
                href={href}
                className={`${btnColors[key]} text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition w-full text-center`}
              >
                {t(`${key}.cta` as `${AudienceKey}.cta`)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
