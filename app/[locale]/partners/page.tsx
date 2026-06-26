/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partners.hero" });
  return { title: t("title"), description: t("subtitle") };
}

const partnerTypeKeys = ["schools", "employers", "ngos", "government", "development"] as const;
const partnerIcons: Record<string, string> = {
  schools: "🏫",
  employers: "🏢",
  ngos: "🤝",
  government: "🏛️",
  development: "🌍",
};

export default function PartnersPage() {
  const t = useTranslations("partners");

  return (
    <>
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{t("hero.title")}</h1>
          <p className="mt-4 text-xl text-blue-200">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">{t("intro")}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">{t("partnerTypes.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypeKeys.map((key) => (
              <div
                key={key}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition"
              >
                <span className="text-4xl mb-4 block">{partnerIcons[key]}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t(`partnerTypes.${key}.name` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`partnerTypes.${key}.description` as Parameters<typeof t>[0])}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">{t("benefits.title")}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(t.raw("benefits.items") as string[]).map((item: string) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100"
              >
                <span className="text-brand-orange mt-0.5">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-brand-orange text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-4">{t("cta.title")}</h2>
          <p className="text-orange-100 text-lg mb-8">{t("cta.subtitle")}</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-brand-orange font-bold text-lg hover:bg-orange-50 transition shadow-lg">
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}

*/

// Minimal stub — Next.js requires a default export from page.tsx
export default function Page() {
  return null;
}
