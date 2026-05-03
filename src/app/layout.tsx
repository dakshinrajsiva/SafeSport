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
  metadataBase: new URL("https://www.safesportindia.com"),
  title: {
    default: "SafeSport India | Institutional Safeguarding for Sport & Education",
    template: "%s | SafeSport India",
  },
  description:
    "SafeSport India is India's first dedicated safeguarding enterprise, helping schools, academies, NGOs, and sports bodies build safe, accountable environments for children, athletes, and young people.",
  applicationName: "SafeSport India",
  keywords: [
    "safesport india",
    "safeguarding india",
    "child protection india",
    "sports safeguarding",
    "school safeguarding",
    "athlete safety",
    "safe sport india",
    "safe sport",
    "safeguarding",
    "safeguarding training india",
    "safeguarding policies india",
    "safeguarding consultancy india",
    "child safeguarding",
    "youth protection",
    "sports safety india",
    "safeguarding standards",
    "safeguarding audit",
    "safeguarding consultancy",
    "institutional safeguarding",
    "athlete protection",
    "POCSO",
    "child protection policy",
    "sports governance india",
    "safeguarding framework",
    "safe environment sport",
  ],
  authors: [{ name: "SafeSport India" }],
  creator: "SafeSport India",
  publisher: "SafeSport India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "SafeSport India",
    title: "SafeSport India | Institutional Safeguarding for Sport, Education, and Youth Settings",
    description:
      "Institutional safeguarding support for Indian schools, sports academies, NGOs, and national bodies. Training, systems, advisory, and safeguarding standards tailored to Indian contexts.",
    images: [
      {
        url: "/safesi.png",
        width: 1200,
        height: 630,
        alt: "SafeSport India logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeSport India | Institutional Safeguarding",
    description:
      "Institutional safeguarding support for Indian sport, education, and youth-facing organisations.",
    images: ["/safesi.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    // For Google-specific directives like max-snippet, use string form:
    // "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    // googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    } as any,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
};

export const viewport = {
  themeColor: "#004AAD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SafeSport India",
    url: "https://www.safesportindia.com",
    logo: "https://www.safesportindia.com/icon.svg",
    description:
      "SafeSport India partners with Indian schools, sports academies, NGOs, and national bodies to design and implement safeguarding systems, training, and standards.",
    sameAs: [
      "https://www.linkedin.com/in/safesport-india-6854a73a0/",
      "https://www.instagram.com/safesportindia",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en-IN">
      <body
        className={`${inter.variable} ${montserrat.variable} ${leagueGothic.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ScrollToTopOnLoad />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <BackToTop />
      </body>
    </html>
  );
}
