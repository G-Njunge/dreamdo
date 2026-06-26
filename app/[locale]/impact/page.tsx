/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ImpactStat from "@/components/ImpactStat";
import TestimonialCard from "@/components/TestimonialCard";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impact.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default function ImpactPage() {
  const t = useTranslations("impact");

  const stats = t.raw("stats") as { number: string; label: string }[];

  type Testimonial = { quote: string; name: string; role: string };
  const parents = t.raw("testimonials.parents.items") as Testimonial[];
  const students = t.raw("testimonials.students.items") as Testimonial[];
  const employers = t.raw("testimonials.employers.items") as Testimonial[];

  return (
    <>
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{t("hero.title")}</h1>
          <p className="mt-4 text-xl text-blue-200">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                <ImpactStat number={s.number} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <h2 className="section-title text-center">{t("testimonials.title")}</h2>
          <div>
            <h3 className="text-xl font-bold text-brand-blue mb-6">
              {t("testimonials.parents.label")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {parents.map((item) => (
                <TestimonialCard key={item.name} quote={item.quote} name={item.name} role={item.role} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-700 mb-6">
              {t("testimonials.students.label")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {students.map((item) => (
                <TestimonialCard key={item.name} quote={item.quote} name={item.name} role={item.role} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-orange mb-6">
              {t("testimonials.employers.label")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {employers.map((item) => (
                <TestimonialCard key={item.name} quote={item.quote} name={item.name} role={item.role} />
              ))}
            </div>
          </div>
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
