interface ImpactStatProps {
  number: string;
  label: string;
  light?: boolean;
}

export default function ImpactStat({ number, label, light = false }: ImpactStatProps) {
  return (
    <div className="text-center px-6 py-6">
      <p className={`text-5xl font-extrabold ${light ? "text-white" : "text-brand-orange"}`}>
        {number}
      </p>
      <p className={`mt-1.5 font-medium text-sm ${light ? "text-blue-200" : "text-gray-600"}`}>
        {label}
      </p>
    </div>
  );
}
