export default function CTA() {
  return (
    <section className="py-28">

      <div className="container-custom">

        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#08101F] px-10 py-20 md:p-20 text-center">

          {/* GLOW */}
          <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]"></div>

          <div className="relative z-10">

            <p className="text-blue-400 font-medium mb-5">
              FUTURE READY ELECTRONICS
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">

              Build Faster with
              <br />
              Enterprise Grade
              <br />
              Semiconductor Solutions

            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400 leading-relaxed">
              Source high-performance components, AI processors,
              embedded systems and industrial electronics with
              global fulfillment and enterprise reliability.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

              <button className="h-14 rounded-2xl bg-blue-600 px-8 font-semibold hover:bg-blue-700 transition">
                Start Sourcing
              </button>

              <button className="h-14 rounded-2xl border border-white/10 px-8 hover:border-blue-500/40 transition">
                Contact Sales
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}