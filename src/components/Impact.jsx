"use client";

import { motion } from "framer-motion";
import {
  FiUsers,
  FiHeart,
  FiBriefcase,
  FiMapPin,
  FiActivity,
  FiGlobe,
} from "react-icons/fi";
import { useEffect, useState, useRef } from "react";

const partners = [
  { name: "Global Deaf Foundation", icon: FiHeart },
  { name: "Tech For Good Initiative", icon: FiBriefcase },
  { name: "National Univ of Sciences", icon: FiUsers },
  { name: "Inclusive Ed Consortium", icon: FiBriefcase },
  { name: "Healthcare Innovation Lab", icon: FiActivity },
  { name: "Accessibility Tech Alliance", icon: FiHeart },
];

const impacts = [
  { label: "Global Hearing Loss", value: 430, suffix: "M+", icon: FiGlobe },
  { label: "Impacted in Pakistan", value: 20, suffix: "M+", icon: FiMapPin },
  { label: "Early Beta Users", value: 500, suffix: "+", icon: FiUsers },
];

const tickerPartners = [...partners, ...partners, ...partners];

function Counter({ from, to, duration, suffix }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef}>
      {count}{suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section
      id="impact"
      aria-label="Market and Social Impact"
      className="relative overflow-hidden bg-[#050816] section-py text-white"
    >
      <div aria-hidden="true" className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
      <div aria-hidden="true" className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="relative wrap">
        {/* ── Partnerships with Card Flip ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="section-label">Partnerships</span>
            <h2 className="section-heading">
              Creating Impact <span className="gradient-text">Together</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "Schools & Universities", 
                icon: FiUsers, 
                desc: "Partnering with institutions like NUST and Inclusive Ed to provide AR tools for students.",
                stats: "15+ Partners"
              },
              { 
                title: "NGOs & Healthcare", 
                icon: FiHeart, 
                desc: "Working with Global Deaf Foundation to reach the most underserved communities.",
                stats: "12+ Foundations"
              },
              { 
                title: "Corporate CSR", 
                icon: FiBriefcase, 
                desc: "Custom solutions for workplaces to ensure inclusive professional environments.",
                stats: "8+ Corporate"
              }
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="group h-[250px] [perspective:1000px]">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                  >
                    {/* Front */}
                    <div className="absolute inset-0 h-full w-full rounded-[2rem] glass-card flex flex-col items-center justify-center p-8 [backface-visibility:hidden]">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-white text-center">{p.title}</h3>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-gradient-to-br from-cyan-600 to-purple-700 p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                      <p className="text-sm font-medium text-white mb-4 leading-relaxed">
                        {p.desc}
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white/20 px-4 py-1.5 rounded-full text-white">
                        {p.stats}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Social Impact ── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Market Need</span>
            <h2 className="section-heading mb-6">
              A Global Problem Requires a{" "}
              <span className="gradient-text">Global Solution</span>
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-4">
              Over 5% of the world's population requires rehabilitation to
              address their hearing loss. In Pakistan alone, millions face daily
              barriers to education and employment.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              EchoSee isn't just a gadget — it's an equalizer. By providing
              real-time visual context, we're opening doors that have been
              closed for far too long.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {impacts.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass-card relative overflow-hidden rounded-[2rem] p-8 text-center border-white/5 transition-all hover:border-cyan-400/20 ${
                    i === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-400/5 blur-2xl" />
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400">
                    <Icon aria-hidden="true" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {stat.label}
                  </p>
                  <div className="text-5xl font-extrabold text-white tracking-tight">
                    <Counter from={0} to={stat.value} duration={2500} suffix={stat.suffix} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
