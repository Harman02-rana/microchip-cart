import "./globals.css";

import { Inter } from "next/font/google";

import Navbar from "@/components/auth/Navbar";

import Footer from "@/components/Footer";

import { CartProvider } from "@/context/CartContext";

import { SearchProvider } from "@/context/SearchContext";

import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "MICROCHIP CART",
  description:
    "Enterprise semiconductor marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body
        className={`
          ${inter.className}
          bg-[#020817]
          text-white
        `}
      >

        <SearchProvider>

          <CartProvider>

            {/* TOAST */}

            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background:
                    "#081225",

                  color: "#fff",

                  border:
                    "1px solid rgba(255,255,255,0.1)",
                },
              }}
            />

            {/* NAVBAR */}

            <Navbar />

            {/* PAGE CONTENT */}

            <main>
              {children}
            </main>

            {/* FOOTER */}

            <Footer />

          </CartProvider>

        </SearchProvider>

      </body>

    </html>
  );
}