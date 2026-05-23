const brands = [
  "NVIDIA",
  "AMD",
  "Intel",
  "Qualcomm",
  "ARM",
  "Broadcom",
];

export default function Brands() {
  return (
    <section className="mt-24">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          Trusted Manufacturers
        </h2>

        <p className="mt-2 text-gray-400">
          Semiconductor brands frequently sourced by enterprises
        </p>
      </div>

      <div className="
        grid gap-6
        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-6
      ">

        {brands.map((brand) => (
          <div
            key={brand}
            className="
              flex h-28 items-center justify-center
              rounded-3xl
              border border-white/10
              bg-[#081225]
              text-xl font-bold text-gray-300
              transition-all
              hover:border-cyan-400/40
              hover:text-white
            "
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}