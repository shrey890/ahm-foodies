import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ahm_foodie",
  description: "ahmdabads's leading food vlogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={ inter.className }>
        <Navbar />
        <main>

          { children }
        </main>
        <Footer />
      </body>
    </html>
  );
}
