/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import BookingForm from "@/components/BookingForm";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "booking.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default function BookingPage() {
  const t = useTranslations("booking");

  return (
    <>
      <section className="py-16 border-b border-[#E8DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">{t("hero.title")}</h1>
          <p className="mt-4 text-lg text-gray-500">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-brand-beigeAlt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <BookingForm />
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl">
                📅
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Schedule a Session</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Choose your child&apos;s program, pick a date, and our team will confirm within 48 hours.
              </p>
              <div className="w-full border-t border-gray-100 pt-4 mt-2 space-y-3 text-left">
                {[
                  { icon: "✅", text: "Flexible start dates" },
                  { icon: "📋", text: "No commitment to enrol" },
                  { icon: "📞", text: "We call you to confirm" },
                  { icon: "🌍", text: "English & French supported" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
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
