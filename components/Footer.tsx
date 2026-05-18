export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] pt-20 pb-10">

      <div className="container-custom">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* LOGO */}
          <div>

            <h2 className="text-3xl font-bold text-blue-500">
              MC CHIP
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Premium B2B semiconductor marketplace powering
              future-ready embedded systems and industrial AI solutions.
            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="font-semibold text-xl mb-6">
              Platform
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Products</p>
              <p>Categories</p>
              <p>Manufacturers</p>
              <p>Enterprise</p>

            </div>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="font-semibold text-xl mb-6">
              Support
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Help Center</p>
              <p>Shipping</p>
              <p>Returns</p>
              <p>Documentation</p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="font-semibold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>support@mcchip.com</p>
              <p>+91 9876543210</p>
              <p>India • Global Distribution</p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">

          © 2026 MC CHIP. All rights reserved.

        </div>

      </div>
    </footer>
  );
}