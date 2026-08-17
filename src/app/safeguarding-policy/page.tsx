import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Download, ExternalLink } from "lucide-react";

const PDF_URL = "/policies/safesport-india-safeguarding-policy.pdf";

export const metadata: Metadata = {
  title: "Safeguarding Policy",
  description:
    "Read the SafeSport India safeguarding policy outlining our commitments, principles, and standards for protecting children, athletes, and young people.",
  alternates: {
    canonical: "/safeguarding-policy",
  },
  openGraph: {
    title: "SafeSport India Safeguarding Policy",
    description:
      "Our commitments, principles, and standards for safeguarding children, athletes, and young people.",
    url: "/safeguarding-policy",
  },
};

export default function SafeguardingPolicyPage() {
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-0 md:mb-[100vh] min-h-screen pt-32">
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.3em] mb-6 text-xs md:text-sm">
              About SafeSport India
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Safeguarding Policy
            </h1>
            <div className="w-full h-[1px] bg-gray-200 mb-12" />
            <p className="text-xl md:text-2xl font-montserrat text-gray-600 max-w-3xl leading-relaxed">
              Our commitments, principles, and standards for safeguarding
              children, athletes, and young people across the institutions and
              communities we work with.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={PDF_URL}
                download
                className="inline-flex items-center gap-3 bg-[#004AAD] text-white font-montserrat font-bold uppercase tracking-[0.2em] text-xs px-6 py-3 rounded-full hover:bg-[#003a8a] transition-colors duration-300"
              >
                <Download size={16} />
                Download PDF
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#004AAD] border border-[#004AAD] font-montserrat font-bold uppercase tracking-[0.2em] text-xs px-6 py-3 rounded-full hover:bg-[#004AAD] hover:text-white transition-colors duration-300"
              >
                <ExternalLink size={16} />
                Open in new tab
              </a>
            </div>
          </div>
        </section>

        {/* PDF Viewer */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden border border-gray-200 shadow-xl bg-[#F5F7FA]">
              <object
                data={PDF_URL}
                type="application/pdf"
                className="w-full h-[85vh] block"
                aria-label="SafeSport India Safeguarding Policy PDF"
              >
                <iframe
                  src={PDF_URL}
                  title="SafeSport India Safeguarding Policy"
                  className="w-full h-[85vh] block border-0"
                />
                <div className="p-12 text-center font-montserrat text-gray-700">
                  <p className="mb-6">
                    Your browser doesn&apos;t support inline PDF viewing.
                  </p>
                  <a
                    href={PDF_URL}
                    className="inline-flex items-center gap-3 bg-[#004AAD] text-white font-bold uppercase tracking-[0.2em] text-xs px-6 py-3 rounded-full"
                  >
                    <Download size={16} />
                    Download the safeguarding policy
                  </a>
                </div>
              </object>
            </div>

            <div className="mt-16 p-8 md:p-10 rounded-[2rem] bg-[#F5F7FA] border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-league uppercase text-[#1A1A1A] mb-4">
                Want to talk about safeguarding for your organisation?
              </h2>
              <p className="text-base md:text-lg font-montserrat text-gray-600 leading-relaxed mb-6">
                We help schools, academies, NGOs, and national bodies translate
                safeguarding principles into everyday practice. Reach out to
                start a conversation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#004AAD] text-white font-montserrat font-bold uppercase tracking-[0.2em] text-xs px-6 py-3 rounded-full hover:bg-[#003a8a] transition-colors duration-300"
                >
                  Contact us
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-white text-[#004AAD] border border-[#004AAD] font-montserrat font-bold uppercase tracking-[0.2em] text-xs px-6 py-3 rounded-full hover:bg-[#004AAD] hover:text-white transition-colors duration-300"
                >
                  Explore our services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
