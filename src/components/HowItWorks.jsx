"use client";

import { motion } from "framer-motion";
import { FiMic, FiCpu, FiEye, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    id: 1, icon: FiMic,
    title: "Mic Captures Speech",
    description: "Advanced noise-cancelling microphones capture surrounding speech with high clarity in real time.",
  },
  {
    id: 2, icon: FiCpu,
    title: "AI Converts to Text",
    description: "Built-in AI chip instantly processes speech and converts spoken words into readable subtitles.",
  },
  {
    id: 3, icon: FiEye,
    title: "Display on AR Lens",
    description: "Clean subtitles and smart emotion cues appear directly on EchoSee's AR lenses in real time.",
  },
];

const subtitleLines = [
  "Hello! Welcome to the future. 😊",
  "Kya haal hai? Great to meet you. 🤝",
  "Meeting starts in 5 minutes… 📋",
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How EchoSee works"
      className="relative overflow-hidden bg-[#050816] section-py text-white"
    >
      <div aria-hidden="true" className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/6 blur-[100px]" />
      <div aria-hidden="true" className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/6 blur-[100px]" />

      <div className="relative wrap">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="section-label">How It Works</span>
          <h2 className="section-heading mb-4">
            Simple Process,{" "}
            <span className="gradient-text">Powerful Results</span>
          </h2>
          <p className="section-subheading">
            EchoSee transforms conversations into visual understanding in just
            three intelligent steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-6 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 56 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.18 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group glass-card h-full rounded-2xl p-7 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_32px_rgba(34,211,238,0.1)]"
                >
                  {/* Step number */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-black">
                      {step.id}
                    </div>
                    <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
                  </div>

                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400 group-hover:bg-cyan-500/15 transition-colors">
                    <Icon aria-hidden="true" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>

                  <div className="mt-5 h-[1.5px] w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </motion.div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.2 }}
                    viewport={{ once: true }}
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:flex"
                    aria-hidden="true"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-[#050816] text-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.2)]">
                      <FiArrowRight size={14} />
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live subtitle preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/10 bg-white/3 p-6 text-center backdrop-blur-xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
            Live Subtitle Preview
          </p>
          {subtitleLines.map((line, i) => (
            <motion.p
              key={line}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
              className={`text-base font-medium sm:text-lg ${i === 0 ? "text-white" : "text-gray-500"}`}
            >
              &ldquo;{line}&rdquo;
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
