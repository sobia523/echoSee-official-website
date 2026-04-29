"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function HeroSection() {
  const fullText = "See What You Cannot Hear";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] pt-28 text-white md:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 md:px-10 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md">
            Future of Accessible Vision
          </p>

          <h1 className="min-h-[160px] text-4xl font-bold leading-tight md:text-6xl xl:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-pulse text-cyan-400">|</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300 md:text-xl">
            EchoSee Smart Glasses transform speech into live subtitles on AR
            lenses, helping the hearing-impaired community connect confidently
            with the world around them.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-black transition duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            >
              Pre-Order Now
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-white/10"
            >
              <FiPlay />
              Learn More
            </motion.button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-5 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400">10h+</h3>
              <p className="text-sm text-gray-400">Battery Life</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400">20+</h3>
              <p className="text-sm text-gray-400">Languages</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400">AI</h3>
              <p className="text-sm text-gray-400">Offline Chip</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Floating Main Card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80"
              alt="EchoSee Smart Glasses"
              className="h-[420px] w-full rounded-3xl object-cover"
            />

            {/* Live Subtitle Box */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-cyan-400/20 bg-black/70 px-5 py-4 backdrop-blur-md"
            >
              <p className="text-sm text-cyan-300">Live Subtitle</p>
              <p className="mt-1 text-white">Hello! Welcome to the future.</p>
            </motion.div>
          </motion.div>

          {/* Glow Rings */}
          <div className="absolute -left-10 top-10 h-24 w-24 rounded-full border border-cyan-400/30"></div>
          <div className="absolute -right-8 bottom-16 h-16 w-16 rounded-full border border-purple-400/30"></div>
        </motion.div>
      </div>
    </section>
  );
}
