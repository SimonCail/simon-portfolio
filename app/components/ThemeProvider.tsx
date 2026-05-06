"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({
  theme: "dark",
  toggle: () => {}
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read initial theme synchronously from class set by inline script in <head>
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
    setTheme(current);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      const html = document.documentElement;
      html.classList.add("theme-transition");
      html.classList.remove("light", "dark");
      html.classList.add(next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
      window.setTimeout(() => html.classList.remove("theme-transition"), 400);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
