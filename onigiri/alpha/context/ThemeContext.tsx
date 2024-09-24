/**
 * Theme Context
 */

'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const [theme, setTheme] = useState<Theme>('system')

  const showTheme = (theme: Theme) => {
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.body.className = systemTheme;
    } else {
      document.body.className = theme;
    }
  };

  useEffect(() => {
    showTheme(theme)
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context;
};
