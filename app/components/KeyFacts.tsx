"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Github } from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiNestjs,
  SiSpring,
  SiOpenjdk,
  SiPhp,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiNeo4J,
  SiDocker,
  SiGit,
  SiJavascript
} from "react-icons/si";
import NumberTicker from "./NumberTicker";
import OrbitingCircles from "./ui/OrbitingCircles";
import LogoMarquee from "./ui/LogoMarquee";
import { useI18n } from "./I18nProvider";

const innerStack = [
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { Icon: SiOpenjdk, name: "Java", color: "#ED8B00" },
  { Icon: SiPython, name: "Python", color: "#3776AB" }
];

const outerStack = [
  { Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
  { Icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { Icon: SiSpring, name: "Spring", color: "#6DB33F" },
  { Icon: SiPhp, name: "PHP", color: "#777BB4" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" }
];

const marqueeStack = [
  ...innerStack,
  ...outerStack,
  { Icon: SiNeo4J, name: "Neo4j", color: "#4581C3" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 }
  })
};

export default function KeyFacts() {
  const { t } = useI18n();
  const [innerRadius, setInnerRadius] = useState(70);
  const [outerRadius, setOuterRadius] = useState(130);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 400) {
        setInnerRadius(55);
        setOuterRadius(105);
      } else if (w < 640) {
        setInnerRadius(62);
        setOuterRadius(115);
      } else {
        setInnerRadius(70);
        setOuterRadius(130);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const facts = [
    {
      icon: Briefcase,
      label: t.keyfacts.facts.internshipLabel,
      title: t.keyfacts.facts.internshipTitle,
      sub: t.keyfacts.facts.internshipSub,
      accent: "text-amber-glow"
    },
    {
      icon: GraduationCap,
      label: t.keyfacts.facts.educationLabel,
      title: t.keyfacts.facts.educationTitle,
      sub: t.keyfacts.facts.educationSub,
      accent: "text-rose-400"
    },
    {
      icon: Github,
      label: t.keyfacts.facts.codeLabel,
      title: t.keyfacts.facts.codeTitle,
      sub: t.keyfacts.facts.codeSub,
      accent: "text-default"
    }
  ];

  const stats = [
    { value: 3, suffix: "", label: t.keyfacts.stats.s1 },
    { value: 2, suffix: "", label: t.keyfacts.stats.s2 },
    { value: 5, suffix: "+", label: t.keyfacts.stats.s3 }
  ];

  return (
    <section
      id="apropos"
      className="relative px-4 sm:px-6 py-20 sm:py-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        custom={0}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-subtle">
          {t.keyfacts.eyebrow}
        </p>
        <h2 className="font-serif-display text-4xl md:text-5xl text-default mt-3">
          {t.keyfacts.title}
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="grid grid-cols-3 gap-2 sm:gap-6 mb-10 sm:mb-12 max-w-3xl mx-auto"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="text-center">
            <div className="font-serif-display text-4xl sm:text-6xl md:text-7xl text-gradient-warm leading-none">
              <NumberTicker value={s.value} />
              {s.suffix}
            </div>
            <p className="mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-subtle">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
        {facts.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="liquid-glass group rounded-2xl p-6 hover:shadow-[0_8px_40px_-8px_rgba(251,146,60,0.3)] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Icon
                  className={`w-4 h-4 ${f.accent} group-hover:scale-110 transition-transform`}
                />
                <span className="text-[10px] font-mono uppercase tracking-widest text-subtle">
                  {f.label}
                </span>
              </div>
              <h3 className="font-serif-display text-2xl text-default leading-tight">
                {f.title}
              </h3>
              <p className="text-sm text-muted mt-3 leading-relaxed">{f.sub}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        custom={4}
        variants={fadeUp}
        className="liquid-glass rounded-2xl p-6 mt-3 sm:mt-4 overflow-hidden"
      >
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow">
              {t.keyfacts.stackLabel}
            </span>
            <span className="text-[10px] font-mono text-subtle">
              {t.keyfacts.stackCount}
            </span>
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[380px] flex items-center justify-center text-default overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl liquid-glass-strong flex items-center justify-center font-serif-display text-2xl sm:text-3xl text-default">
              SC<span className="text-amber-glow">.</span>
            </div>
          </div>

          {innerStack.map((tech, i) => {
            const Icon = tech.Icon;
            return (
              <OrbitingCircles
                key={`inner-${tech.name}`}
                radius={innerRadius}
                duration={26}
                delay={(26 / innerStack.length) * i}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl liquid-glass-strong flex items-center justify-center"
                  title={tech.name}
                >
                  <Icon
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: tech.color }}
                  />
                </div>
              </OrbitingCircles>
            );
          })}

          {outerStack.map((tech, i) => {
            const Icon = tech.Icon;
            return (
              <OrbitingCircles
                key={`outer-${tech.name}`}
                radius={outerRadius}
                duration={38}
                delay={(38 / outerStack.length) * i}
                reverse
                showPath={i === 0}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl liquid-glass-strong flex items-center justify-center"
                  title={tech.name}
                >
                  <Icon
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: tech.color }}
                  />
                </div>
              </OrbitingCircles>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mt-4 sm:mt-6 py-4 overflow-hidden"
      >
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
        />
        <LogoMarquee speed={45}>
          {marqueeStack.map((tech) => {
            const Icon = tech.Icon;
            return (
              <div
                key={`marquee-${tech.name}`}
                className="flex items-center gap-2.5 text-muted hover:text-default transition-colors shrink-0"
                title={tech.name}
              >
                <Icon className="w-5 h-5" style={{ color: tech.color }} />
                <span className="font-mono text-sm whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </LogoMarquee>
      </motion.div>
    </section>
  );
}
