export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-grid border-b border-white/10">

      {/* BLUE GLOW */}
      <div className="absolute top-20 right-20 w-125 h-125 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="container-custom min-h-[88vh] flex flex-col lg:flex-row items-center justify-between gap-20 py-20">

        {/* LEFT SIDE */}
        <div className="flex-1 z-10">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-8">
            AI Powered Semiconductor Marketplace
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">

            Powering the Future
            <br />

            with Smart
            <span className="text-blue-500">
              {" "}Microchip
            </span>

            <br />

            Solutions

          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-xl leading-relaxed">
            High-performance microchips and electronic components
            engineered for industrial systems, robotics, IoT infrastructure,
            embedded computing and AI hardware.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button className="px-8 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30">
              Explore Products
            </button>

            <button className="px-8 h-14 rounded-2xl border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
              Request Quote
            </button>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

            {[
              "10K+ Components",
              "Global Shipping",
              "Secure Payments",
              "24/7 Support",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#0B1120]/80 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-blue-500/30 transition"
              >
                <p className="text-sm text-gray-300 font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center relative">

          {/* GLOW */}
          <div className="absolute w-112.5 h-112.5 bg-blue-500/20 blur-[120px] rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            alt="chip"
            className="relative z-10 w-full max-w-162.5 rounded-[40px] border border-blue-500/20 shadow-2xl shadow-blue-500/20"
          />

        </div>
      </div>
    </section>
  );
}