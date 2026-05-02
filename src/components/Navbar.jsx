"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Product",      href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing",      href: "#pricing" },
  { label: "Impact",       href: "#impact" },
  { label: "Contact",      href: "#contact" },
];

function handleScroll(e, href) {
  e.preventDefault();
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-4" : "bg-[#050816]/60 backdrop-blur-lg py-6 lg:bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between">

        {/* ── Logo ── */}
        <a
          href="#home"
          onClick={(e) => { handleScroll(e, "#home"); setMenuOpen(false); }}
          className="flex items-center gap-3 transition-transform hover:scale-105 group"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-shadow group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] sm:h-11 sm:w-11">
            <img src="/logo.png" alt="EchoSee Logo" className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
          </div>
          <div className="leading-none">
            <span className="block text-lg font-bold tracking-tight text-white sm:text-xl">EchoSee</span>
            <span className="block text-[8px] font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-[10px]">Digital AR</span>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => {
            const active = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`relative py-2 text-[15px] font-medium transition-all duration-300 ${
                  active ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-[0_2px_10px_rgba(34,211,238,0.5)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center">
          <a
            href="#preorder"
            onClick={(e) => handleScroll(e, "#preorder")}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/30 bg-cyan-400/5 px-7 py-2.5 text-[14px] font-bold text-cyan-400 transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <span className="relative z-10">Pre-Order</span>
            <FiArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* ── Mobile menu button ── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-300 hover:text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-x-0 top-16 border-b border-white/10 bg-[#050816]/98 backdrop-blur-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 space-y-1 sm:px-6">
                {navLinks.map((item) => {
                  const active = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => { handleScroll(e, item.href); setMenuOpen(false); }}
                      className={`flex items-center rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                        active
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="pt-3">
                  <a
                    href="#preorder"
                    onClick={(e) => { handleScroll(e, "#preorder"); setMenuOpen(false); }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/5 py-4 text-[15px] font-bold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                  >
                    Pre-Order Now
                    <FiArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
