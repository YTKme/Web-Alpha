/**
 * Bootstrap Beta Color Mode Context
 */

'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'auto';

export function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  return 'auto';
}

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('auto');

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setThemeState(initialTheme);
    document.documentElement.setAttribute('data-bs-theme', initialTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    if (newTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-bs-theme', newTheme);
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
