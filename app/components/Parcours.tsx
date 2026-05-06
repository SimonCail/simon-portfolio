"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useI18n } from "./I18nProvider";

export default function Parcours() {
  const { t } = useI18n();
  const events = t.parcours.events;

  return (
    <section
      id="parcours"
      className="relative px-4 sm:px-6 py-20 sm:py-24 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 sm:mb-16"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-amber-glow inline-flex items-center gap-2">
          <GraduationCap className="w-3.5 h-3.5" />
          {t.parcours.eyebrow}
        </p>
        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-default mt-3 tracking-tight">
          {t.parcours.title}
        </h2>
        <p className="text-muted max-w-xl mx-auto mt-5 px-2 leading-relaxed">
          {t.parcours.description}
        </p>
      </motion.div>

      <div className="relative pl-12 sm:pl-20">
        {/* Vertical line */}
        <div
          className="absolute top-2 bottom-2 left-4 sm:left-8 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgb(var(--border) / 0.3) 8%, rgb(var(--border) / 0.3) 92%, transparent)"
          }}
        />

        <div className="space-y-12 sm:space-y-14">
          {events.map((event, eventIdx) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: eventIdx * 0.05 }}
              className="relative"
            >
              {/* Year dot */}
              <div className="absolute -left-12 sm:-left-20 top-0 flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    "current" in event && event.current
                      ? "bg-amber-glow shadow-[0_0_24px_rgba(251,146,60,0.6)]"
                      : "liquid-glass-strong"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      "current" in event && event.current
                        ? "bg-white"
                        : "bg-amber-glow"
                    }`}
                  />
                </div>
              </div>

              {/* Year label */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif-display text-3xl sm:text-4xl text-gradient-warm leading-none tabular-nums">
                  {event.year}
                </span>
                {"current" in event && event.current && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {t.experience.pulp.currentLabel}
                  </span>
                )}
              </div>

              {/* Milestones */}
              <div className="space-y-3">
                {event.milestones.map((m, i) => (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: 0.15 + i * 0.06
                    }}
                    className="liquid-glass rounded-xl px-4 py-3 hover:shadow-[0_4px_20px_-4px_rgba(251,146,60,0.2)] transition-shadow"
                  >
                    <p className="text-default font-medium text-sm sm:text-base">
                      {m.title}
                    </p>
                    {m.sub && (
                      <p className="text-xs sm:text-sm text-muted mt-0.5">
                        {m.sub}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
