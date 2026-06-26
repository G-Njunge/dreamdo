import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default function TeamPage() {
  const t = useTranslations("team");

  const members = t.raw("team.members") as { name: string; role: string }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{t("hero.title")}</h1>
          <p className="mt-4 text-xl text-blue-200">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">{t("founder.title")}</h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              {/* PLACEHOLDER IMAGE — replace once parental consent obtained */}
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 border-4 border-brand-blue">
                <Image
                  src="/placeholder-hero.jpg"
                  alt={`${t("founder.name")} — Founder of DreamDo`}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">{t("founder.name")}</h3>
              <p className="text-brand-orange font-semibold mt-1">{t("founder.role")}</p>
              <p className="text-gray-700 mt-5 leading-relaxed">{t("founder.story")}</p>
              <blockquote className="mt-6 pl-4 border-l-4 border-brand-orange italic text-gray-600">
                &ldquo;{t("founder.motivation")}&rdquo;
              </blockquote>
              <p className="text-gray-700 mt-5 leading-relaxed">{t("founder.vision")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-brand-beigeAlt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-3">{t("team.title")}</h2>
          <p className="text-center text-gray-500 mb-12">{t("team.placeholder")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition"
              >
                {/* PLACEHOLDER IMAGE — replace once parental consent obtained */}
                <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/placeholder-hero.jpg"
                    alt={`${member.name} — ${member.role}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-brand-orange mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
