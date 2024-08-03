/**
 * Bootstrap Gamma Color Mode Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

type BootstrapGammaColorMode = 'light' | 'dark' | 'auto';

interface BootstrapGammaColorModeContextType {
  colorModeGamma: BootstrapGammaColorMode
  setColorModeGamma: (colorModeGamma: BootstrapGammaColorMode) => void
};

const BootstrapGammaColorModeContext = createContext<BootstrapGammaColorModeContextType | undefined>(undefined);

export function BootstrapGammaColorModeProvider({
  children,
}: {
  children: ReactNode,
}) {
  // Use State
  const [colorModeGammaState, setColorModeGammaState] = useState<BootstrapGammaColorMode>('auto');

  const showColorMode = (colorModeGamma: BootstrapGammaColorMode) => {
    if (colorModeGamma === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', colorModeGamma)
    }
  };

  // Use Effect
  useEffect(() => {
    showColorMode(colorModeGammaState)
  }, [colorModeGammaState]);

  return (
    <BootstrapGammaColorModeContext.Provider value={{ colorModeGamma: colorModeGammaState, setColorModeGamma: setColorModeGammaState }}>
      {children}
    </BootstrapGammaColorModeContext.Provider>
  );
};

export const useBootstrapAlphaColorMode = (): BootstrapGammaColorModeContextType => {
  const context = useContext(BootstrapGammaColorModeContext)
  if (!context) {
    throw new Error('useBootstrapAlphaColorMode must be used within a BootstrapGammaColorModeProvider')
  }
  return context;
};

const initialColorModeGamma = `
(() => {
  'use strict';
  const getStoredColorModeGamma = () => localStorage.getItem('color-mode-gamma');
  const getPreferredColorModeGamma = () => {
    const storedColorModeGamma = getStoredColorModeGamma()
    if (storedColorModeGamma) {
      return storedColorModeGamma
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  };
  const setColorModeGamma = colorModeGamma => {
    if (colorModeGamma === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', colorModeGamma)
    }
  };
  setColorModeGamma(getPreferredColorModeGamma())
})();
`;

export const InitialColorModeGamma = () => {
  return (
    <script dangerouslySetInnerHTML={{ __html: initialColorModeGamma }} />
  )
};
