export const translations = {
  fr: {
    locale: "fr" as const,
    nav: {
      home: "Accueil",
      journey: "Parcours",
      experience: "Expériences",
      projects: "Projets",
      contact: "Contact"
    },
    hero: {
      available: "Disponible · Alternance Sept 2026",
      hello: "Bonjour, je suis",
      desc: {
        p1: "Étudiant en ",
        b1: "3ème année de BUT Informatique",
        p2: " à l'IUT de Lens, actuellement stagiaire chez ",
        b2: "Pulp Immobilier",
        p3: ". À la recherche d'une ",
        accent: "alternance Master",
        p4: " en développement pour septembre 2026."
      },
      ctaProjects: "Voir mes projets",
      ctaCV: "Télécharger mon CV",
      ctaContact: "Me contacter",
      age: "21 ans",
      license: "Permis B",
      scroll: "Scroll"
    },
    keyfacts: {
      eyebrow: "Petit tour",
      title: "Là où j'en suis aujourd'hui",
      stats: {
        s1: "années à l'IUT",
        s2: "stages dev en entreprise",
        s3: "projets au compteur"
      },
      facts: {
        internshipLabel: "En stage",
        internshipTitle: "Pulp Immobilier",
        internshipSub: "Migration CRM Laravel → Next.js · Mars-Août 2026",
        educationLabel: "Formation",
        educationTitle: "BUT Informatique",
        educationSub: "IUT de Lens · 3ème année · Réalisation d'applications",
        codeLabel: "Code",
        codeTitle: "GitHub actif",
        codeSub: "Java · TypeScript · PHP · Python · React"
      },
      stackLabel: "Stack technique",
      stackCount: "/ 16 outils & langages"
    },
    parcours: {
      eyebrow: "Mon parcours",
      title: "Cinq années en accéléré",
      description:
        "Du Bac NSI à la recherche d'alternance — comment j'en suis arrivé là.",
      events: [
        {
          year: "2022",
          milestones: [
            { title: "Baccalauréat Général", sub: "Spécialités Mathématiques + NSI" }
          ]
        },
        {
          year: "2023",
          milestones: [
            { title: "Début du BUT Informatique", sub: "IUT de Lens — Réalisation d'applications" },
            { title: "Stage Infographie", sub: "Premier contact avec le monde pro" },
            { title: "Job étudiant — Agent de tri", sub: "" }
          ]
        },
        {
          year: "2024",
          milestones: [
            { title: "Hackathon Marathon du Web", sub: "36h, équipe de 8 — site collaboratif PHP/MySQL" },
            { title: "Projet Bomberman en Java", sub: "Équipe de 4 — POO, gestion d'événements, JavaFX" },
            { title: "Job étudiant — Employé technique", sub: "" }
          ]
        },
        {
          year: "2025",
          milestones: [
            { title: "Stage chez Grow Your Business", sub: "Vue.js mobile (audits ERESE) + sites WordPress" },
            { title: "Projet équipe Location-MaskCar", sub: "Plateforme full-stack Angular + Laravel" }
          ]
        },
        {
          year: "2026",
          current: true,
          milestones: [
            { title: "Stage chez Pulp Immobilier (en cours)", sub: "Migration CRM Laravel → Next.js" },
            { title: "Projets perso fit-tracker, cahier-appel & heures-delegation", sub: "Trois PWA en React/Vite et Next.js" },
            { title: "Diplôme BUT Informatique", sub: "Été 2026" },
            { title: "Recherche d'alternance Master", sub: "Disponible à partir de septembre 2026" }
          ]
        }
      ]
    },
    experience: {
      eyebrow: "En entreprise",
      title1: "Mes deux passages ",
      titleAccent: "en boîte",
      description:
        "Migration d'un CRM Laravel vers Next.js chez l'un, app mobile Vue.js et sites WordPress chez l'autre. Du concret, en équipe, en production.",
      pulp: {
        company: "Pulp Immobilier",
        role: "Stagiaire Développement Web",
        period: "Mars — Août 2026",
        currentLabel: "En cours",
        description:
          "Migration complète d'un CRM immobilier interne de Laravel vers Next.js. Refonte de l'architecture front, intégration TypeScript, mise en place de bonnes pratiques.",
        achievements: [
          "Migration progressive du legacy Laravel vers Next.js",
          "Architecture front-end maintenable et typée",
          "Travail en équipe avec méthodologie agile",
          "Code reviews et pair programming"
        ]
      },
      grow: {
        company: "Grow Your Business",
        role: "Stagiaire Développement Web",
        period: "Mai — Juin 2025",
        finishedLabel: "Terminé",
        description:
          "Développement d'une application mobile d'audits pour la société ERESE en Vue.js, et réalisation de sites vitrines clients sur WordPress.",
        achievements: [
          "Application mobile Vue.js pour audits terrain (ERESE)",
          "Sites vitrines clients sur WordPress",
          "Méthodologie Agile au quotidien",
          "Premier contact avec le delivery client"
        ]
      },
      sideJobs: {
        eyebrow: "En parallèle",
        caption: "Diverses expériences à côté de mes études.",
        items: [
          { label: "Infographiste", type: "Stage", year: "2023" },
          { label: "Agent de tri", type: "Job étudiant", year: "2023" },
          { label: "Employé technique", type: "Job étudiant", year: "2024" }
        ]
      },
      cvLink: "Voir mon CV complet pour plus de détails"
    },
    projects: {
      eyebrowSuffix: "projets",
      title1: "Ce que j'ai ",
      titleAccent: "sorti",
      description:
        "Perso, académique, hackathon — un mélange de stacks et de contraintes différentes.",
      hint: "Survolez pour mettre en pause · Glissez pour naviguer",
      personalProject: "Projet personnel",
      teamProject: "Projet en équipe",
      hackathon: "Hackathon · 36h",
      academic: "Projet académique",
      front: "Front",
      code: "Code",
      seeAll: "Voir tous mes projets sur GitHub"
    },
    contact: {
      eyebrow: "On en parle ?",
      title1: "Vous cherchez un ",
      titleAccent: "alternant",
      title2: " ?",
      description:
        "Alternance Master dev à partir de septembre 2026. Une opportunité, une question sur mon profil, ou juste envie d'échanger — écrivez-moi, je réponds sous 48h.",
      labels: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        cv: "Mon CV",
        cvSub: "PDF · 1 page"
      },
      copy: {
        action: "Copier l'email",
        success: "Email copié dans le presse-papier",
        error: "Impossible de copier",
        manual: "Copie manuelle nécessaire"
      },
      location: "Hauts-de-France · Mobilité ouverte"
    },
    footer: {
      copyright: (year: number) => `© ${year} Simon Caillieret`,
      stack: "Next.js · Tailwind · Framer Motion",
      location: "Souchez · France"
    },
    notFound: {
      label: "Erreur 404",
      title1: "Cette page ",
      titleAccent: "n'existe pas",
      description: "Le lien que vous avez suivi est cassé ou la page a été déplacée.",
      cta: "Retour à l'accueil"
    }
  },
  en: {
    locale: "en" as const,
    nav: {
      home: "Home",
      journey: "Journey",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      available: "Available · Apprenticeship Sept 2026",
      hello: "Hi, I'm",
      desc: {
        p1: "Third-year ",
        b1: "Computer Science student",
        p2: " at IUT Lens, currently interning at ",
        b2: "Pulp Immobilier",
        p3: ". Looking for a ",
        accent: "Master's apprenticeship",
        p4: " in development starting September 2026."
      },
      ctaProjects: "View my projects",
      ctaCV: "Download my résumé",
      ctaContact: "Get in touch",
      age: "21 years old",
      license: "Driver's license",
      scroll: "Scroll"
    },
    keyfacts: {
      eyebrow: "Quick tour",
      title: "Where I'm at right now",
      stats: {
        s1: "years at IUT",
        s2: "dev internships",
        s3: "shipped projects"
      },
      facts: {
        internshipLabel: "Interning",
        internshipTitle: "Pulp Immobilier",
        internshipSub: "Migrating a CRM from Laravel to Next.js · Mar–Aug 2026",
        educationLabel: "Education",
        educationTitle: "BUT Computer Science",
        educationSub: "IUT Lens · 3rd year · Application development",
        codeLabel: "Code",
        codeTitle: "Active on GitHub",
        codeSub: "Java · TypeScript · PHP · Python · React"
      },
      stackLabel: "Tech stack",
      stackCount: "/ 16 tools & languages"
    },
    parcours: {
      eyebrow: "My journey",
      title: "Five years in fast-forward",
      description:
        "From a CS-focused high-school diploma to apprenticeship hunting — how I got here.",
      events: [
        {
          year: "2022",
          milestones: [
            { title: "French Baccalauréat", sub: "Mathematics + Computer Science majors" }
          ]
        },
        {
          year: "2023",
          milestones: [
            { title: "Started BUT Computer Science", sub: "IUT Lens — Application development track" },
            { title: "Graphic design internship", sub: "First taste of professional work" },
            { title: "Student job — Sorting agent", sub: "" }
          ]
        },
        {
          year: "2024",
          milestones: [
            { title: "Marathon du Web hackathon", sub: "36h, team of 8 — collaborative PHP/MySQL site" },
            { title: "Bomberman in Java", sub: "Team of 4 — OOP, event handling, JavaFX" },
            { title: "Student job — Technical assistant", sub: "" }
          ]
        },
        {
          year: "2025",
          milestones: [
            { title: "Internship at Grow Your Business", sub: "Vue.js mobile app (ERESE audits) + WordPress sites" },
            { title: "Team project: Location-MaskCar", sub: "Full-stack Angular + Laravel platform" }
          ]
        },
        {
          year: "2026",
          current: true,
          milestones: [
            { title: "Internship at Pulp Immobilier (ongoing)", sub: "Migrating a CRM from Laravel to Next.js" },
            { title: "Personal projects: fit-tracker, cahier-appel & heures-delegation", sub: "Three PWAs in React/Vite and Next.js" },
            { title: "BUT degree", sub: "Summer 2026" },
            { title: "Looking for a Master's apprenticeship", sub: "Available from September 2026" }
          ]
        }
      ]
    },
    experience: {
      eyebrow: "On the job",
      title1: "Two stints in ",
      titleAccent: "the wild",
      description:
        "Migrating a Laravel CRM to Next.js at one, building a Vue.js mobile app and WordPress sites at the other. Real code, real teams, real shipping.",
      pulp: {
        company: "Pulp Immobilier",
        role: "Web Development Intern",
        period: "March — August 2026",
        currentLabel: "Ongoing",
        description:
          "Full migration of an internal real-estate CRM from Laravel to Next.js. Front-end architecture redesign, TypeScript integration, best-practices setup.",
        achievements: [
          "Progressive migration from legacy Laravel to Next.js",
          "Maintainable, fully-typed front-end architecture",
          "Team work using Agile methodology",
          "Code reviews and pair programming"
        ]
      },
      grow: {
        company: "Grow Your Business",
        role: "Web Development Intern",
        period: "May — June 2025",
        finishedLabel: "Finished",
        description:
          "Built a Vue.js mobile audit app for the ERESE company, and delivered showcase websites for clients on WordPress.",
        achievements: [
          "Vue.js mobile app for field audits (ERESE)",
          "WordPress showcase sites for clients",
          "Daily Agile workflow",
          "First exposure to client delivery"
        ]
      },
      sideJobs: {
        eyebrow: "On the side",
        caption: "Various experiences alongside my studies.",
        items: [
          { label: "Graphic designer", type: "Internship", year: "2023" },
          { label: "Sorting agent", type: "Student job", year: "2023" },
          { label: "Technical assistant", type: "Student job", year: "2024" }
        ]
      },
      cvLink: "See my full résumé for more details"
    },
    projects: {
      eyebrowSuffix: "projects",
      title1: "What I've ",
      titleAccent: "shipped",
      description:
        "Personal, academic, hackathon — a mix of stacks and constraints.",
      hint: "Hover to pause · Drag to navigate",
      personalProject: "Personal project",
      teamProject: "Team project",
      hackathon: "Hackathon · 36h",
      academic: "Academic project",
      front: "Front",
      code: "Code",
      seeAll: "See all my projects on GitHub"
    },
    contact: {
      eyebrow: "Shall we talk?",
      title1: "Looking for an ",
      titleAccent: "apprentice",
      title2: "?",
      description:
        "Master's dev apprenticeship from September 2026. An opportunity, a question about my profile, or just want to chat — drop me a line, I reply within 48h.",
      labels: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        cv: "My résumé",
        cvSub: "PDF · 1 page"
      },
      copy: {
        action: "Copy email",
        success: "Email copied to clipboard",
        error: "Couldn't copy",
        manual: "Manual copy required"
      },
      location: "Northern France · Open to relocation"
    },
    footer: {
      copyright: (year: number) => `© ${year} Simon Caillieret`,
      stack: "Next.js · Tailwind · Framer Motion",
      location: "Souchez · France"
    },
    notFound: {
      label: "Error 404",
      title1: "This page ",
      titleAccent: "doesn't exist",
      description: "The link you followed is broken or the page has moved.",
      cta: "Back to home"
    }
  }
} as const;

export type Locale = keyof typeof translations;
export type Translation = (typeof translations)[Locale];
