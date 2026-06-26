import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.hero" });
  return { title: t("title"), description: t("subtitle") };
}

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      {/* Hero */}
      <section className="py-16 border-b border-[#E8DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">{t("hero.title")}</h1>
          <p className="mt-4 text-lg text-gray-500">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-brand-beigeAlt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Info panel */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                <h2 className="text-lg font-bold text-gray-900 mb-5">{t("info.title")}</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-brand-orange flex-shrink-0">📧</span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">Email</p>
                      <a href={`mailto:${t("info.email")}`} className="text-sm text-gray-700 hover:text-brand-blue transition">
                        {t("info.email")}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue flex-shrink-0">📞</span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">Phone</p>
                      <a href={`tel:${t("info.phone")}`} className="text-sm text-gray-700 hover:text-brand-blue transition">
                        {t("info.phone")}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">💬</span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">WhatsApp</p>
                      <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-brand-blue transition">
                        {t("info.whatsapp")}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">📍</span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">Location</p>
                      <span className="text-sm text-gray-700">{t("info.location")}</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social links matching mockup */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                <h3 className="font-bold text-gray-900 mb-4">{t("social.title")}</h3>
                <div className="flex gap-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition"
                    aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition"
                    aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white hover:opacity-90 transition"
                    aria-label="Instagram">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              {/* TODO: add correct Google Maps embed URL when client confirms address */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center text-gray-400 text-sm">
                  <span className="text-3xl block mb-2">📍</span>
                  Google Maps — address TBD
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
