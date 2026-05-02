"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function HeroSection() {
  const fullText = "See What You Cannot Hear";
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setText(fullText.slice(0, index));
      if (index === fullText.length) { clearInterval(interval); setDone(true); }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen overflow-hidden bg-[#050816] pt-28 sm:pt-20"
    >
      <div className="wrap relative z-10 grid min-h-[calc(100vh-80px)] items-center gap-16 py-20 lg:grid-cols-2">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8 mt-16 lg:mt-0"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Empowering Accessibility
          </div>

          <h1 className="text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            See What You <br />
            <span className="gradient-text">Cannot Hear</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-gray-400">
            EchoSee Smart Glasses transform speech into live subtitles on AR lenses — empowering the hearing-impaired community to connect confidently with the world.
          </p>

          <div className="flex flex-wrap gap-5 pt-6">
            <button
              onClick={() => scrollTo("preorder")}
              className="btn-primary group"
            >
              <span>Pre-Order Now</span>
              <FiArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="btn-secondary group"
            >
              <FiPlay size={18} className="transition-transform group-hover:scale-110" />
              <span>Learn More</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-10">
            <div>
              <p className="text-2xl font-bold text-white">10h+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Battery</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Languages</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">AI</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Processing</p>
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative aspect-square w-full max-w-lg rounded-[3rem] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-2 shadow-2xl backdrop-blur-3xl">
            <img
              src="/hero.png"
              alt="EchoSee Smart Glasses"
              className="h-full w-full rounded-[2.5rem] object-cover"
            />
            {/* Float Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-1/2 w-[85%] -translate-x-1/2 bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">Live AR Transcription</span>
              </div>
              <p className="text-[15px] font-bold leading-relaxed text-white min-h-[3rem]">
                {/* Typing Animation for Subtitle */}
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 1 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.03,
                      },
                    },
                  }}
                >
                  {'"Welcome to the future. EchoSee turns every voice into visible text right before your eyes."'.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, display: "none" },
                        visible: { opacity: 1, display: "inline" },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bg Deco */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" aria-hidden="true" />
    </section>
  );
}
