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
  metadataBase: new URL(process?.env?.VERCEL_URL || `http://localhost:${3000}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Poppins_Fonts.className}>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon_io/site.webmanifest" />
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
