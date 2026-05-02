"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  { q: "How does EchoSee work without internet?",         a: "EchoSee is equipped with a dedicated Edge AI processor built directly into the frame. This chip handles all speech-to-text conversion locally in real-time, ensuring privacy and allowing you to use the glasses anywhere — even completely offline." },
  { q: "Can I wear them over my prescription glasses?",   a: "Currently EchoSee is designed as a standalone wearable. However, we offer custom prescription lenses fitted into the EchoSee frame so you only need to wear one pair." },
  { q: "Which languages are supported?",                  a: "Out of the box, EchoSee supports English and Urdu. The Premium plan unlocks 2+ additional languages including Arabic, Spanish, Mandarin, French, and Hindi with live translation." },
  { q: "How long does the battery last?",                 a: "With continuous use (mic active + subtitles displaying) the battery lasts 10–12 hours. The included charging case provides 2 additional full charges, giving you days of use." },
  { q: "Is there a monthly subscription fee?",            a: "No! The core functionality is completely free for life with hardware purchase. The optional Premium tier is a one-time upgrade for additional languages and future cloud features." },
  { q: "When will my pre-order ship?",                    a: "We are finalizing production. Pre-orders placed today are expected to begin shipping in Q4 2026. You will not be charged until your unit is ready to ship." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative bg-[#050816] section-py text-white"
    >
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center"
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-heading mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-sm text-gray-400">
            Everything you need to know before pre-ordering EchoSee.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card rounded-3xl overflow-hidden transition-all duration-500 ${
                  isOpen ? "ring-2 ring-cyan-400/20 bg-white/[0.04]" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-cyan-400" : "text-white"}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isOpen ? "bg-cyan-400 text-black rotate-180 shadow-[0_0_20px_rgba(34,211,238,0.4)]" : "bg-white/5 text-gray-500"
                    }`}
                  >
                    <FiChevronDown size={22} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-8 pb-8 text-base leading-relaxed text-gray-400 max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
