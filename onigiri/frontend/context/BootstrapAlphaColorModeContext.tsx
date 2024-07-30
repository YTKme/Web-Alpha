/**
 * Bootstrap Alpha Color Mode Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

type BootstrapAlphaColorMode = 'light' | 'dark' | 'auto';

interface BootstrapAlphaColorModeContextType {
  colorModeAlpha: BootstrapAlphaColorMode
  setColorModeAlpha: (colorMode: BootstrapAlphaColorMode) => void
};

const BootstrapAlphaColorModeContext = createContext<BootstrapAlphaColorModeContextType | undefined>(undefined);

export function BootstrapAlphaColorModeProvider({
  children,
}: {
  children: ReactNode,
}) {
  // Use State
  const [colorModeAlpha, setColorModeAlpha] = useState<BootstrapAlphaColorMode>('auto');

  const showColorMode = (colorMode: BootstrapAlphaColorMode) => {
    if (colorMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', colorMode)
    }
  };

  // Use Effect
  useEffect(() => {
    showColorMode(colorModeAlpha)
  }, [colorModeAlpha]);

  return (
    <BootstrapAlphaColorModeContext.Provider value={{ colorModeAlpha, setColorModeAlpha }}>
      {children}
    </BootstrapAlphaColorModeContext.Provider>
  );
};

export const useBootstrapAlphaColorMode = (): BootstrapAlphaColorModeContextType => {
  const context = useContext(BootstrapAlphaColorModeContext)
  if (!context) {
    throw new Error('useBootstrapAlphaColorMode must be used within a BootstrapAlphaColorModeProvider')
  }
  return context;
};
