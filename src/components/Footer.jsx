"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { useState } from "react";

const productLinks = [
  { label: "Features",        href: "#product-highlights" },
  { label: "How It Works",    href: "#how-it-works" },
  { label: "Pricing & Plans", href: "#pricing" },
  { label: "Technical Specs", href: "#product" },
];

const companyLinks = [
  { label: "About Us",     href: "#about" },
  { label: "Our Mission",  href: "#about" },
  { label: "Partnerships", href: "#impact" },
  { label: "Contact",      href: "#contact" },
  { label: "Pre-Order",    href: "#preorder" },
];

const socials = [
  { icon: FiTwitter,   label: "Twitter",   href: "#" },
  { icon: FiLinkedin,  label: "LinkedIn",  href: "#" },
  { icon: FiInstagram, label: "Instagram", href: "#" },
  { icon: FiGithub,    label: "GitHub",    href: "#" },
];

function scrollTo(e, href) {
  e.preventDefault();
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const [email, setEmail]       = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => { setSubscribed(false); setEmail(""); }, 3500);
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#050816] pt-24 pb-24 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-full max-w-4xl bg-cyan-500/5 blur-[100px] pointer-events-none" />
      
      <div className="relative wrap">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, "#home")}
              className="inline-flex items-center gap-4 transition-transform hover:scale-105"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 text-base font-bold text-black shadow-lg">
                ES
              </div>
              <div className="leading-none">
                <span className="block text-xl font-bold text-white tracking-tight">EchoSee</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">Digital AR</span>
              </div>
            </a>
            <p className="text-base leading-relaxed text-gray-400 max-w-sm">
              Empowering the hearing-impaired community with AI-powered, real-time visual communication. See what you cannot hear.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 text-gray-400 transition-all hover:bg-cyan-500 hover:text-black hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                    aria-label={s.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="lg:col-span-2">
            <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Product</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-[15px] text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="lg:col-span-2">
            <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-[15px] text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Stay Connected</h4>
              <p className="text-base text-gray-400">Join 2,000+ others waiting for the AR revolution.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col xl:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="input-field flex-grow"
                  required
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="btn-primary px-8 whitespace-nowrap min-h-[56px]"
                >
                  {subscribed ? "Done!" : "Join Now"}
                </button>
              </div>
              <p className="text-[11px] text-gray-600 leading-relaxed italic">
                * By subscribing, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-[13px] text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} EchoSee Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[13px] text-gray-500 font-medium">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>

  );
}
