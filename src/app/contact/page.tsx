'use client';

import Footer from '@/components/Footer';
import { Mail, Linkedin, Instagram, MapPin, ArrowRight, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">
        
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-12 md:mb-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Reach Out
            </h1>
            <div className="w-full h-[1px] bg-gray-200 mb-12" />
            <p className="text-xl md:text-2xl lg:text-3xl font-montserrat text-gray-600 max-w-none leading-relaxed">
              Ready to start your safeguarding journey? <span className="font-bold text-[#004AAD]">We&apos;d love to hear from you.</span>
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-6 md:px-12 lg:px-24 pb-32 mt-4 md:mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              
              {/* Left: Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-league uppercase text-[#1A1A1A] mb-12">Get In Touch</h2>
                
                <div className="space-y-10">
                  <a
                    href="mailto:info@safesportindia.com?subject=Safeguarding%20Inquiry"
                    className="flex items-start gap-6 group text-left"
                    aria-label="Email SafeSport India at info@safesportindia.com"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#004AAD]/5 flex items-center justify-center group-hover:bg-[#004AAD] transition-colors duration-500 flex-shrink-0" aria-hidden="true">
                      <Mail className="w-7 h-7 text-[#004AAD] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Email</p>
                      <p className="text-xl md:text-2xl font-montserrat font-bold text-[#1A1A1A] group-hover:text-[#004AAD] transition-colors">
                        info@safesportindia.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#004AAD]/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-[#004AAD]" />
                    </div>
                    <div>
                      <p className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Based in</p>
                      <p className="text-xl md:text-2xl font-montserrat font-bold text-[#1A1A1A]">
                        India
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Follow Us</p>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://www.linkedin.com/in/safesport-india-6854a73a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="SafeSport India on LinkedIn"
                        className="w-14 h-14 rounded-2xl bg-[#004AAD]/5 flex items-center justify-center hover:bg-[#0077B5] hover:text-white text-[#004AAD] transition-all duration-500"
                      >
                        <Linkedin size={24} aria-hidden="true" />
                      </a>
                      <a
                        href="https://www.instagram.com/safesportindia"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="SafeSport India on Instagram"
                        className="w-14 h-14 rounded-2xl bg-[#004AAD]/5 flex items-center justify-center hover:bg-[#E4405F] hover:text-white text-[#004AAD] transition-all duration-500"
                      >
                        <Instagram size={24} aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100">
                    <h3 className="text-xl font-league uppercase text-[#1A1A1A] mb-4">What happens next?</h3>
                    <div className="space-y-4">
                      {[
                        "We'll respond within 48 hours",
                        "We'll schedule an initial conversation to understand your context"
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full border-2 border-[#004AAD] flex items-center justify-center text-[#004AAD] font-league text-sm flex-shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          <p className="text-base font-montserrat text-gray-600">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-[#004AAD] rounded-3xl p-10 md:p-14 text-white">
                <h2 className="text-3xl md:text-4xl font-league uppercase mb-4">Start a Conversation</h2>
                <p className="text-base font-montserrat text-white/70 leading-relaxed mb-10">
                  Whether you&apos;re exploring safeguarding for the first time or looking to strengthen existing systems, we&apos;re here to help.
                </p>
                <p className="text-xs font-montserrat text-white/50 mb-6" id="form-note">
                  This form will open your email client with a pre-filled message to info@safesportindia.com.
                </p>

                <form
                  className="space-y-6"
                  aria-describedby="form-note"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
                    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
                    const org = (form.elements.namedItem('organisation') as HTMLInputElement)?.value || '';
                    const msg = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
                    const subject = encodeURIComponent(`Safeguarding Inquiry from ${name}`);
                    const body = encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\nOrganisation: ${org}\n\n${msg}`
                    );
                    const mailtoUrl = `mailto:info@safesportindia.com?subject=${subject}&body=${body}`;
                    window.location.href = mailtoUrl;
                  }}
                >
                  <div>
                    <label htmlFor="contact-name" className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-white/70 mb-2 block">Your Name <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white font-montserrat placeholder:text-white/30 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-white/70 mb-2 block">Email <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white font-montserrat placeholder:text-white/30 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-org" className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-white/70 mb-2 block">Organisation</label>
                    <input
                      id="contact-org"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white font-montserrat placeholder:text-white/30 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 transition-colors"
                      placeholder="Organisation name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-white/70 mb-2 block">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white font-montserrat placeholder:text-white/30 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 transition-colors resize-none"
                      placeholder="Tell us about your safeguarding needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-white text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.2em] text-sm py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 min-h-[48px]"
                  >
                    Send Message
                    <Send size={16} aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
