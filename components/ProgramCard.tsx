import { Link } from "@/i18n/navigation";

interface ProgramCardProps {
  name: string;
  ageRange: string;
  summary: string;
  href: string;
  icon?: React.ReactNode;
  color?: string;
}

export default function ProgramCard({
  name,
  ageRange,
  summary,
  href,
  icon,
  color = "text-brand-blue",
}: ProgramCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-brand-blue hover:shadow-lg transition-all duration-200 overflow-hidden">
      {/* Icon area */}
      <div className="flex items-center justify-center h-24 bg-gray-50 group-hover:bg-blue-50 transition-colors">
        <span className="text-5xl">{typeof icon === "object" ? icon : "🌱"}</span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block text-xs font-semibold text-brand-orange uppercase tracking-wider mb-1">
          {ageRange}
        </span>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed flex-1">{summary}</p>
        <Link
          href={href}
          className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-orange transition-colors"
        >
          Learn More
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
