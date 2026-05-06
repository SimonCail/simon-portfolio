"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Background from "./components/Background";
import { useI18n } from "./components/I18nProvider";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <>
      <Background />
      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest text-amber-glow"
        >
          {t.notFound.label}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-display text-[28vw] sm:text-[18rem] leading-none mt-4"
        >
          <span className="text-gradient-warm">404</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-serif-display text-3xl sm:text-5xl text-default mt-2 tracking-tight"
        >
          {t.notFound.title1}
          <em className="text-gradient-warm">{t.notFound.titleAccent}</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted mt-6 max-w-md leading-relaxed"
        >
          {t.notFound.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 mt-10 rounded-full font-medium text-sm overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]"
            style={{ background: "var(--text)", color: "var(--bg)" }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.notFound.cta}
          </Link>
        </motion.div>
      </main>
    </>
  );
}
