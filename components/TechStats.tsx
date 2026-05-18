const stats = [
  {
    value: "10K+",
    label: "Components Available",
  },

  {
    value: "150+",
    label: "Global Suppliers",
  },

  {
    value: "99.9%",
    label: "Fulfillment Rate",
  },

  {
    value: "24/7",
    label: "Technical Support",
  },
];

export default function TechStats() {
  return (
    <section className="py-20 border-y border-white/10 bg-[#08101F]">

      <div className="container-custom">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item) => (

            <div
              key={item.label}
              className="text-center"
            >

              <h2 className="text-5xl font-bold text-blue-500">
                {item.value}
              </h2>

              <p className="text-gray-400 mt-4">
                {item.label}
              </p>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}