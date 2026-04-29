"use client";

import { motion } from "framer-motion";
import { features } from "../data/features";

export default function ProductHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] px-6 py-24 text-white md:px-10">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            Product Highlights
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Smart Features Built For
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Everyday Life
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            EchoSee combines accessibility, intelligence, and futuristic design
            to help users communicate without limits.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400"
                >
                  <Icon />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-semibold transition duration-300 group-hover:text-cyan-400">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-full"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
