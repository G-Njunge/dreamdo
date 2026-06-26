import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "fr")) {
    locale = routing.defaultLocale;
  }

  const messages = {
    common: (await import(`../messages/${locale}/common.json`)).default,
    home: (await import(`../messages/${locale}/home.json`)).default,
    about: (await import(`../messages/${locale}/about.json`)).default,
    programs: (await import(`../messages/${locale}/programs.json`)).default,
    impact: (await import(`../messages/${locale}/impact.json`)).default,
    partners: (await import(`../messages/${locale}/partners.json`)).default,
    resources: (await import(`../messages/${locale}/resources.json`)).default,
    gallery: (await import(`../messages/${locale}/gallery.json`)).default,
    blog: (await import(`../messages/${locale}/blog.json`)).default,
    events: (await import(`../messages/${locale}/events.json`)).default,
    contact: (await import(`../messages/${locale}/contact.json`)).default,
    booking: (await import(`../messages/${locale}/booking.json`)).default,
    team: (await import(`../messages/${locale}/team.json`)).default,
    pricing: (await import(`../messages/${locale}/pricing.json`)).default,
  };

  return {
    locale,
    messages,
  };
});
