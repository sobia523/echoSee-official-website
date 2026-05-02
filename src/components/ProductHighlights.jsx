"use client";

import { motion } from "framer-motion";
import {
  FiEye, FiCpu, FiMessageSquare, FiGlobe, FiWifiOff, FiBatteryCharging, FiHeadphones,
} from "react-icons/fi";

const features = [
  { id: 1, icon: FiEye,           emoji: "👓", title: "AR Lens Subtitles",     description: "Live subtitles projected directly on AR lenses — see conversations in real time without looking away." },
  { id: 2, icon: FiCpu,           emoji: "🧠", title: "AI Offline Processing", description: "Built-in AI chip handles speech-to-text offline, so EchoSee works anywhere — no internet needed." },
  { id: 3, icon: FiMessageSquare, emoji: "📝", title: "Real-Time Transcription",description: "Instant, accurate speech-to-text with sub-second latency using on-device AI." },
  { id: 4, icon: FiGlobe,         emoji: "🌍", title: "2+ Languages",          description: "Multilingual support including Urdu, English, Arabic, and other premium world languages." },
  { id: 5, icon: FiHeadphones,    emoji: "😊", title: "Emoji Emotion Cues",    description: "Smart tone detection displays emoji cues alongside subtitles for full conversational context." },
  { id: 6, icon: FiBatteryCharging,emoji:"🔋", title: "10–12h Battery Life",   description: "Full-day power for every conversation — from morning commutes to evening events." },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const card = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ProductHighlights() {
  return (
    <section
      id="product-highlights"
      aria-label="Product highlights"
      className="relative overflow-hidden bg-[#07111f] section-py text-white"
    >
      <div aria-hidden="true" className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/6 blur-[100px]" />
      <div aria-hidden="true" className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/6 blur-[100px]" />

      <div className="relative wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 sm:mb-24 max-w-2xl text-center"
        >
          <span className="section-label">Product Highlights</span>
          <h2 className="section-heading mb-4">
            Smart Features for{" "}
            <span className="gradient-text">Everyday Life</span>
          </h2>
          <p className="section-subheading">
            EchoSee combines accessibility, intelligence, and futuristic design
            to help users communicate without limits.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                variants={card}
                className="glass-card group relative overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    <Icon size={24} />
                  </div>
                  <span className="text-3xl opacity-20 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    {item.emoji}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
                
                {/* Accent glow on hover */}
                <div className="absolute -right-12 -bottom-12 h-24 w-24 rounded-full bg-cyan-500/5 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/20" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
