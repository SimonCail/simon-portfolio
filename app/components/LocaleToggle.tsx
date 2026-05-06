"use client";

import { useI18n } from "./I18nProvider";

export default function LocaleToggle() {
  const { locale, toggle } = useI18n();
  const next = locale === "fr" ? "EN" : "FR";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch language (currently ${locale.toUpperCase()})`}
      title={`Switch to ${next}`}
      className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-muted hover:text-amber-glow hover:bg-black/5 dark:hover:bg-white/5 transition tracking-wider"
    >
      {locale.toUpperCase()}
      <span className="opacity-30 mx-1">·</span>
      <span className="opacity-40">{next}</span>
    </button>
  );
}
