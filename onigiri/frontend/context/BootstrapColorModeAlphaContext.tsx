/**
 * Bootstrap Color Mode Alpha Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

type BootstrapColorModeAlpha = 'light' | 'dark' | 'auto';

interface BootstrapColorModeAlphaContextType {
  colorMode: BootstrapColorModeAlpha
  setColorMode: (colorMode: BootstrapColorModeAlpha) => void
};

const BootstrapColorModeAlphaContext = createContext<BootstrapColorModeAlphaContextType | undefined>(undefined);

export function BootstrapColorModeAlphaProvider({
  children,
}: {
  children: ReactNode,
}) {
  // Use State
  const [colorMode, setColorMode] = useState<BootstrapColorModeAlpha>('auto');

  const showColorMode = (colorMode: BootstrapColorModeAlpha) => {
    if (colorMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', colorMode)
    }
  };

  // Use Effect
  useEffect(() => {
    showColorMode(colorMode)
  }, [colorMode]);

  return (
    <BootstrapColorModeAlphaContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </BootstrapColorModeAlphaContext.Provider>
  );
};

export const useBootstrapColorModeAlpha = (): BootstrapColorModeAlphaContextType => {
  const context = useContext(BootstrapColorModeAlphaContext)
  if (!context) {
    throw new Error('useBootstrapColorModeSimple must be used within a BootstrapColorModeSimpleProvider')
  }
  return context;
};
