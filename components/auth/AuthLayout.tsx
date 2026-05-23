import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <main className="
      min-h-screen
      bg-[#020817]
      px-6 py-10
    ">

      <div className="
        mx-auto
        grid
        min-h-[85vh]
        max-w-7xl
        overflow-hidden
        rounded-[40px]
        border border-white/10
        bg-[#081225]
        lg:grid-cols-2
      ">

        {/* LEFT */}

        <div className="
          relative
          hidden
          overflow-hidden
          border-r border-white/10
          bg-gradient-to-br
          from-cyan-400/10
          to-blue-500/10
          p-14
          lg:flex
          lg:flex-col
          lg:justify-between
        ">

          <div>

            <Link
              href="/"
              className="
                text-4xl
                font-black
                text-white
              "
            >
              MicroCart
            </Link>

            <p className="
              mt-4
              max-w-md
              text-lg
              leading-8
              text-gray-300
            ">
              Enterprise semiconductor
              procurement platform
              for sourcing processors,
              GPUs,
              AI accelerators,
              and enterprise hardware.
            </p>
          </div>

          {/* STATS */}

          <div className="space-y-6">

            {[
              "12K+ Components",
              "320+ Suppliers",
              "Enterprise RFQ Workflow",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  px-6 py-5
                  text-lg
                  text-white
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="
          flex items-center justify-center
          p-8 sm:p-14
        ">

          <div className="w-full max-w-md">

            <div className="mb-10">

              <p className="
                text-sm
                uppercase tracking-[0.3em]
                text-cyan-400
              ">
                Enterprise Access
              </p>

              <h1 className="
                mt-4
                text-5xl
                font-black
                text-white
              ">
                {title}
              </h1>

              <p className="
                mt-4
                text-lg
                leading-8
                text-gray-400
              ">
                {subtitle}
              </p>
            </div>

            {children}

          </div>
        </div>
      </div>
    </main>
  );
}