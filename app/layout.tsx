import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { I18nProvider } from "./components/I18nProvider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://simon-portfolio-ashen.vercel.app"
  ),
  title: "Simon Caillieret — Étudiant Développeur",
  description:
    "Étudiant en 3ème année de BUT Informatique à l'IUT de Lens, actuellement en stage chez Pulp Immobilier. Recherche d'une alternance Master en développement pour septembre 2026.",
  keywords: [
    "Simon Caillieret",
    "portfolio",
    "alternance 2026",
    "développeur",
    "BUT Informatique",
    "IUT Lens"
  ],
  authors: [{ name: "Simon Caillieret" }],
  openGraph: {
    title: "Simon Caillieret — Portfolio",
    description:
      "Étudiant en BUT Informatique, en stage chez Pulp Immobilier. Recherche d'une alternance Master dev pour septembre 2026.",
    type: "website",
    locale: "fr_FR",
    siteName: "Simon Caillieret"
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Caillieret — Portfolio",
    description: "Étudiant développeur, alternance Sept 2026."
  }
};

const themeInit = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || "dark";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased">
        <I18nProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
