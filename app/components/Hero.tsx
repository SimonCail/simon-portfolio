"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
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
        <motion.p
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="text-subtle mb-5 inline-flex items-center gap-3"
        >
          <span
            aria-hidden
            className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-current opacity-50"
          />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em]">
            {t.hero.hello}
          </span>
          <span
            aria-hidden
            className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-current opacity-50"
          />
        </motion.p>

        {/* Halo chaud derrière le nom : le dégradé du prénom paraît éclairé
            plutôt que posé à plat. Purement décoratif, hors flux. */}
        <div className="relative max-w-full">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[190%] rounded-full blur-3xl opacity-70 bg-[radial-gradient(ellipse_at_center,rgb(var(--accent-soft-rgb)/0.16)_0%,rgb(var(--accent-rgb)/0.10)_40%,transparent_72%)]"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative font-serif-display text-[clamp(2.25rem,8vw,6rem)] tracking-tight text-default leading-[0.95] max-w-full px-6 sm:px-12 break-words"
          >
            Simon{" "}
            <em className="text-gradient-warm inline-block pr-[0.1em]">
              Caillieret
            </em>
          </motion.h1>
        </div>

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
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgb(var(--accent-rgb)/0.5)]"
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
            Lille · Lens
          </span>
          <span className="opacity-30">·</span>
          <span>{t.hero.age}</span>
          <span className="opacity-30">·</span>
          <span>{t.hero.license}</span>
        </motion.div>
      </motion.div>

    </section>
  );
}
