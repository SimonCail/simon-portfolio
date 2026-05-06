"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, ArrowUpRight, Copy, Check, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import FranceMap from "./ui/FranceMap";
import { useI18n } from "./I18nProvider";

const EMAIL = "simon.caillieret@gmail.com";

function EmailCard() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success(t.contact.copy.success, {
        description: EMAIL,
        duration: 2500
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(t.contact.copy.error, { description: t.contact.copy.manual });
    }
  };

  return (
    <motion.a
      href={`mailto:${EMAIL}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="liquid-glass group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-glow/15 transition-all duration-300 w-full max-w-full overflow-hidden"
    >
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <Mail className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1 min-w-0 overflow-hidden">
        <p className="text-default font-medium">{t.contact.labels.email}</p>
        <p className="text-xs text-subtle font-mono truncate">{EMAIL}</p>
      </div>
      {/* Copy button hidden on mobile — tap on card opens mailto anyway */}
      <button
        onClick={copyEmail}
        aria-label={t.contact.copy.action}
        title={t.contact.copy.action}
        className="hidden sm:inline-flex shrink-0 p-2 rounded-lg bg-black/5 dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-muted hover:text-amber-glow hover:border-amber-glow/40 transition"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>
      <ArrowUpRight className="w-4 h-4 text-subtle group-hover:text-amber-glow group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0" />
    </motion.a>
  );
}

export default function Contact() {
  const { t } = useI18n();

  const links = [
    {
      label: t.contact.labels.linkedin,
      sub: "Simon Caillieret",
      href: "https://www.linkedin.com/in/simon-caillieret-a8996229a/",
      icon: Linkedin,
      accent: "from-cyan-500 to-blue-600"
    },
    {
      label: t.contact.labels.github,
      sub: "@SimonCail",
      href: "https://github.com/SimonCail",
      icon: Github,
      accent: "from-stone-600 to-stone-800"
    },
    {
      label: t.contact.labels.cv,
      sub: t.contact.labels.cvSub,
      href: "/cv.pdf",
      icon: Download,
      accent: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 py-24 sm:py-32 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-14"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-amber-glow">
          {t.contact.eyebrow}
        </p>
        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-7xl text-default mt-4 tracking-tight">
          {t.contact.title1}
          <em className="text-gradient-warm">{t.contact.titleAccent}</em>
          {t.contact.title2}
        </h2>
        <p className="text-muted max-w-xl mx-auto mt-6 leading-relaxed">
          {t.contact.description}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 sm:gap-8 max-w-4xl mx-auto items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center w-full min-w-0"
        >
          <FranceMap />
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-subtle">
            <MapPin className="w-3 h-3 text-amber-glow" />
            {t.contact.location}
          </div>
        </motion.div>

        <div className="grid gap-3 w-full min-w-0">
          <EmailCard />
          {links.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                download={l.href.endsWith(".pdf") ? true : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * (i + 1) }}
                className="liquid-glass group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-glow/15 transition-all duration-300 w-full max-w-full overflow-hidden"
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${l.accent} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-default font-medium">{l.label}</p>
                  <p className="text-xs text-subtle font-mono truncate">{l.sub}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-subtle group-hover:text-amber-glow group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
