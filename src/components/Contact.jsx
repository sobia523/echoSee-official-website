"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiCheckCircle, FiArrowRight,
} from "react-icons/fi";

const contactInfo = [
  { icon: FiMail,   label: "Email",  value: "hello@echosee.com",           href: "mailto:hello@echosee.com" },
  { icon: FiPhone,  label: "Phone",  value: "+92 300 1234567",             href: "tel:+923001234567" },
  { icon: FiMapPin, label: "Office", value: "Innovation Hub, NUST, Islamabad", href: "#" },
];

const socials = [
  { icon: FiTwitter,   href: "#", label: "Twitter" },
  { icon: FiLinkedin,  href: "#", label: "LinkedIn" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiGithub,    href: "#", label: "GitHub" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact us"
      className="relative bg-[#050816] section-py text-white"
    >
      <style jsx global>{`
        .input-field {
          width: 100%;
          background: rgba(10, 15, 30, 0.6);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.25rem;
          padding: 1.25rem 1.5rem;
          color: #fff;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
          font-size: 0.95rem;
        }
        .input-field:focus {
          border-color: #22d3ee;
          background: rgba(10, 15, 30, 0.8);
          box-shadow: 0 0 25px rgba(34, 211, 238, 0.15);
        }
        .input-field:-webkit-autofill,
        .input-field:-webkit-autofill:hover,
        .input-field:-webkit-autofill:focus {
          -webkit-text-fill-color: #fff;
          -webkit-box-shadow: 0 0 0px 1000px #0a0f1e inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
      <div className="wrap">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="section-label">Contact</span>
              <h2 className="section-heading mb-6">
                Let's Build the <span className="gradient-text">Future Together</span>
              </h2>
              <p className="text-gray-400">
                Have questions about EchoSee? We're here to help you experience sound in a whole new way.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-center gap-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-black">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{info.label}</p>
                      <p className="text-lg font-semibold text-white">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">Follow Us</p>
              <div className="flex gap-4">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-gray-400 transition-all hover:bg-cyan-500 hover:text-black"
                      aria-label={s.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-[2rem] p-8 sm:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                    <FiCheckCircle size={32} />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 btn-secondary"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative group">
                      <input
                        id="cn-name" type="text" placeholder=" " required
                        className="peer input-field pt-8 pb-3"
                      />
                      <label 
                        htmlFor="cn-name" 
                        className="absolute left-6 top-5 text-gray-500 transition-all duration-300 pointer-events-none text-xs font-bold uppercase tracking-widest peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-cyan-400"
                      >
                        Full Name
                      </label>
                    </div>
                    <div className="relative group">
                      <input
                        id="cn-email" type="email" placeholder=" " required
                        className="peer input-field pt-8 pb-3"
                      />
                      <label 
                        htmlFor="cn-email" 
                        className="absolute left-6 top-5 text-gray-500 transition-all duration-300 pointer-events-none text-xs font-bold uppercase tracking-widest peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-cyan-400"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <select
                      id="cn-subject" required
                      defaultValue=""
                      className="peer input-field appearance-none pt-8 pb-3 pr-12"
                    >
                      <option value="" disabled className="bg-[#0a0f1e]"></option>
                      <option value="general" className="bg-[#0a0f1e]">General Inquiry</option>
                      <option value="support" className="bg-[#0a0f1e]">Support</option>
                      <option value="feedback" className="bg-[#0a0f1e]">Feedback</option>
                    </select>
                    <label 
                      htmlFor="cn-subject" 
                      className="absolute left-6 top-2.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400 transition-all pointer-events-none"
                    >
                      Subject
                    </label>
                    <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-px text-cyan-400/50 mt-1">
                      <FiArrowRight className="rotate-90" size={14} />
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      id="cn-message" rows="4" placeholder=" " required
                      className="peer input-field pt-10 pb-4 resize-none"
                    />
                    <label 
                      htmlFor="cn-message" 
                      className="absolute left-6 top-6 text-gray-500 transition-all duration-300 pointer-events-none text-xs font-bold uppercase tracking-widest peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-8 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-cyan-400"
                    >
                      Message Details
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full group py-4">
                    <span className="flex items-center justify-center gap-3">
                      {status === "loading" ? "Sending..." : "Send Message"}
                      <FiSend className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${status === "loading" ? "animate-pulse" : ""}`} />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
