/**
 * Bootstrap Gamma Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

interface BootstrapGammaContextType {
  bootstrapGamma: any
}

const BootstrapGammaContext = createContext<BootstrapGammaContextType | undefined>(undefined);

export default function BootstrapGammaProvider({
  children,
}: {
  children: ReactNode,
}) {
  // State
  const [bootstrapGamma, setBootstrapGamma] = useState<any>(undefined);

  // Effect
  useEffect(() => {
    if (!bootstrapGamma) {
      const js = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      setBootstrapGamma(js);
    }
  }, [])

  return (
    <BootstrapGammaContext.Provider value={{ bootstrapGamma }}>
      {children}
    </BootstrapGammaContext.Provider>
  );
}

export const useBootstrapGamma = (): BootstrapGammaContextType => {
  const context = useContext(BootstrapGammaContext)
  if (!context) {
    throw new Error('useBootstrapGamma must be used within a BootstrapGammaProvider')
  }
  return context;
}
