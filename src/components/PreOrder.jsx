"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheckCircle, FiLoader, FiShield, FiShoppingCart, FiArrowRight } from "react-icons/fi";

const steps = [
  "Reserve your spot (Free)",
  "Receive production updates via email",
  "Confirm order & pay on Launch Day",
  "Receive your EchoSee glasses",
];

export default function PreOrder() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <section
      id="preorder"
      aria-label="Pre-order EchoSee"
      className="relative overflow-hidden bg-[#050816] section-py text-white"
    >
      <div aria-hidden="true" className="absolute left-0 top-0 h-80 w-80 rounded-full bg-purple-500/8 blur-[120px]" />
      <div aria-hidden="true" className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/8 blur-[120px]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="section-label">Pre-Order</span>
          <h2 className="section-heading mb-4">
            Secure Your <span className="gradient-text">EchoSee</span>
          </h2>
          <p className="section-subheading">
            Join the waitlist today. No payment required until your glasses are ready to ship.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-[2.5rem] p-8 sm:p-12">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: [1, 1.2, 1], rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400"
                  >
                    <FiCheckCircle size={32} />
                  </motion.div>
                  <h3 className="mb-2 text-2xl font-bold">Spot Reserved!</h3>
                  <p className="text-gray-400">We've added you to the EchoSee waitlist.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 btn-secondary"
                  >
                    Reserve Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative group">
                      <input
                        id="pre-name" type="text" placeholder=" " required
                        className="peer input-field pt-8 pb-3"
                      />
                      <label 
                        htmlFor="pre-name" 
                        className="absolute left-6 top-5 text-gray-500 transition-all duration-300 pointer-events-none text-xs font-bold uppercase tracking-widest peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-cyan-400"
                      >
                        Full Name
                      </label>
                    </div>
                    <div className="relative group">
                      <input
                        id="pre-email" type="email" placeholder=" " required
                        className="peer input-field pt-8 pb-3"
                      />
                      <label 
                        htmlFor="pre-email" 
                        className="absolute left-6 top-5 text-gray-500 transition-all duration-300 pointer-events-none text-xs font-bold uppercase tracking-widest peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-cyan-400"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <select
                      id="pre-plan" required
                      defaultValue=""
                      className="peer input-field appearance-none pt-8 pb-3 pr-12"
                    >
                      <option value="" disabled className="bg-[#0a0f1e]"></option>
                      <option value="individual" className="bg-[#0a0f1e]">Individual Plan (PKR 35,000)</option>
                      <option value="corporate" className="bg-[#0a0f1e]">Corporate Plan (PKR 40,000)</option>
                      <option value="premium" className="bg-[#0a0f1e]">Premium Bundle (+ Updates)</option>
                    </select>
                    <label 
                      htmlFor="pre-plan" 
                      className="absolute left-6 top-2.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400 transition-all pointer-events-none"
                    >
                      Select Plan
                    </label>
                    <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-px text-cyan-400/50 mt-1">
                      <FiArrowRight className="rotate-90" size={14} />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full group py-4">
                    <span className="flex items-center justify-center gap-3">
                      {status === "loading" ? "Processing..." : "Reserve My Spot"}
                      <FiCheckCircle className={`transition-transform group-hover:scale-110 ${status === "loading" ? "animate-pulse" : ""}`} />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card rounded-[2rem] p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                <FiShield size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Risk-Free Reservation</h3>
              <p className="text-gray-400">
                Reserving your spot is completely free. We will only contact you for payment once production begins and your unit is ready for assembly.
              </p>
            </div>

            <div className="glass-card rounded-[2rem] p-8">
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">The Journey Ahead</h4>
              <ul className="space-y-6">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-5">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400 border border-cyan-400/20">
                      {i + 1}
                    </div>
                    <span className="text-gray-300 font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
