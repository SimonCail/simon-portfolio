"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles, MapPin } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Lamp from "./ui/Lamp";
import { useI18n } from "./I18nProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 80]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-6 pt-28 pb-20 text-center overflow-hidden"
    >
      <Lamp />

      <motion.div style={{ opacity, scale, y }} className="contents">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="liquid-glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs text-muted mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono">{t.hero.available}</span>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="text-subtle text-sm font-mono mb-4 inline-flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-glow" />
          {t.hero.hello}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-display text-[15vw] sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-default leading-[0.95] max-w-5xl"
        >
          Simon <em className="text-gradient-warm">Caillieret</em>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={6}
          variants={fadeUp}
          className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-muted leading-relaxed"
        >
          {t.hero.desc.p1}
          <span className="text-default">{t.hero.desc.b1}</span>
          {t.hero.desc.p2}
          <span className="text-default">{t.hero.desc.b2}</span>
          {t.hero.desc.p3}
          <span className="text-amber-glow">{t.hero.desc.accent}</span>
          {t.hero.desc.p4}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={7}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
        >
          <Link
            href="#projets"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]"
            style={{ background: "var(--text)", color: "var(--bg)" }}
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              {t.hero.ctaProjects}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-amber-glow translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          <a
            href="/cv.pdf"
            download
            className="liquid-glass group inline-flex items-center gap-2 px-6 py-3 rounded-full text-default font-medium text-sm transition"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 group-hover:-translate-x-0.5 transition-transform" />
            {t.hero.ctaCV}
          </a>
          <a
            href="mailto:simon.caillieret@gmail.com"
            className="liquid-glass group inline-flex items-center gap-2 px-6 py-3 rounded-full text-default font-medium text-sm transition"
          >
            <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            {t.hero.ctaContact}
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={8}
          variants={fadeUp}
          className="mt-10 inline-flex items-center gap-3 text-xs text-subtle font-mono flex-wrap justify-center"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-amber-glow" />
            Souchez · Hauts-de-France
          </span>
          <span className="opacity-30">·</span>
          <span>{t.hero.age}</span>
          <span className="opacity-30">·</span>
          <span>{t.hero.license}</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-subtle text-[10px] font-mono uppercase tracking-widest"
        >
          <span>{t.hero.scroll}</span>
          <ArrowDown className="w-3 h-3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
