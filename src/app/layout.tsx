import type { Metadata } from "next";
import { Inter, Montserrat, League_Gothic } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import ScrollToTopOnLoad from "@/components/ScrollToTopOnLoad";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  variable: "--font-league-gothic",
});

export const metadata: Metadata = {
  title: "SafeSport India | Institutional Innovation in Safeguarding",
  description: "India's first dedicated safeguarding enterprise, protecting potential and powering performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${leagueGothic.variable} font-sans`}>
        <ScrollToTopOnLoad />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <BackToTop />
      </body>
    </html>
  );
}
