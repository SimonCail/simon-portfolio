"use client";

import { useI18n } from "./I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative px-4 sm:px-6 py-8 border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-subtle">
        <div className="flex items-center gap-3">
          <span className="font-serif-display text-base text-default not-italic">
            SC<span className="text-amber-glow">.</span>
          </span>
          <span className="opacity-30">·</span>
          <span>{t.footer.copyright(new Date().getFullYear())}</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span>{t.footer.location}</span>
          <span className="opacity-30">·</span>
          <span>{t.footer.stack}</span>
        </div>
      </div>
    </footer>
  );
}
