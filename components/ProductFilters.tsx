const categories = [
  "Processors",
  "GPUs",
  "AI Accelerators",
  "Microcontrollers",
  "FPGAs",
  "IC Chips",
];

export default function ProductFilters() {
  return (
    <aside className="
      sticky top-28
      h-fit
      rounded-3xl
      border border-white/10
      bg-[#081225]
      p-6
    ">

      <h3 className="text-xl font-bold text-white">
        Filters
      </h3>

      {/* CATEGORY */}

      <div className="mt-8">

        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Categories
        </h4>

        <div className="space-y-3">

          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 text-gray-300"
            >
              <input type="checkbox" />

              {category}
            </label>
          ))}
        </div>
      </div>

      {/* STOCK */}

      <div className="mt-8">

        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Availability
        </h4>

        <div className="space-y-3">

          <label className="flex items-center gap-3 text-gray-300">
            <input type="checkbox" />
            In Stock
          </label>

          <label className="flex items-center gap-3 text-gray-300">
            <input type="checkbox" />
            Bulk Available
          </label>

          <label className="flex items-center gap-3 text-gray-300">
            <input type="checkbox" />
            Enterprise Only
          </label>
        </div>
      </div>
    </aside>
  );
}