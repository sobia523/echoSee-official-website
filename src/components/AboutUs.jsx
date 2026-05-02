"use client";

import { motion } from "framer-motion";

const timelineItems = [
  { year: "2023", title: "The Problem Discovered", description: "Our founder experienced firsthand how isolating the world feels when sound is inaccessible — a child of hearing-impaired parents." },
  { year: "2024", title: "The Idea is Born", description: "A team of engineers and accessibility advocates came together with one mission: bridge the gap between the hearing and hearing-impaired worlds." },
  { year: "2025", title: "EchoSee Prototype", description: "After 18 months of R&D, the first EchoSee prototype was built — displaying real-time AI subtitles on AR lenses with full offline processing." },
  { year: "2026", title: "Going to Market", description: "EchoSee launches in Pakistan and prepares for global rollout, partnering with schools, NGOs, and healthcare institutions." },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      aria-label="About EchoSee"
      className="relative overflow-hidden bg-[#07111f] section-py text-white"
    >
      <div aria-hidden="true" className="absolute left-0 top-0 h-80 w-80 rounded-full bg-purple-500/6 blur-[120px]" />
      <div aria-hidden="true" className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/6 blur-[120px]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative wrap">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 sm:mb-24 max-w-2xl text-center"
        >
          <span className="section-label">About Us</span>
          <h2 className="section-heading mb-4">
            Empowering the{" "}
            <span className="gradient-text">Hearing-Impaired</span> Community
          </h2>
          <p className="section-subheading">
            Traditional hearing aids amplify sound. EchoSee goes further — making
            conversations visible, accessible, and emotionally rich.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mb-24 sm:mb-40 grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-24">
          {[
            { emoji: "🎯", title: "Our Mission", text: "To make every conversation accessible — regardless of hearing ability — through AI-powered, wearable, real-time subtitle technology." },
            { emoji: "🌟", title: "Our Vision", text: "A world where the hearing-impaired community can participate fully and confidently in every social, professional, and educational environment." },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass-card relative overflow-hidden rounded-[2.5rem] p-10 sm:p-14 transition-all duration-300 hover:border-cyan-400/30"
            >
              <div className="mb-4 text-4xl">{card.emoji}</div>
              <h3 className="mb-4 text-xl font-bold text-white">{card.title}</h3>
              <p className="text-base leading-relaxed text-gray-400">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Problem vs Solution */}
        <div className="mb-24 sm:mb-48 grid gap-16 lg:grid-cols-2 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-10 sm:p-14 border-red-500/10"
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-400">The Problem</h3>
            <p className="mb-8 text-3xl font-bold text-white leading-tight">Traditional Hearing Aids Fall Short</p>
            <ul className="space-y-5">
              {[
                "Only amplify sound — useless in noisy environments",
                "Cannot translate speech to another language",
                "No visual feedback or emotional context",
                "Expensive, stigmatized, and often uncomfortable",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-5 text-gray-400">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-400/40" aria-hidden="true" />
                  <span className="text-base leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-10 sm:p-14 border-cyan-400/20"
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">The Solution</h3>
            <p className="mb-8 text-3xl font-bold text-white leading-tight">AI-Based Vision for Sound</p>
            <ul className="space-y-5">
              {[
                "Real-time subtitles directly on AR lenses",
                "Works offline with on-device AI chip",
                "Emoji-based emotion cues for full context",
                "2+ language support including Urdu & Arabic",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-5 text-gray-400">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400/40" aria-hidden="true" />
                  <span className="text-base leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <span className="section-label">Our Journey</span>
          <h3 className="section-heading text-4xl sm:text-5xl">
            The <span className="gradient-text">EchoSee Story</span>
          </h3>
        </motion.div>

        <div className="relative mx-auto max-w-2xl flex flex-col gap-20">
          {/* Vertical line - fixed to left */}
          <div aria-hidden="true" className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400/50 via-purple-400/30 to-transparent" />

          {timelineItems.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              {/* Dot - fixed to left */}
              <div
                className="absolute top-4 left-[2px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#07111f] shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                aria-hidden="true"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </div>

              <div className="glass-card rounded-[2rem] p-10 sm:p-14 hover:border-cyan-400/30 transition-all duration-300">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[4px] text-cyan-400">{item.year}</span>
                <h4 className="mb-3 text-xl font-bold text-white">{item.title}</h4>
                <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
