"use client";

import { useEffect } from "react";
import { Toaster } from "sonner";
import Background from "./components/Background";
import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import KeyFacts from "./components/KeyFacts";
import Parcours from "./components/Parcours";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Background />
      <ScrollProgress />
      <Nav />

      <main className="relative">
        <Hero />
        <KeyFacts />
        <Parcours />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>

      <Toaster
        theme={theme}
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast: "liquid-glass-strong !border-white/10 !text-default font-mono"
          }
        }}
      />
    </>
  );
}
