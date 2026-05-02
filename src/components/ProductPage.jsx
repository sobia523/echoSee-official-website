"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FiEye, FiType, FiSmile, FiGlobe, FiWifi, FiMic,
  FiLayers, FiCamera, FiCpu, FiBatteryCharging, FiMaximize,
  FiPlay, FiX, FiChevronLeft, FiChevronRight,
} from "react-icons/fi";

const features = [
  { icon: FiEye, title: "Real-Time Transcription", desc: "Sub-second speech-to-text powered by on-device AI. Every word captured, every nuance preserved." },
  { icon: FiType, title: "Adjustable Font Size", desc: "Customize subtitle size from compact to large — perfect for any visual preference." },
  { icon: FiSmile, title: "Emoji Subtitles", desc: "Smart emotion detection adds emoji cues to subtitles, conveying tone beyond words." },
  { icon: FiGlobe, title: "Multilingual Support", desc: "Urdu + English + 2 premium languages. Switch seamlessly mid-conversation." },
  { icon: FiWifi, title: "Offline AI Processing", desc: "No cloud, no internet required. Full functionality on the built-in AI processor." },
  { icon: FiMic, title: "Noise-Cancelling Mic", desc: "Advanced directional mic filters background noise for crystal-clear speech capture." },
  { icon: FiLayers, title: "Stylish Design", desc: "Lightweight, modern frames that look just like regular glasses — no stigma, pure style." },
];

const specs = [
  { icon: FiEye, label: "Display", value: "AR Micro-Projector Lens" },
  { icon: FiCpu, label: "Processor", value: "Dedicated AI Edge Chip" },
  { icon: FiMic, label: "Audio", value: "Noise-Cancelling Array Mic" },
  { icon: FiBatteryCharging, label: "Battery", value: "10–12 Hours Continuous Use" },
  { icon: FiCamera, label: "Camera", value: "Optional 12MP Module" },
  { icon: FiMaximize, label: "Connectivity", value: "Bluetooth 5.3 + USB-C" },
];

const gallery = [
  { url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80", alt: "EchoSee front view" },
  { url: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80", alt: "EchoSee side view" },
  { url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80", alt: "Person wearing EchoSee" },
  { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", alt: "EchoSee lifestyle" },
];

export default function ProductPage() {
  const [activeFeature, setActiveFeature] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const prevImg = () => setActiveImg((p) => (p - 1 + gallery.length) % gallery.length);
  const nextImg = () => setActiveImg((p) => (p + 1) % gallery.length);

  return (
    <section
      id="product"
      aria-label="Product details"
      className="relative overflow-hidden bg-[#050816] section-py text-white"
    >
      <div aria-hidden="true" className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px]" />
      <div aria-hidden="true" className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/5 blur-[100px]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative wrap">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 sm:mb-24 max-w-2xl text-center"
        >
          <span className="section-label">Product</span>
          <h2 className="section-heading">
            Everything You Need,{" "}
            <span className="gradient-text">Nothing You Don&apos;t</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            Designed for the hearing-impaired community — and anyone who wants to
            experience the future of communication.
          </p>
        </motion.div>

        {/* ── Feature Cards (expandable) ── */}
        <div className="mb-16 sm:mb-32 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isActive = activeFeature === i;
            return (
              <motion.button
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeature(isActive ? null : i)}
                className={`group relative rounded-[2rem] p-8 text-left transition-all duration-500 ${isActive ? "bg-white/[0.05] border border-cyan-400/30" : "bg-white/[0.02] border border-white/5 hover:border-white/10"
                  }`}
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${isActive ? "bg-cyan-500 text-black" : "bg-white/5 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black"
                  }`}>
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-sm leading-relaxed text-gray-400"
                    >
                      {f.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* ── Hardware Specs ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-32"
        >
          <div className="mb-12 text-center">
            <span className="section-label">Hardware Specs</span>
            <h2 className="section-heading">
              Built With <span className="gradient-text">Premium Technology</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div key={spec.label} className="relative group">
                  {/* Line Draw Animation Overlay */}
                  <div className="absolute inset-0 rounded-[2rem] border border-white/5 group-hover:border-transparent transition-all duration-300" />
                  <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className="absolute inset-0 rounded-[2rem] border border-cyan-400/40 pointer-events-none"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} // Simulating line draw
                  />

                  <div className="glass-card flex items-center gap-6 rounded-[2rem] p-8 transition-all hover:bg-white/[0.05] relative z-10">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">{spec.label}</p>
                      <p className="text-lg font-bold text-white tracking-tight">{spec.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Interactive Subtitle Demo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-24 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-950/40 to-purple-950/40 border border-white/10 p-6 sm:p-12 lg:p-20"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">Live Demo</span>
              <h2 className="section-heading mb-6">
                See How It <span className="gradient-text">Feels</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Experience the EchoSee interface. Switch languages below to see how our AI projects real-time transcription directly onto your field of view.
              </p>

              <div className="flex flex-wrap gap-3">
                {["English", "Urdu", "Arabic", "Chinese"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveFeature(lang)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFeature === lang ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.5)]" : "bg-white/5 text-gray-400 hover:bg-white/10"
                      }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative min-h-[250px] aspect-video rounded-3xl bg-black/40 border border-white/5 overflow-hidden group shadow-2xl sm:min-h-0">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />

              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-[90%] max-w-[320px] glass-card rounded-2xl p-6 border-cyan-400/30 flex flex-col items-center text-center shadow-2xl">
                  <div className="mb-3 flex items-center justify-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                      {activeFeature || "Live Subtitle"}
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeFeature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-base sm:text-lg font-bold text-white italic leading-tight text-center"
                    >
                      {activeFeature === "Urdu" ? "خوش آمدید! ایکو سی آپ کی آواز کو متن میں بدل دیتا ہے۔" :
                        activeFeature === "Arabic" ? "أهلاً بك! إيكو سي يحول صوتك إلى نص." :
                          activeFeature === "Chinese" ? "欢迎！EchoSee 将您的声音转换为文本。" :
                            "\"Welcome! EchoSee transforms your voice into live visual text.\""}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Gallery + Demo ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="section-label">Product View</span>
          <h2 className="section-heading">
            360° <span className="gradient-text">Perspective</span>
          </h2>
          <p className="text-gray-500 mt-2">Hover over the image to rotate and explore the details.</p>
        </motion.div>

        {/* Main image with 360-degree rotation simulation */}
        <div className="relative mb-4 overflow-hidden rounded-[2.5rem] [perspective:1000px] group">
          <motion.img
            key={activeImg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              rotateY: 15,
              rotateX: -5,
              scale: 1.05,
              boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)"
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={gallery[activeImg].url}
            alt={gallery[activeImg].alt}
            className="h-64 w-full object-cover sm:h-96 lg:h-[500px] transition-all duration-500 rounded-[2.5rem]"
            loading="lazy"
          />
          {/* Prev/Next */}
          <button
            onClick={prevImg}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 transition"
            aria-label="Previous image"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={nextImg}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 transition"
            aria-label="Next image"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mb-10 grid grid-cols-4 gap-3">
          {gallery.map((img, i) => (
            <button
              key={img.alt}
              onClick={() => setActiveImg(i)}
              className={`overflow-hidden rounded-xl transition-all duration-200 ${activeImg === i ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#050816]" : "opacity-60 hover:opacity-100"
                }`}
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="h-16 w-full object-cover sm:h-20"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Video CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.3)] transition hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
          >
            <FiPlay size={16} aria-hidden="true" />
            Watch Demo Video
          </motion.button>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Demo video"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Close video"
            >
              <FiX size={16} />
            </button>
            <div className="glass-card rounded-2xl p-4">
              <div className="flex aspect-video w-full flex-col items-center justify-center rounded-xl bg-black/60 text-center text-gray-400">
                <FiPlay className="mb-3 text-5xl text-cyan-400" aria-hidden="true" />
                <p className="text-sm">Demo video coming soon</p>
                <p className="mt-1 text-xs text-gray-600">EchoSee Product Showcase</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
