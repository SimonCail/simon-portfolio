"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Briefcase
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import TracingBeam from "./ui/TracingBeam";
import AnimatedBeam from "./ui/AnimatedBeam";
import { useI18n } from "./I18nProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 }
  })
};

type StageData = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: readonly string[];
  current?: boolean;
};

function ExperienceCard({
  stage,
  index,
  logo,
  accent,
  cardRef,
  currentLabel,
  finishedLabel,
  stack
}: {
  stage: StageData;
  index: number;
  logo: string;
  accent: string;
  cardRef: React.RefObject<HTMLDivElement | null>;
  currentLabel: string;
  finishedLabel: string;
  stack: string[];
}) {
  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      custom={index + 1}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="liquid-glass group relative rounded-2xl p-7 sm:p-8 hover:shadow-[0_8px_40px_-8px_rgba(251,146,60,0.25)] transition-all duration-500 flex flex-col overflow-hidden z-10"
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} opacity-90`}
      />

      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-white ring-1 ring-black/5 dark:ring-white/10 shadow-sm group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
            <Image
              src={logo}
              alt={`Logo ${stage.company}`}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif-display text-2xl text-default leading-tight">
              {stage.company}
            </h3>
            <p className="text-xs font-mono text-subtle mt-0.5">{stage.role}</p>
          </div>
        </div>
        {stage.current ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 uppercase tracking-wider whitespace-nowrap">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {currentLabel}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[10px] font-mono text-subtle uppercase tracking-wider whitespace-nowrap">
            {finishedLabel}
          </span>
        )}
      </div>

      <p className="text-xs font-mono uppercase tracking-widest text-amber-glow mb-4">
        {stage.period}
      </p>

      <p className="text-default opacity-80 leading-relaxed mb-6">
        {stage.description}
      </p>

      <div className="space-y-2 mb-6 flex-1">
        {stage.achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
            className="flex items-start gap-2.5 text-sm text-muted"
          >
            <CheckCircle2 className="w-4 h-4 text-amber-glow shrink-0 mt-0.5" />
            <span>{a}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 pt-5 border-t border-black/[0.06] dark:border-white/[0.06]">
        {stack.map((s) => (
          <span
            key={s}
            className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md bg-black/5 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-muted group-hover:border-amber-glow/30 group-hover:text-default transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const pulpStage: StageData = {
    company: t.experience.pulp.company,
    role: t.experience.pulp.role,
    period: t.experience.pulp.period,
    description: t.experience.pulp.description,
    achievements: t.experience.pulp.achievements,
    current: true
  };

  const growStage: StageData = {
    company: t.experience.grow.company,
    role: t.experience.grow.role,
    period: t.experience.grow.period,
    description: t.experience.grow.description,
    achievements: t.experience.grow.achievements
  };

  return (
    <section
      id="experiences"
      className="relative px-4 sm:px-6 py-20 sm:py-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        custom={0}
        variants={fadeUp}
        className="text-center mb-12 sm:mb-16"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-amber-glow inline-flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5" />
          {t.experience.eyebrow}
        </p>
        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-default mt-3 tracking-tight">
          {t.experience.title1}
          <em className="text-gradient-warm">{t.experience.titleAccent}</em>
        </h2>
        <p className="text-muted max-w-xl mx-auto mt-5 px-2 leading-relaxed">
          {t.experience.description}
        </p>
      </motion.div>

      <TracingBeam>
        <div className="ml-6 sm:ml-12 md:ml-0">
          <div ref={containerRef} className="relative grid md:grid-cols-2 gap-4 sm:gap-5">
            <ExperienceCard
              stage={pulpStage}
              index={0}
              logo="/pulp-immobilier-logo.png"
              accent="from-amber-500 via-orange-500 to-rose-500"
              cardRef={card1Ref}
              currentLabel={t.experience.pulp.currentLabel}
              finishedLabel={t.experience.grow.finishedLabel}
              stack={["Next.js", "TypeScript", "React", "Laravel", "Tailwind"]}
            />
            <ExperienceCard
              stage={growStage}
              index={1}
              logo="/grow-your-business-logo.png"
              accent="from-cyan-500 via-blue-500 to-indigo-600"
              cardRef={card2Ref}
              currentLabel={t.experience.pulp.currentLabel}
              finishedLabel={t.experience.grow.finishedLabel}
              stack={["Vue.js", "WordPress", "PHP", "Agile"]}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={card1Ref}
              toRef={card2Ref}
              curvature={-60}
              startYOffset={-180}
              endYOffset={-180}
              duration={4}
              delay={0.5}
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            custom={4}
            variants={fadeUp}
            className="liquid-glass rounded-2xl p-5 sm:p-6 mt-4 sm:mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-3 shrink-0">
              <Sparkles className="w-4 h-4 text-amber-glow" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-subtle">
                {t.experience.sideJobs.eyebrow}
              </p>
            </div>
            <div className="flex-1 flex flex-wrap items-center gap-x-5 gap-y-2">
              {t.experience.sideJobs.items.map((job, i) => (
                <span
                  key={job.label}
                  className="inline-flex items-center gap-2 text-sm text-default"
                >
                  <span>{job.label}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-subtle px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06]">
                    {job.type} · {job.year}
                  </span>
                  {i < t.experience.sideJobs.items.length - 1 && (
                    <span className="text-subtle opacity-50">·</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-xs text-subtle italic shrink-0">
              {t.experience.sideJobs.caption}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-amber-glow transition group"
            >
              {t.experience.cvLink}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </TracingBeam>
    </section>
  );
}
