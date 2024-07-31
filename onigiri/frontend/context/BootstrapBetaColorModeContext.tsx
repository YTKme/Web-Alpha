/**
 * Bootstrap Beta Color Mode Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";


type BootstrapBetaColorMode = 'light' | 'dark' | 'auto';

interface BootstrapBetaColorModeContextType {
  colorModeBeta: BootstrapBetaColorMode
  showColorMode: (colorModeBeta: BootstrapBetaColorMode) => void
};

const BootstrapBetaColorModeContext = createContext<BootstrapBetaColorModeContextType | undefined>(undefined);

export function getInitialColorMode(): BootstrapBetaColorMode {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('colormode') as BootstrapBetaColorMode | null;
    if (storedTheme) {
      return storedTheme;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  return 'auto';
};

export function BootstrapBetaColorModeProvider({
  children,
}: {
  children: ReactNode,
}) {
  // Use State
  const [colorModeBeta, setColorModeBeta] = useState<BootstrapBetaColorMode>('auto');

  useEffect(() => {
    const initialColorMode = getInitialColorMode();
    setColorModeBeta(initialColorMode);
    document.documentElement.setAttribute('data-bs-theme', initialColorMode);
  }, []);

  const showColorMode = (colorModeBeta: BootstrapBetaColorMode) => {
    setColorModeBeta(colorModeBeta);
    if (colorModeBeta === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', colorModeBeta)
    }
    localStorage.setItem('colormode', colorModeBeta);
  };

  return (
    <BootstrapBetaColorModeContext.Provider value={{ colorModeBeta, showColorMode }}>
      {children}
    </BootstrapBetaColorModeContext.Provider>
  );
};

export const useBootstrapBetaColorMode = (): BootstrapBetaColorModeContextType => {
  const context = useContext(BootstrapBetaColorModeContext)
  if (!context) {
    throw new Error('useBootstrapBetaColorMode must be used within a BootstrapBetaColorModeProvider')
  }
  return context;
};
