/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ProgramCard from "@/components/ProgramCard";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "programs.hero" });
  return { title: t("title"), description: t("subtitle") };
}

type ProgramKey = "littleFarmers" | "aiExplorers" | "youngEntrepreneurs" | "pathways";

const programList: { key: ProgramKey; href: string; icon: string; color: string }[] = [
  { key: "littleFarmers", href: "/programs/little-farmers", icon: "🌱", color: "bg-green-500" },
  { key: "aiExplorers", href: "/programs/ai-explorers", icon: "🤖", color: "bg-brand-blue" },
  { key: "youngEntrepreneurs", href: "/programs/young-entrepreneurs", icon: "💡", color: "bg-brand-orange" },
  { key: "pathways", href: "/programs/pathways", icon: "🚀", color: "bg-purple-600" },
];

export default function ProgramsPage() {
  const t = useTranslations("programs");

  return (
    <>
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{t("hero.title")}</h1>
          <p className="mt-4 text-xl text-blue-200">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-brand-beigeAlt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programList.map(({ key, href, icon, color }) => (
              <ProgramCard
                key={key}
                name={t(`programs.${key}.name` as Parameters<typeof t>[0])}
                ageRange={t(`programs.${key}.ageRange` as Parameters<typeof t>[0])}
                summary={t(`programs.${key}.summary` as Parameters<typeof t>[0])}
                href={href}
                icon={<span>{icon}</span>}
                color={color}
              />
            ))}
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
