/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

// TODO: confirm final pricing structure with client — current tiers are placeholders.
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pricing.hero" });
  return { title: t("title"), description: t("subtitle") };
}

type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export default function PricingPage() {
  const t = useTranslations("pricing");
  const tiers = t.raw("tiers") as PricingTier[];

  return (
    <>
      <section className="py-16 border-b border-[#E8DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">{t("hero.title")}</h1>
          <p className="mt-4 text-lg text-gray-500">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-brand-beigeAlt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-sm text-center">
            Pricing is indicative — final figures to be confirmed with the DreamDo team.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-8 border transition-shadow hover:shadow-lg ${
                  tier.highlight
                    ? "bg-brand-blue border-brand-blue text-white shadow-xl"
                    : "bg-white border-gray-200 text-gray-900"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-bold ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                  {tier.name}
                </h3>
                <div className="mt-4 mb-3">
                  <span className={`text-3xl font-extrabold ${tier.highlight ? "text-white" : "text-brand-blue"}`}>
                    {tier.price}
                  </span>
                  <span className={`ml-1 text-sm ${tier.highlight ? "text-blue-200" : "text-gray-400"}`}>
                    / {tier.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${tier.highlight ? "text-blue-100" : "text-gray-500"}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="text-brand-orange font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span className={tier.highlight ? "text-blue-50" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 flex items-center justify-center py-3 rounded-xl font-semibold text-sm transition ${
                    tier.highlight
                      ? "bg-white text-brand-blue hover:bg-blue-50"
                      : "bg-brand-orange text-white hover:bg-orange-600"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-10">
            Need something different?{" "}
            <Link href="/contact" className="text-brand-blue hover:underline">
              Contact us for a custom plan.
            </Link>
          </p>
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
