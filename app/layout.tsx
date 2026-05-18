import "./globals.css";

import Navbar from "@/components/Navbar";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <CartProvider>
            <AuthProvider>
              <Navbar />
              {children}
            </AuthProvider>
          </CartProvider>
        </SearchProvider>
      </body>
    </html>
  );
}