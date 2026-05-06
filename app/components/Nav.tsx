"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LocaleToggle from "./LocaleToggle";
import { useI18n } from "./I18nProvider";

export default function Nav() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#parcours", label: t.nav.journey },
    { href: "#experiences", label: t.nav.experience },
    { href: "#projets", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 pointer-events-none"
      >
        <div className="liquid-glass-strong flex items-center gap-1 px-2 py-1.5 rounded-full pointer-events-auto">
          <a
            href="#top"
            className="px-3 py-1.5 rounded-full text-sm font-serif-display text-default hover:bg-black/5 dark:hover:bg-white/5 transition shrink-0"
          >
            SC<span className="text-amber-glow">.</span>
          </a>

          <span className="hidden md:inline-block w-px h-5 bg-current opacity-10 mx-1" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full text-xs text-muted hover:text-default hover:bg-black/5 dark:hover:bg-white/5 transition whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>

          <span className="hidden md:inline-block w-px h-5 bg-current opacity-10 mx-1" />

          <LocaleToggle />
          <ThemeToggle />

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-1 p-1.5 rounded-full text-muted hover:text-default hover:bg-black/5 dark:hover:bg-white/5 transition"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-3 right-3 z-40 md:hidden liquid-glass-strong rounded-2xl p-3"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-default hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
