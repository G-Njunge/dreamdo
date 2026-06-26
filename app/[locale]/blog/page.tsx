/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.hero" });
  return { title: t("title"), description: t("subtitle") };
}

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

export default function BlogPage() {
  const t = useTranslations("blog");
  const posts = t.raw("posts") as BlogPost[];

  return (
    <>
      <section className="py-16 border-b border-[#E8DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">{t("hero.title")}</h1>
          <p className="mt-4 text-lg text-gray-500">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-brand-beigeAlt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-brand-blue transition-all flex flex-col"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src="/placeholder-hero.jpg"
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold bg-blue-50 text-brand-blue px-2.5 py-1 rounded-full capitalize">
                      {t(`categories.${post.category}` as Parameters<typeof t>[0])}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:text-brand-orange transition-colors"
                  >
                    {t("readMore")}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
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
