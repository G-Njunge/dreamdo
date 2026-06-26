import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resources.hero" });
  return { title: t("title"), description: t("subtitle") };
}

type ResourceItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
};

export default function ResourcesPage() {
  const t = useTranslations("resources");
  const items = t.raw("items") as ResourceItem[];

  const categories = ["kits", "guides", "merch"] as const;

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{t("hero.title")}</h1>
          <p className="mt-4 text-xl text-blue-200">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">{t("intro")}</p>

          {categories.map((cat) => {
            const catItems = items.filter((i) => i.category === cat);
            if (!catItems.length) return null;
            return (
              <div key={cat} className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  {t(`categories.${cat}` as Parameters<typeof t>[0])}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition"
                    >
                      {/* PLACEHOLDER IMAGE — replace once parental consent obtained */}
                      <div className="h-48 bg-gradient-to-br from-blue-100 to-orange-50 flex items-center justify-center">
                        <span className="text-5xl">
                          {cat === "kits" ? "📦" : cat === "guides" ? "📚" : "🎒"}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-brand-orange font-bold">{item.price}</span>
                          <Link href="/contact" className="text-sm font-semibold text-brand-blue hover:text-brand-orange transition">
                            {t("orderCta")} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="text-center text-sm text-gray-500 mt-4">{t("note")}</p>
        </div>
      </section>
    </>
  );
}
