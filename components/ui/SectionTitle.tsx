interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}