/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "programs.programs.pathways" });
  return { title: t("fullName"), description: t("summary") };
}

export default function PathwaysPage() {
  const t = useTranslations("programs.programs.pathways");
  return (
    <ProgramDetailPage
      name={t("name")}
      fullName={t("fullName")}
      ageRange={t("ageRange")}
      duration={t("duration")}
      description={t("description")}
      whyThisAge={t("whyThisAge")}
      outcomes={t.raw("outcomes") as string[]}
      accentColor="bg-purple-700"
      icon="🚀"
    />
  );
}

*/

// Minimal stub — Next.js requires a default export from page.tsx
export default function Page() {
  return null;
}
