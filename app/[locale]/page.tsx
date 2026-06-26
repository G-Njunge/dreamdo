import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HomeClient from "@/components/HomeClient";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  return {
    title: "DreamDo — The Launchpad for Africa's Next Generation of Doers",
    description: t("subhead"),
  };
}

export default function HomePage() {
  return <HomeClient />;
}
