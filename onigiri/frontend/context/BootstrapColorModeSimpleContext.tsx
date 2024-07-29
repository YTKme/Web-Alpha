/**
 * Bootstrap Color Mode Simple Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

type BootstrapColorModeSimple = 'light' | 'dark' | 'auto';

interface BootstrapColorModeSimpleContextType {
  colorMode: BootstrapColorModeSimple
  setColorMode: (colorMode: BootstrapColorModeSimple) => void
};

const BootstrapColorModeSimpleContext = createContext<BootstrapColorModeSimpleContextType | undefined>(undefined);

export function BootstrapColorModeSimpleProvider({
  children,
}: {
  children: ReactNode,
}) {
  // Use State
  const [colorMode, setColorMode] = useState<BootstrapColorModeSimple>('auto');

  const showColorMode = (colorMode: BootstrapColorModeSimple) => {
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
    <BootstrapColorModeSimpleContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </BootstrapColorModeSimpleContext.Provider>
  );
};

export const useBootstrapColorModeSimple = (): BootstrapColorModeSimpleContextType => {
  const context = useContext(BootstrapColorModeSimpleContext)
  if (!context) {
    throw new Error('useBootstrapColorModeSimple must be used within a BootstrapColorModeSimpleProvider')
  }
  return context;
};
