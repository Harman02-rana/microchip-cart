const categories = [
  {
    title: "Microcontrollers",
    subtitle: "Embedded Processing",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "AI Accelerators",
    subtitle: "Machine Learning Chips",
    image:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Connectivity",
    subtitle: "Wireless Infrastructure",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Sensors",
    subtitle: "Industrial IoT Systems",
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="py-28">

      <div className="container-custom">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-16">

          <div>

            <p className="text-blue-500 font-medium mb-4 tracking-wide">
              TECHNOLOGIES
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Explore Semiconductor
              <br />
              Ecosystems
            </h2>

          </div>

          <button className="hidden md:block px-6 h-12 rounded-xl border border-white/10 hover:border-blue-500/40 transition">
            View All
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {categories.map((category) => (

            <div
              key={category.title}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-[#0B1120] hover:border-blue-500/30 transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="h-105 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

              {/* GLOW */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition duration-500"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-8 z-10">

                <p className="text-blue-400 text-sm mb-3">
                  {category.subtitle}
                </p>

                <h3 className="text-3xl font-bold leading-tight">
                  {category.title}
                </h3>

                <button className="mt-5 text-white/80 group-hover:text-blue-400 transition">
                  Explore Technology →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}