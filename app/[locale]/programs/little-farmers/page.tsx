import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "programs.programs.littleFarmers" });
  return { title: t("name"), description: t("summary") };
}

export default function LittleFarmersPage() {
  const t = useTranslations("programs.programs.littleFarmers");
  return (
    <ProgramDetailPage
      name={t("name")}
      ageRange={t("ageRange")}
      duration={t("duration")}
      description={t("description")}
      whyThisAge={t("whyThisAge")}
      outcomes={t.raw("outcomes") as string[]}
      accentColor="bg-green-600"
      icon="🌱"
    />
  );
}
