"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (next: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchLocale("en")}
        disabled={locale === "en" || isPending}
        className={`px-2 py-1 rounded transition ${
          locale === "en"
            ? "text-brand-orange font-bold"
            : "text-gray-500 hover:text-brand-blue"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchLocale("fr")}
        disabled={locale === "fr" || isPending}
        className={`px-2 py-1 rounded transition ${
          locale === "fr"
            ? "text-brand-orange font-bold"
            : "text-gray-500 hover:text-brand-blue"
        }`}
        aria-label="Passer en Français"
      >
        FR
      </button>
    </div>
  );
}
