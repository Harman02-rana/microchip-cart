import Link from "next/link";

export default function Footer() {
  return (
    <footer className="
      mt-24
      border-t border-white/10
      bg-[#050816]
    ">

      <div className="
        mx-auto
        max-w-7xl
        px-6 py-20
      ">

        <div className="
          grid gap-12
          md:grid-cols-2
          lg:grid-cols-5
        ">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <h2 className="
              text-4xl
              font-black
              text-white
            ">
              MicroCart
            </h2>

            <p className="
              mt-5
              max-w-md
              leading-8
              text-gray-400
            ">
              Enterprise semiconductor marketplace
              for sourcing processors,
              GPUs,
              microcontrollers,
              and AI hardware inventory.
            </p>

            <div className="
              mt-8
              flex gap-4
            ">

              {["X", "LN", "GH"].map((item) => (
                <div
                  key={item}
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    text-white
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* MARKETPLACE */}

          <div>

            <h3 className="
              text-lg
              font-bold
              text-white
            ">
              Marketplace
            </h3>

            <div className="
              mt-6
              space-y-4
            ">

              <Link
                href="/products"
                className="block text-gray-400 hover:text-white"
              >
                Products
              </Link>

              <Link
                href="/cart"
                className="block text-gray-400 hover:text-white"
              >
                Cart
              </Link>

              <Link
                href="/dashboard"
                className="block text-gray-400 hover:text-white"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* ENTERPRISE */}

          <div>

            <h3 className="
              text-lg
              font-bold
              text-white
            ">
              Enterprise
            </h3>

            <div className="
              mt-6
              space-y-4
            ">

              <Link
                href="/auth/business/register"
                className="block text-gray-400 hover:text-white"
              >
                Become Supplier
              </Link>

              <Link
                href="/business/dashboard"
                className="block text-gray-400 hover:text-white"
              >
                Business Portal
              </Link>

              <Link
                href="/products"
                className="block text-gray-400 hover:text-white"
              >
                RFQ Requests
              </Link>
            </div>
          </div>

          {/* SUPPORT */}

          <div>

            <h3 className="
              text-lg
              font-bold
              text-white
            ">
              Support
            </h3>

            <div className="
              mt-6
              space-y-4
            ">

              <Link
                href="/"
                className="block text-gray-400 hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/"
                className="block text-gray-400 hover:text-white"
              >
                Documentation
              </Link>

              <Link
                href="/"
                className="block text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="
          mt-16
          border-t border-white/10
          pt-8
        ">

          <div className="
            flex flex-col gap-4
            md:flex-row
            md:items-center
            md:justify-between
          ">

            <p className="text-gray-500">
              © 2026 MicroCart. All rights reserved.
            </p>

            <div className="
              flex gap-6
              text-sm text-gray-500
            ">

              <span>Terms</span>

              <span>Privacy</span>

              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}