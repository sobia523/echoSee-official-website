"use client";

import { motion } from "framer-motion";
import { FiCheck, FiStar, FiArrowRight, FiShield } from "react-icons/fi";
import { useState } from "react";

const plans = [
  {
    name: "Standard",
    price: "PKR 35,000",
    tagline: "Everything you need for daily communication.",
    features: [
      "EchoSee Smart Glasses",
      "Urdu & English subtitles",
      "Offline AI Processing",
      "10–Hour Battery Life",
      "Basic Emoji Cues",
      "1-Year Warranty",
    ],
    recommended: false,
    cta: "Pre-Order Standard",
  },
  {
    name: "Premium",
    price: "PKR 45,000",
    tagline: "Advanced features for professionals & travelers.",
    features: [
      "Everything in Standard",
      "2+ Premium Languages",
      "Advanced Emotion Detection",
      "Cloud Sync (Coming Soon)",
      "Priority Software Updates",
      "2-Year Extended Warranty",
    ],
    recommended: true,
    cta: "Pre-Order Premium",
  },
];

const afterSales = [
  {
    title: "Comprehensive Warranty",
    desc: "All EchoSee glasses ship with a 1-year warranty covering manufacturing defects and software issues. Premium plan includes 2 years.",
  },
  {
    title: "Free Software Updates",
    desc: "Get regular AI improvements, new language packs, and UI enhancements delivered over-the-air, at no extra cost.",
  },
  {
    title: "Accessories & Replacements",
    desc: "Easily order replacement lenses, charging cables, nose pads, and carrying cases directly from our website.",
  },
];

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      id="pricing"
      aria-label="Pricing and plans"
      className="relative overflow-hidden bg-[#07111f] section-py text-white"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/4 blur-[100px]" />

      <div className="relative wrap">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 sm:mb-16 max-w-2xl text-center"
        >
          <span className="section-label">Pricing</span>
          <h2 className="section-heading mb-4">
            Choose Your <span className="gradient-text">EchoSee</span>
          </h2>
          <p className="section-subheading">
            Accessible technology priced for everyone — one-time payment, no hidden fees.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className={`text-sm font-bold tracking-wider transition-colors ${!isAnnual ? "text-cyan-400" : "text-gray-500"}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative h-7 w-14 rounded-full bg-white/10 p-1 transition-colors hover:bg-white/15"
          >
            <motion.div
              animate={{ x: isAnnual ? 28 : 0 }}
              className="h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            />
          </button>
          <span className={`text-sm font-bold tracking-wider transition-colors ${isAnnual ? "text-cyan-400" : "text-gray-500"}`}>Annually</span>
          <span className="rounded-full bg-green-500/10 px-3 py-1 text-[10px] font-bold text-green-400 uppercase tracking-widest">Save 20%</span>
        </div>

        {/* Plan Cards */}
        <div className="mx-auto mb-12 sm:mb-24 grid max-w-5xl gap-8 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`relative flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 group ${
                plan.recommended
                  ? "bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-400/30 shadow-[0_0_50px_rgba(34,211,238,0.1)]"
                  : "bg-white/[0.02] border border-white/5 hover:border-white/20"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl z-10">
                  Most Popular
                </div>
              )}

              <div className="mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.tagline}</p>
              </div>

              <div className="my-8 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white tracking-tight">
                  {isAnnual ? `PKR ${parseInt(plan.price.replace(/\D/g, "")) * 0.8 / 1000}k` : plan.price}
                </span>
                <span className="text-sm font-medium text-gray-500">{isAnnual ? "/year" : "/one-time"}</span>
              </div>

              <ul className="mb-10 flex-grow space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-4 text-[15px] text-gray-300">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                      <FiCheck size={14} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById("preorder")?.scrollIntoView({ behavior: "smooth" })}
                className={plan.recommended ? "btn-primary w-full" : "btn-secondary w-full"}
              >
                {plan.cta}
                <FiArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* After-Sales */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-8 text-center">
            <span className="section-label">Support</span>
            <h3 className="text-2xl font-bold text-white">After-Sales Services</h3>
          </div>

          <div className="space-y-3">
            {afterSales.map((item, i) => (
              <div
                key={item.title}
                className={`glass-card overflow-hidden rounded-xl transition-all duration-300 ${
                  openIndex === i ? "border-cyan-400/30" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-inset"
                  aria-expanded={openIndex === i}
                >
                  <span className="flex items-center gap-3 text-sm font-semibold text-white">
                    <FiShield
                      className={`flex-shrink-0 transition-colors ${openIndex === i ? "text-cyan-400" : "text-gray-500"}`}
                      size={16}
                      aria-hidden="true"
                    />
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  >
                    <FiArrowRight size={15} />
                  </motion.span>
                </button>

                <div
                  className="accordion-content px-5 text-sm text-gray-400"
                  style={{
                    maxHeight: openIndex === i ? "160px" : "0",
                    opacity: openIndex === i ? 1 : 0,
                    paddingBottom: openIndex === i ? "20px" : "0",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
