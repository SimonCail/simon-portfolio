import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { I18nProvider } from "./components/I18nProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://simoncaillieret.vercel.app"
  ),
  title: "Simon Caillieret · Développeur Expert DevOps",
  description:
    "Étudiant en Mastère Expert DevOps à l'EPSI de Lille (2026-2028), diplômé du BUT Informatique de l'IUT de Lens. À la recherche d'une alternance Bac+5 à Lille ou Lens.",
  keywords: [
    "Simon Caillieret",
    "portfolio",
    "alternance DevOps",
    "alternance Bac+5",
    "développeur Expert DevOps",
    "Mastère Expert DevOps",
    "EPSI Lille",
    "BUT Informatique",
    "IUT Lens",
    "Lille",
    "Lens"
  ],
  authors: [{ name: "Simon Caillieret" }],
  openGraph: {
    title: "Simon Caillieret · Portfolio",
    description:
      "Mastère Expert DevOps à l'EPSI de Lille. Recherche d'une alternance Bac+5 comme développeur Expert DevOps.",
    type: "website",
    locale: "fr_FR",
    siteName: "Simon Caillieret"
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Caillieret · Portfolio",
    description: "Mastère Expert DevOps à l'EPSI de Lille, en recherche d'alternance Bac+5."
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
