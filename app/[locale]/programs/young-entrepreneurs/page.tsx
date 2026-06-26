/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "programs.programs.youngEntrepreneurs" });
  return { title: t("name"), description: t("summary") };
}

export default function YoungEntrepreneursPage() {
  const t = useTranslations("programs.programs.youngEntrepreneurs");
  return (
    <ProgramDetailPage
      name={t("name")}
      ageRange={t("ageRange")}
      duration={t("duration")}
      description={t("description")}
      whyThisAge={t("whyThisAge")}
      outcomes={t.raw("outcomes") as string[]}
      accentColor="bg-brand-orange"
      icon="💡"
    />
  );
}

*/

// Minimal stub — Next.js requires a default export from page.tsx
export default function Page() {
  return null;
}
