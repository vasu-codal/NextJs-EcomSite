import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartProvider from "../../components/providers/cartProvider";
import { Toaster } from "react-hot-toast";

const Poppins_Fonts = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "E-shop",
  description: "E-Commerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Poppins_Fonts.className}>
        <CartProvider>
          <Header />
          <div className="min-h-[calc(100vh_-_430px)] ">
            <Toaster />
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
