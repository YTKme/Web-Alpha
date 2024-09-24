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

export type BootstrapAlphaColorMode = 'light' | 'dark' | 'system';

interface BootstrapAlphaColorModeContextType {
  colorModeAlpha: BootstrapAlphaColorMode
  setColorModeAlpha: (colorModeAlpha: BootstrapAlphaColorMode) => void
};

// Context
const BootstrapAlphaColorModeContext = createContext<BootstrapAlphaColorModeContextType | undefined>(undefined);

// Provider
export function BootstrapAlphaColorModeProvider({
  children,
}: {
  children: ReactNode,
}) {
  // Use State
  const [colorModeAlphaState, setColorModeAlphaState] = useState<BootstrapAlphaColorMode>('system');

  const initializeColorMode = () => {
    const getStoredColorModeAlpha = () => localStorage.getItem('color-mode-alpha');

    const getPreferredColorModeAlpha = () => {
      const storedColorModeAlpha = getStoredColorModeAlpha()
      if (storedColorModeAlpha) { return storedColorModeAlpha; }

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setColorMode = (colorModeAlpha: string) => {
      if (colorModeAlpha === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', colorModeAlpha)
      }
    }

    setColorMode(getPreferredColorModeAlpha())
  }

  const setStoredColorModeAlpha = (colorModeAlpha: string) => localStorage.setItem('color-mode-alpha', colorModeAlpha)

  const setColorMode = (colorModeAlpha: string) => {
    if (colorModeAlpha === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', colorModeAlpha)
    }
  }

  const showColorModeAlpha = (
    colorModeAlpha: BootstrapAlphaColorMode,
    focus: boolean = false
  ) => {
    const switcher = document.querySelector('#bd-theme') as HTMLInputElement;
    if (!switcher) { return; }

    const switcherText = document.querySelector('#bd-theme-text')
    const activeColorModeIcon = document.querySelector('.theme-icon-active')
    // console.debug('Active Color Mode Icon:', activeColorModeIcon);
    const buttonToActive = document.querySelector(`[data-bs-theme-value="${colorModeAlpha}"]`)
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

    if (focus) { switcher.focus(); }
  };

  // Use Effect
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   showColorModeAlpha(colorModeAlpha)
    // }

    setStoredColorModeAlpha(colorModeAlphaState);
    setColorMode(colorModeAlphaState);
    showColorModeAlpha(colorModeAlphaState, true);
  }, [colorModeAlphaState]);

  return (
    <BootstrapAlphaColorModeContext.Provider value={{ colorModeAlpha: colorModeAlphaState, setColorModeAlpha: setColorModeAlphaState }}>
      <script dangerouslySetInnerHTML={{ __html: `(${initializeColorMode})()` }} />
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
