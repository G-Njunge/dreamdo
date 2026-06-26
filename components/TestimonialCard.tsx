interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  videoUrl?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  videoUrl,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-gray-100">
      {videoUrl ? (
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src={videoUrl}
            title={`Testimonial from ${name}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <svg
          className="w-8 h-8 text-brand-orange flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      )}
      <p className="text-gray-700 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-brand-orange">{role}</p>
      </div>
    </div>
  );
}
