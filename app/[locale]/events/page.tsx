/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "events.hero" });
  return { title: t("title"), description: t("subtitle") };
}

type Event = {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  description: string;
  program: string;
};

const programColors: Record<string, string> = {
  littleFarmers: "bg-green-100 text-green-800",
  aiExplorers: "bg-blue-100 text-blue-800",
  youngEntrepreneurs: "bg-orange-100 text-orange-800",
  pathways: "bg-purple-100 text-purple-800",
};

export default function EventsPage() {
  const t = useTranslations("events");
  const events = t.raw("events") as Event[];

  return (
    <>
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{t("hero.title")}</h1>
          <p className="mt-4 text-xl text-blue-200">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {events.length === 0 ? (
            <p className="text-center text-gray-500 py-12">{t("noEvents")}</p>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col sm:flex-row gap-6 hover:shadow-md transition"
              >
                <div className="flex-shrink-0 text-center sm:w-24">
                  <div className="bg-brand-blue text-white rounded-xl p-3">
                    <p className="text-sm font-semibold uppercase">
                      {new Date(event.date).toLocaleDateString(undefined, { month: "short" })}
                    </p>
                    <p className="text-3xl font-extrabold">
                      {new Date(event.date).getDate()}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start gap-2 mb-2">
                    <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${programColors[event.program] || "bg-gray-100 text-gray-800"}`}>
                      {event.program}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  <Link href="/booking" className="mt-4 inline-flex btn-primary text-sm py-2">
                    {t("registerInterest")}
                  </Link>
                </div>
              </div>
            ))
          )}
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
