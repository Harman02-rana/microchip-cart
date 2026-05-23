const items = [
  "Verified Suppliers",
  "Enterprise RFQ",
  "Secure Payments",
  "Bulk Procurement",
  "Technical Support",
];

export default function TrustBar() {
  return (
    <section className="mt-20">

      <div className="
        grid gap-4
        rounded-3xl
        border border-white/10
        bg-[#081225]
        p-6
        md:grid-cols-5
      ">

        {items.map((item) => (
          <div
            key={item}
            className="
              rounded-2xl
              border border-white/5
              bg-white/[0.03]
              px-4 py-5
              text-center
              text-sm font-medium
              text-gray-300
            "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}