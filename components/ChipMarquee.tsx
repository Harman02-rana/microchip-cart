const chips = [
  "STM32",
  "ESP32",
  "Arduino",
  "NVIDIA Jetson",
  "Raspberry Pi",
  "Qualcomm",
  "MediaTek",
  "Texas Instruments",
  "Intel FPGA",
  "AI Accelerators",
];

export default function ChipMarquee() {
  return (
    <section className="border-y border-white/10 bg-[#08101F] overflow-hidden">

      <div className="py-6 whitespace-nowrap animate-marquee flex gap-16">

        {[...chips, ...chips].map((chip, index) => (

          <div
            key={index}
            className="text-2xl font-semibold text-gray-400 hover:text-blue-500 transition"
          >
            {chip}
          </div>

        ))}

      </div>

    </section>
  );
}