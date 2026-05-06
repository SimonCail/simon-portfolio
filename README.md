# Portfolio — Simon Caillieret

Site portfolio personnel.
Étudiant en BUT Informatique à l'IUT de Lens, en stage chez Pulp Immobilier
(migration CRM Laravel → Next.js). À la recherche d'une alternance Master en
développement pour septembre 2026.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** + utilities custom (liquid glass, dot grid, marquee, etc.)
- **Framer Motion** pour toutes les animations
- **react-icons** pour les logos tech (Simple Icons)
- **Sonner** pour les toasts
- **Lucide React** pour les icônes UI

## Développement

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
npm run start
```

## Déploiement

Le site est déployé sur **Vercel**.

## Structure

```
app/
├── components/
│   ├── ui/              # Composants réutilisables (Lamp, AnimatedBeam, FranceMap, etc.)
│   ├── Hero.tsx
│   ├── KeyFacts.tsx
│   ├── Parcours.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── ...
├── i18n/translations.ts # FR + EN
├── icon.tsx             # Favicon dynamique
├── opengraph-image.tsx  # Carte de partage social
├── not-found.tsx        # 404 custom
├── layout.tsx
└── page.tsx
```

## Contact

- **Email** : simon.caillieret@gmail.com
- **LinkedIn** : [Simon Caillieret](https://www.linkedin.com/in/simon-caillieret-a8996229a/)
- **GitHub** : [@SimonCail](https://github.com/SimonCail)
