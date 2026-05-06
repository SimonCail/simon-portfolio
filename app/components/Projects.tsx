"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Calendar,
  Users,
  Code2,
  ExternalLink
} from "lucide-react";
import { useEffect, useRef } from "react";
import ImageWithSkeleton from "./ui/ImageWithSkeleton";
import { useI18n } from "./I18nProvider";
import type { Translation } from "../i18n/translations";

type GithubLink = { label: string; repo: string };
type ContextKey = "personal" | "team" | "hackathon" | "academic";

type Project = {
  number: string;
  title: string;
  repo: string;
  extraGithub?: GithubLink;
  subtitleFr: string;
  subtitleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  tags: string[];
  year: string;
  contextKey: ContextKey;
  contextIcon: typeof Calendar;
  gradient: string;
  privateRepo?: boolean;
  /** custom screenshot path (overrides GitHub OG image) */
  image?: string;
  /** live deployment URL — adds a "Demo" link */
  liveUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "fit-tracker",
    repo: "fit-tracker",
    subtitleFr: "Suivi de performances à la salle",
    subtitleEn: "Gym performance tracker",
    descriptionFr:
      "Application pour suivre ses séances de musculation : enregistrement des répétitions et charges par exercice, suivi du poids corporel avec courbe d'évolution. PWA installable, interface liquid glass responsive.",
    descriptionEn:
      "App to track strength training sessions: log reps and loads per exercise, track body weight with an evolution chart. Installable PWA with a responsive liquid-glass interface.",
    tags: ["React", "TypeScript", "Vite", "PWA"],
    year: "2026",
    contextKey: "personal",
    contextIcon: Calendar,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    privateRepo: true,
    image: "/fit-tracker.png",
    liveUrl: "https://fit-tracker-orpin.vercel.app/"
  },
  {
    number: "02",
    title: "cahier-appel",
    repo: "cahier-appel",
    subtitleFr: "Cahier d'appel digital",
    subtitleEn: "Digital attendance book",
    descriptionFr:
      "Outil de gestion de présences pour enseignants avec authentification Firebase (Google + email/password), statistiques mensuelles, persistance de l'année scolaire dans l'URL. PWA installable.",
    descriptionEn:
      "Attendance management tool for teachers with Firebase auth (Google + email/password), monthly stats, school-year persistence in the URL. Installable PWA.",
    tags: ["Next.js", "TypeScript", "Firebase", "PWA"],
    year: "2026",
    contextKey: "personal",
    contextIcon: Calendar,
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    privateRepo: true,
    image: "/cahier-appel.png",
    liveUrl: "https://cahier-appel.vercel.app/"
  },
  {
    number: "03",
    title: "heures-delegation",
    repo: "heures-delegation",
    subtitleFr: "Suivi des heures de délégation CSE",
    subtitleEn: "CSE delegation hours tracker",
    descriptionFr:
      "Application de gestion des heures de délégation pour représentants du personnel (CSE) : total annuel, heures utilisées, calcul automatique du report mensuel, export par année. Vues mois et année.",
    descriptionEn:
      "Delegation hours tracker for employee representatives (CSE): annual quota, used hours, automatic monthly rollover, yearly export. Month and year views.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PWA"],
    year: "2026",
    contextKey: "personal",
    contextIcon: Calendar,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    image: "/heures-delegation.png",
    liveUrl: "https://heures-delegations.vercel.app/"
  },
  {
    number: "04",
    title: "Location-MaskCar",
    repo: "Location-MaskCar",
    extraGithub: { label: "API", repo: "Location-MaskCar-API" },
    subtitleFr: "Plateforme full-stack de location",
    subtitleEn: "Full-stack rental platform",
    descriptionFr:
      "Application complète de location de voitures avec 3 rôles (Admin, Agent, Client). Front Angular/TypeScript et API REST Laravel séparés pour évolution indépendante. Génération de PDF, gestion des agences, réservations et contrats.",
    descriptionEn:
      "Complete car-rental application with 3 roles (Admin, Agent, Client). Decoupled Angular/TypeScript front-end and Laravel REST API. PDF generation, agency, booking and contract management.",
    tags: ["Angular", "TypeScript", "Laravel", "PHP", "API REST"],
    year: "2025",
    contextKey: "team",
    contextIcon: Users,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    image: "/location-maskcar.png"
  },
  {
    number: "05",
    title: "Bomberman",
    repo: "Bomberman",
    subtitleFr: "Implémentation du jeu classique",
    subtitleEn: "Take on the classic game",
    descriptionFr:
      "Projet en équipe de 4 : recréation complète en Java avec architecture orientée objet, gestion d'événements, interface graphique JavaFX. Pattern observer, séparation logique/affichage.",
    descriptionEn:
      "Team-of-4 project: full re-implementation in Java with an object-oriented architecture, event handling, JavaFX UI. Observer pattern, logic/rendering split.",
    tags: ["Java", "POO", "JavaFX"],
    year: "2024",
    contextKey: "team",
    contextIcon: Users,
    gradient: "from-violet-600 via-fuchsia-500 to-pink-500",
    image: "/bomberman.png"
  },
  {
    number: "06",
    title: "MarathonWeb",
    repo: "MarathonWeb",
    subtitleFr: "Carnet de voyages collaboratif",
    subtitleEn: "Collaborative travel journal",
    descriptionFr:
      "Site développé en hackathon de 36h, à 8 personnes (4 front, 4 back). Coordination, git workflow strict, livraison sous contrainte forte. Démo finale devant jury.",
    descriptionEn:
      "Site built during a 36h hackathon, team of 8 (4 front, 4 back). Coordination, strict git workflow, delivery under heavy constraint. Final demo in front of a jury.",
    tags: ["PHP", "MySQL", "Hackathon"],
    year: "2024",
    contextKey: "hackathon",
    contextIcon: Users,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    image: "/marathon-web.png"
  }
];

function contextLabel(t: Translation, key: ContextKey): string {
  switch (key) {
    case "personal":
      return t.projects.personalProject;
    case "team":
      return t.projects.teamProject;
    case "hackathon":
      return t.projects.hackathon;
    case "academic":
      return t.projects.academic;
  }
}

function ProjectCard({
  project,
  ariaHidden = false,
  variant = "carousel"
}: {
  project: Project;
  ariaHidden?: boolean;
  variant?: "carousel" | "stack";
}) {
  const { t, locale } = useI18n();
  const Icon = project.contextIcon;
  const githubUrl = `https://github.com/SimonCail/${project.repo}`;
  const ogUrl = `https://opengraph.githubassets.com/1/SimonCail/${project.repo}`;
  const previewSrc = project.image ?? ogUrl;
  const showRealImage = !!project.image || !project.privateRepo;
  const primaryUrl = project.liveUrl ?? githubUrl;
  const cardRef = useRef<HTMLDivElement>(null);

  const subtitle = locale === "fr" ? project.subtitleFr : project.subtitleEn;
  const description =
    locale === "fr" ? project.descriptionFr : project.descriptionEn;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const sizeClasses =
    variant === "carousel"
      ? "w-[85vw] sm:w-[420px] h-[600px] shrink-0"
      : "w-full max-w-full";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      aria-hidden={ariaHidden || undefined}
      className={`liquid-glass card-spotlight group relative flex flex-col rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-amber-glow/15 transition-shadow duration-500 ${sizeClasses}`}
    >
      <a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={ariaHidden ? -1 : 0}
        className="relative h-56 overflow-hidden shrink-0 bg-black block z-[2]"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

        {showRealImage && (
          <ImageWithSkeleton
            src={previewSrc}
            alt={`Aperçu de ${project.title}`}
            sizes="(max-width: 768px) 85vw, 420px"
            unoptimized
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[2]" />

        {(project.liveUrl || !project.privateRepo) && (
          <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-amber-glow/95 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-[3]">
            <ArrowUpRight className="w-4 h-4 text-black" />
          </div>
        )}

        <div className="absolute bottom-3 left-4 right-4 z-[3]">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/70">
            {project.number}
          </p>
          <p className="font-serif-display text-3xl text-white mt-0.5 leading-tight drop-shadow-lg">
            {project.title}
          </p>
        </div>
      </a>

      <div className="p-6 sm:p-7 flex-1 flex flex-col relative z-[2] min-h-0">
        <p className="font-serif-display italic text-muted text-sm mb-3">
          {subtitle}
        </p>
        <p className="text-sm text-default opacity-80 leading-relaxed flex-1 line-clamp-6 overflow-hidden">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md bg-black/5 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-muted group-hover:border-amber-glow/30 group-hover:text-default transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-subtle font-mono min-w-0">
            <Icon className="w-3 h-3 shrink-0" />
            <span className="truncate">
              {contextLabel(t, project.contextKey)} · {project.year}
            </span>
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={ariaHidden ? -1 : 0}
                  className="inline-flex items-center gap-1 text-xs text-amber-glow hover:text-default transition-colors font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Demo
                </a>
                <span className="text-subtle opacity-30">·</span>
              </>
            )}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={ariaHidden ? -1 : 0}
              className="inline-flex items-center gap-1 text-xs text-default hover:text-amber-glow transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              {project.extraGithub ? t.projects.front : t.projects.code}
              <ArrowUpRight className="w-3 h-3" />
            </a>
            {project.extraGithub && (
              <>
                <span className="text-subtle opacity-30">·</span>
                <a
                  href={`https://github.com/SimonCail/${project.extraGithub.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={ariaHidden ? -1 : 0}
                  className="inline-flex items-center gap-1 text-xs text-default hover:text-amber-glow transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  {project.extraGithub.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const DRAG_THRESHOLD = 6;

function useInfiniteCarousel(speedPxPerSec = 55) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let rafId = 0;
    let lastT = performance.now();
    let offset = 0;
    let hovered = false;
    let pauseUntil = 0;

    /** A pointer is pressed but we haven't committed to a drag yet. */
    let pending: {
      x: number;
      y: number;
      offset: number;
      pointerId: number;
    } | null = null;
    /** Drag has been committed (moved past threshold). */
    let dragging = false;

    const half = () => track.scrollWidth / 2;

    const apply = () => {
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    };

    const wrap = () => {
      const h = half();
      if (h <= 0) return;
      while (offset <= -h) offset += h;
      while (offset > 0) offset -= h;
    };

    apply();

    const tick = (now: number) => {
      const dt = Math.min(now - lastT, 50);
      lastT = now;

      if (!hovered && !dragging && now > pauseUntil) {
        offset -= (speedPxPerSec * dt) / 1000;
        wrap();
        apply();
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onMouseEnter = () => { hovered = true; };
    const onMouseLeave = () => { hovered = false; };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      pending = {
        x: e.clientX,
        y: e.clientY,
        offset,
        pointerId: e.pointerId
      };
      // Don't preventDefault here — clicks on inner buttons/links must still work.
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!pending) return;
      const dx = e.clientX - pending.x;
      const dy = e.clientY - pending.y;

      if (!dragging) {
        // Commit to a horizontal drag only after passing the threshold AND
        // when motion is more horizontal than vertical (otherwise let the
        // page scroll vertically).
        if (Math.abs(dx) > DRAG_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
          dragging = true;
          container.style.cursor = "grabbing";
          try { container.setPointerCapture(pending.pointerId); } catch {}
        } else {
          return;
        }
      }

      offset = pending.offset + dx;
      wrap();
      apply();
    };

    /** Block the click event that naturally follows a drag. */
    const blockNextClick = (ev: Event) => {
      ev.stopPropagation();
      ev.preventDefault();
    };

    const onPointerUp = (e: PointerEvent) => {
      const wasDragging = dragging;
      const startPointerId = pending?.pointerId;
      pending = null;
      dragging = false;
      container.style.cursor = "grab";

      if (startPointerId !== undefined) {
        try { container.releasePointerCapture(startPointerId); } catch {}
      }

      if (wasDragging) {
        pauseUntil = performance.now() + 1500;
        // Suppress the click that the browser fires after pointerup so the
        // user doesn't accidentally activate a link they just dragged across.
        container.addEventListener("click", blockNextClick, {
          capture: true,
          once: true
        });
        // Safety: if no click fires within a frame, drop the listener.
        setTimeout(() => {
          container.removeEventListener("click", blockNextClick, {
            capture: true
          } as EventListenerOptions);
        }, 0);
      }
      // Mark this event as handled
      void e;
    };

    container.style.cursor = "grab";
    container.style.touchAction = "pan-y";
    track.style.willChange = "transform";

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
    };
  }, [speedPxPerSec]);

  return { containerRef, trackRef };
}

export default function Projects() {
  const { t } = useI18n();
  const { containerRef, trackRef } = useInfiniteCarousel(55);

  return (
    <section
      id="projets"
      className="relative py-20 sm:py-24 overflow-hidden"
    >
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-amber-glow">
            {String(projects.length).padStart(2, "0")} {t.projects.eyebrowSuffix}
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-default mt-3 tracking-tight">
            {t.projects.title1}
            <em className="text-gradient-warm">{t.projects.titleAccent}</em>
          </h2>
          <p className="text-muted max-w-xl mx-auto mt-5 px-2">
            {t.projects.description}
          </p>
          <p className="hidden sm:block text-xs text-subtle mt-3 font-mono italic">
            {t.projects.hint}
          </p>
        </motion.div>
      </div>

      {/* Mobile: vertical stack — natural thumb scroll, no drag needed */}
      <div className="sm:hidden px-4 grid gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
          >
            <ProjectCard project={p} variant="stack" />
          </motion.div>
        ))}
      </div>

      {/* Desktop: infinite horizontal carousel */}
      <div className="hidden sm:block relative">
        <div
          className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
        />

        <div
          ref={containerRef}
          className="overflow-hidden select-none"
        >
          <div ref={trackRef} className="flex gap-5 w-max py-4 items-stretch">
            {projects.map((p) => (
              <ProjectCard key={`a-${p.number}`} project={p} />
            ))}
            {projects.map((p) => (
              <ProjectCard key={`b-${p.number}`} project={p} ariaHidden />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 sm:mt-12 flex justify-center px-4"
      >
        <a
          href="https://github.com/SimonCail?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass group inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm text-default hover:shadow-[0_8px_32px_-8px_rgba(251,146,60,0.4)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <Github className="w-4 h-4 text-amber-glow" />
          <span>{t.projects.seeAll}</span>
          <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-amber-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </a>
      </motion.div>
    </section>
  );
}
