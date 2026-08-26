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
      hello: "Bonjour, je suis",
      desc: {
        p1: "Étudiant en ",
        b1: "Mastère Expert DevOps",
        p2: " à l'",
        b2: "EPSI de Lille",
        p3: ". Je recherche une ",
        accent: "alternance",
        p4: " dès septembre 2026."
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
      title: "En ce moment",
      stats: {
        s1: "années à l'IUT",
        s2: "stages dev en entreprise",
        s3: "projets au compteur"
      },
      facts: {
        internshipLabel: "Dernier stage",
        internshipTitle: "Pulp Immobilier",
        internshipSub: "Espace client & espace document du CRM · Mars-Août 2026",
        educationLabel: "Formation",
        educationTitle: "Mastère Expert DevOps",
        educationSub: "EPSI Lille · 2026-2028 · Alternance recherchée",
        codeLabel: "Code",
        codeTitle: "GitHub actif",
        codeSub: "Java · TypeScript · PHP · Python · React"
      },
      stackLabel: "Stack technique",
      stackCount: "/ 19 outils & langages",
      languages: "Français natif · Anglais B2"
    },
    parcours: {
      eyebrow: "Mon parcours",
      title: "De 2022 à aujourd'hui",
      description:
        "Du Bac NSI à la recherche d'alternance : comment j'en suis arrivé là.",
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
            { title: "Début du BUT Informatique", sub: "IUT de Lens · Réalisation d'applications" },
            { title: "Stage Infographie", sub: "Premier contact avec le monde pro" },
            { title: "Job étudiant : agent de tri", sub: "" }
          ]
        },
        {
          year: "2024",
          milestones: [
            { title: "Hackathon Marathon du Web", sub: "36h en équipe de 8, site collaboratif PHP/MySQL" },
            { title: "Projet Bomberman en Java", sub: "Équipe de 4 · POO, gestion d'événements, JavaFX" },
            { title: "Job étudiant : employé technique", sub: "" }
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
            { title: "Stage chez Pulp Immobilier", sub: "Espace client (ec-bob) & espace document (bobdocs)" },
            { title: "Projets perso fit-tracker, cahier-appel & heures-delegation", sub: "Trois PWA en React/Vite et Next.js" },
            { title: "Diplôme BUT Informatique", sub: "Obtenu à l'IUT de Lens" },
            { title: "Mastère Expert DevOps", sub: "EPSI Lille · 2026-2028" }
          ]
        }
      ]
    },
    experience: {
      eyebrow: "En entreprise",
      title1: "Mes deux passages ",
      titleAccent: "en boîte",
      description:
        "Espace client et espace document autour d'un CRM immobilier chez l'un, app mobile Vue.js et sites WordPress chez l'autre. Du concret, en équipe, en production.",
      pulp: {
        company: "Pulp Immobilier",
        role: "Stagiaire Développement Full-Stack",
        period: "Mars à août 2026",
        currentLabel: "En cours",
        description:
          "Deux applications greffées sur le CRM immobilier interne : ec-bob, l'espace client destiné aux propriétaires et acquéreurs, et bobdocs, l'espace document qui génère les actes de l'agence. Modernisation du front, TypeScript, mise en place de bonnes pratiques.",
        achievements: [
          "ec-bob · espace client en SPA React 19 / TypeScript : tableau de bord, biens et carte Leaflet, affaires, recherches sauvegardées, documents et profil",
          "ec-bob · PWA installable, authentification par token Sanctum, front découplé consommant l'API du CRM",
          "bobdocs · espace document : génération PDF des mandats, avenants, compromis et baux depuis des modèles configurables",
          "bobdocs · brouillons, historique des générations rejouable et SSO depuis le CRM via URL signée",
          "Architecture front-end maintenable et typée, code reviews et pair programming"
        ]
      },
      grow: {
        company: "Grow Your Business",
        role: "Stagiaire Développement Web",
        period: "Mai à juin 2025",
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
      titleAccent: "réalisé",
      description:
        "Perso, académique, hackathon : un mélange de stacks et de contraintes différentes.",
      personalProject: "Projet personnel",
      teamProject: "Projet en équipe",
      hackathon: "Hackathon · 36h",
      academic: "Projet académique",
      front: "Front",
      code: "Code",
      seeAll: "Voir tous mes projets sur GitHub"
    },
    contact: {
      title1: "Vous cherchez un ",
      titleAccent: "alternant",
      title2: " ?",
      description:
        "Je recherche une alternance Bac+5 comme développeur Expert DevOps, dans le cadre de mon Mastère à l'EPSI de Lille. N'hésitez pas à me contacter par mail.",
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
      stack: "Next.js · Tailwind · Framer Motion"
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
      hello: "Hi, I'm",
      desc: {
        p1: "Studying for a ",
        b1: "DevOps Expert Master's",
        p2: " at ",
        b2: "EPSI Lille",
        p3: ". I'm looking for an ",
        accent: "apprenticeship",
        p4: " starting September 2026."
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
      title: "Right now",
      stats: {
        s1: "years at IUT",
        s2: "dev internships",
        s3: "shipped projects"
      },
      facts: {
        internshipLabel: "Latest internship",
        internshipTitle: "Pulp Immobilier",
        internshipSub: "CRM client portal & document workspace · Mar–Aug 2026",
        educationLabel: "Education",
        educationTitle: "DevOps Expert Master's",
        educationSub: "EPSI Lille · 2026-2028 · Looking for an apprenticeship",
        codeLabel: "Code",
        codeTitle: "Active on GitHub",
        codeSub: "Java · TypeScript · PHP · Python · React"
      },
      stackLabel: "Tech stack",
      stackCount: "/ 19 tools & languages",
      languages: "French native · English B2"
    },
    parcours: {
      eyebrow: "My journey",
      title: "From 2022 to today",
      description:
        "From a CS-focused high-school diploma to apprenticeship hunting: how I got here.",
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
            { title: "Started BUT Computer Science", sub: "IUT Lens · Application development track" },
            { title: "Graphic design internship", sub: "First taste of professional work" },
            { title: "Student job: sorting agent", sub: "" }
          ]
        },
        {
          year: "2024",
          milestones: [
            { title: "Marathon du Web hackathon", sub: "36h with a team of 8, collaborative PHP/MySQL site" },
            { title: "Bomberman in Java", sub: "Team of 4 · OOP, event handling, JavaFX" },
            { title: "Student job: technical assistant", sub: "" }
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
            { title: "Internship at Pulp Immobilier", sub: "Client portal (ec-bob) & document workspace (bobdocs)" },
            { title: "Personal projects: fit-tracker, cahier-appel & heures-delegation", sub: "Three PWAs in React/Vite and Next.js" },
            { title: "BUT degree", sub: "Graduated at IUT Lens" },
            { title: "DevOps Expert Master's", sub: "EPSI Lille · 2026-2028" }
          ]
        }
      ]
    },
    experience: {
      eyebrow: "On the job",
      title1: "Two stints in ",
      titleAccent: "the wild",
      description:
        "A client portal and a document workspace around a real-estate CRM at one, a Vue.js mobile app and WordPress sites at the other. Real code, real teams, real shipping.",
      pulp: {
        company: "Pulp Immobilier",
        role: "Full-Stack Development Intern",
        period: "March to August 2026",
        currentLabel: "Ongoing",
        description:
          "Two applications built on top of the in-house real-estate CRM: ec-bob, the client portal for owners and buyers, and bobdocs, the document workspace that generates the agency's paperwork. Front-end modernisation, TypeScript, best-practices setup.",
        achievements: [
          "ec-bob · client portal as a React 19 / TypeScript SPA: dashboard, listings with a Leaflet map, deals, saved searches, documents and profile",
          "ec-bob · installable PWA, Sanctum token authentication, decoupled front consuming the CRM API",
          "bobdocs · document workspace: PDF generation of mandates, amendments, sale agreements and leases from configurable templates",
          "bobdocs · drafts, replayable generation history and SSO from the CRM through signed URLs",
          "Maintainable, fully-typed front-end architecture, code reviews and pair programming"
        ]
      },
      grow: {
        company: "Grow Your Business",
        role: "Web Development Intern",
        period: "May to June 2025",
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
      titleAccent: "built",
      description:
        "Personal, academic, hackathon: a mix of stacks and constraints.",
      personalProject: "Personal project",
      teamProject: "Team project",
      hackathon: "Hackathon · 36h",
      academic: "Academic project",
      front: "Front",
      code: "Code",
      seeAll: "See all my projects on GitHub"
    },
    contact: {
      title1: "Looking for an ",
      titleAccent: "apprentice",
      title2: "?",
      description:
        "I'm looking for an apprenticeship as a DevOps Expert developer, alongside my Master's at EPSI Lille. Feel free to reach out by email.",
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
      stack: "Next.js · Tailwind · Framer Motion"
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
