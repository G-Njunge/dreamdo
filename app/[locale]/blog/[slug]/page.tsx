/* PAGE DISABLED — temporarily commented out (single-page scroll mode)

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = t.raw("posts") as BlogPost[];
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export function generateStaticParams() {
  return [];
}

export default function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const t = useTranslations("blog");
  const posts = t.raw("posts") as BlogPost[];
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <>
      <section className="bg-brand-blue py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-blue-200 hover:text-white text-sm mb-4 inline-flex items-center gap-1">
            ← {t("backToBlog")}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-blue-200 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full capitalize">
              {t(`categories.${post.category}` as Parameters<typeof t>[0])}
            </span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">{post.excerpt}</p>
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-5">{para}</p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="btn-secondary">
              ← {t("backToBlog")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

*/

// Minimal stub — Next.js requires a default export from page.tsx
export function generateStaticParams() {
  return [];
}

export default function Page() {
  return null;
}
