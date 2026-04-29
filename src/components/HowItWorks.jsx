"use client";

import { motion } from "framer-motion";
import { FiMic, FiCpu, FiEye, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    id: 1,
    title: "Mic Captures Speech",
    description:
      "Advanced noise-cancelling microphones capture surrounding speech with high clarity in real time.",
    icon: FiMic,
  },
  {
    id: 2,
    title: "AI Converts To Text",
    description:
      "Built-in AI chip instantly processes speech and converts spoken words into readable subtitles.",
    icon: FiCpu,
  },
  {
    id: 3,
    title: "Display On AR Lens",
    description:
      "Clean subtitles and smart emotion cues appear directly on EchoSee AR lenses.",
    icon: FiEye,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white md:px-10">
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
            How It Works
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Simple Process,
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Powerful Results
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            EchoSee transforms conversations into visual understanding in just
            three intelligent steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="relative flex items-stretch">
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="group w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
                >
                  {/* Step Number */}
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-black">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      y: [0, -6, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400"
                  >
                    <Icon />
                  </motion.div>

                  {/* Text */}
                  <h3 className="text-2xl font-semibold transition duration-300 group-hover:text-cyan-400">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {step.description}
                  </p>

                  {/* Bottom line */}
                  <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-full"></div>
                </motion.div>

                {/* Arrow Between Cards */}
                {index !== steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 lg:flex"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0a1224] text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
                      <FiArrowRight />
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Subtitle Preview Box */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[4px] text-cyan-400">
            Live Subtitle Preview
          </p>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-4 text-xl font-medium text-white md:text-2xl"
          >
            “Hello Sohaib, welcome to the future.”
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
