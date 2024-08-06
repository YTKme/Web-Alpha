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

export type BootstrapBetaColorMode = 'light' | 'dark' | 'system';

interface BootstrapBetaColorModeContextType {
  colorModeBeta: BootstrapBetaColorMode
  setColorModeBeta: (colorModeBeta: BootstrapBetaColorMode) => void
};

// Context
const BootstrapBetaColorModeContext = createContext<BootstrapBetaColorModeContextType | undefined>(undefined);

// Provider
export function BootstrapBetaColorModeProvider({
  children,
}: {
  children: ReactNode,
}) {
  // Use State
  const [colorModeBeta, setColorModeBeta] = useState<BootstrapBetaColorMode>('system');

  const showColorModeBeta = (
    colorModeBeta: BootstrapBetaColorMode,
    focus: boolean = false
  ) => {
    const switcher = document.querySelector('#bd-theme');
    if (!switcher) { return; }

    const switcherText = document.querySelector('#bd-theme-text')
    const activeColorModeIcon = document.querySelector('.theme-icon-active')
    // console.debug('Active Color Mode Icon:', activeColorModeIcon);
    const buttonToActive = document.querySelector(`[data-bs-theme-value="${colorModeBeta}"]`)
    // console.debug('Button to Active:', buttonToActive);
    const svgActiveButton = buttonToActive?.querySelector('path');
    // console.debug('SVG Active Button:', svgActiveButton);

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    buttonToActive?.classList.add('active');
    buttonToActive?.setAttribute('aria-pressed', 'true')
    if (!activeColorModeIcon) { return; }
    activeColorModeIcon.innerHTML = svgActiveButton?.outerHTML ?? '';
  };

  // Use Effect
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   showColorModeBeta(colorModeBeta)
    // }

    showColorModeBeta(colorModeBeta);
  }, [colorModeBeta]);

  return (
    <BootstrapBetaColorModeContext.Provider value={{ colorModeBeta, setColorModeBeta }}>
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
