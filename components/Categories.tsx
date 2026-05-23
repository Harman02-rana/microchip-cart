const categories = [
  "AI Accelerators",
  "Processors",
  "GPUs",
  "Microcontrollers",
  "FPGAs",
  "IC Chips",
  "Development Boards",
  "Networking",
];

export default function Categories() {
  return (
    <section className="mt-16">

      <div className="flex gap-4 overflow-x-auto pb-2">

        {categories.map((category) => (
          <button
            key={category}
            className="
              whitespace-nowrap
              rounded-2xl
              border border-white/10
              bg-[#081225]
              px-6 py-4
              text-sm font-medium text-gray-300
              transition-all
              hover:border-cyan-400
              hover:text-white
            "
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}