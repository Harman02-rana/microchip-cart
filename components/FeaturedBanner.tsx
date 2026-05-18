export default function FeaturedBanner() {
  return (
    <section className="py-24">

      <div className="container-custom">

        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#08101F] p-14 lg:p-20">

          {/* GLOW */}
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-500 font-medium mb-4">
                ENTERPRISE SOLUTIONS
              </p>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight">

                Advanced AI &
                <br />
                Embedded Systems
                <br />
                Infrastructure

              </h2>

              <p className="text-gray-400 mt-8 text-lg leading-relaxed">
                Source industrial-grade processors, AI accelerators,
                edge computing systems and semiconductor solutions
                designed for enterprise deployment.
              </p>

              <button className="mt-10 px-8 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
                Explore Enterprise
              </button>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="technology"
                className="rounded-[30px] border border-white/10"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}