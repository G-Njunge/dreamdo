import { Link } from "@/i18n/navigation";

interface ProgramDetailProps {
  name: string;
  fullName?: string;
  ageRange: string;
  duration: string;
  description: string;
  whyThisAge: string;
  outcomes: string[];
  accentColor?: string;
  icon?: string;
}

export default function ProgramDetailPage({
  name,
  fullName,
  ageRange,
  duration,
  description,
  whyThisAge,
  outcomes,
  accentColor = "bg-brand-blue",
  icon = "🌱",
}: ProgramDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className={`${accentColor} py-20 text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{icon}</span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                {ageRange} · {duration}
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold">{fullName || name}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Program</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
          </div>

          {/* Why this age */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-xl font-bold text-brand-blue mb-3">
              Why This Age Group?
            </h2>
            <p className="text-gray-700 leading-relaxed">{whyThisAge}</p>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Outcomes</h2>
            <ul className="space-y-3">
              {outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange text-white text-sm flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/booking" className="btn-primary">
              Book a Session
            </Link>
            <Link href="/programs" className="btn-secondary">
              ← All Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
