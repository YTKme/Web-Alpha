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

export type BootstrapGammaColorMode = 'light' | 'dark' | 'system';

interface BootstrapGammaColorModeContextType {
  colorModeGamma: BootstrapGammaColorMode
  setColorModeGamma: (colorModeGamma: BootstrapGammaColorMode) => void
};

// Context
const BootstrapGammaColorModeContext = createContext<BootstrapGammaColorModeContextType | undefined>(undefined);

// Provider
export function BootstrapGammaColorModeProvider({
  children,
}: {
  children: ReactNode,
}) {
  // Use State
  const [colorModeGamma, setColorModeGamma] = useState<BootstrapGammaColorMode>('system');

  const initializeColorMode = () => {
    const getStoredColorModeGamma = () => localStorage.getItem('color-mode-gamma');

    const getPreferredColorModeGamma = () => {
      const storedColorModeGamma = getStoredColorModeGamma()
      if (storedColorModeGamma) { return storedColorModeGamma; }

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setColorMode = (colorModeGamma: string) => {
      if (colorModeGamma === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', colorModeGamma)
      }
    }

    setColorMode(getPreferredColorModeGamma())
  }

  const setStoredColorModeGamma = (colorModeGamma: string) => localStorage.setItem('color-mode-gamma', colorModeGamma)

  const setColorMode = (colorModeGamma: string) => {
    if (colorModeGamma === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', colorModeGamma)
    }
  }

  const showColorModeGamma = (
    colorModeGamma: BootstrapGammaColorMode,
    focus: boolean = false
  ) => {
    const switcher = document.querySelector('#bd-theme') as HTMLInputElement;
    if (!switcher) { return; }

    const switcherText = document.querySelector('#bd-theme-text')
    const activeColorModeIcon = document.querySelector('.theme-icon-active')
    // console.debug('Active Color Mode Icon:', activeColorModeIcon);
    const buttonToActive = document.querySelector(`[data-bs-theme-value="${colorModeGamma}"]`)
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
    //   showColorModeGamma(colorModeGamma)
    // }

    setStoredColorModeGamma(colorModeGamma);
    setColorMode(colorModeGamma);
    showColorModeGamma(colorModeGamma, true);
  }, [colorModeGamma]);

  return (
    <BootstrapGammaColorModeContext.Provider value={{ colorModeGamma, setColorModeGamma }}>
      <script dangerouslySetInnerHTML={{ __html: `(${initializeColorMode})()` }} />
      {children}
    </BootstrapGammaColorModeContext.Provider>
  );
};

export const useBootstrapGammaColorMode = (): BootstrapGammaColorModeContextType => {
  const context = useContext(BootstrapGammaColorModeContext)
  if (!context) {
    throw new Error('useBootstrapGammaColorMode must be used within a BootstrapGammaColorModeProvider')
  }
  return context;
};
