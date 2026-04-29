"use client";

import { motion } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Features", "How It Works", "Pricing", "Contact"];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-black shadow-[0_0_20px_rgba(34,211,238,0.45)]">
            E
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">EchoSee</h2>
            <p className="text-xs text-gray-400">Smart Glasses</p>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative text-sm font-medium text-gray-300 transition duration-300 hover:text-cyan-400"
            >
              {item}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block"
        >
          <button className="group flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
            Pre-Order
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white lg:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border-t border-white/10 bg-[#050816] px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 transition duration-300 hover:text-cyan-400"
              >
                {item}
              </a>
            ))}

            <button className="mt-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-black">
              Pre-Order
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
