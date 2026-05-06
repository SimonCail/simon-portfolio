"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LocaleToggle from "./LocaleToggle";
import { useI18n } from "./I18nProvider";

export default function Nav() {
  const { t } = useI18n();

  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#parcours", label: t.nav.journey },
    { href: "#experiences", label: t.nav.experience },
    { href: "#projets", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact }
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 pointer-events-none"
    >
      <div className="liquid-glass-strong flex items-center gap-0.5 px-2 py-1.5 rounded-full pointer-events-auto max-w-[calc(100vw-1rem)] overflow-x-auto scrollbar-hide">
        <a
          href="#top"
          className="px-2.5 sm:px-3 py-1.5 rounded-full text-sm font-serif-display text-default hover:bg-black/5 dark:hover:bg-white/5 transition shrink-0"
        >
          SC<span className="text-amber-glow">.</span>
        </a>

        <span className="w-px h-5 bg-current opacity-10 mx-1 shrink-0" />

        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs text-muted hover:text-default hover:bg-black/5 dark:hover:bg-white/5 transition whitespace-nowrap shrink-0"
          >
            {l.label}
          </a>
        ))}

        <span className="w-px h-5 bg-current opacity-10 mx-1 shrink-0" />
        <LocaleToggle />
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
