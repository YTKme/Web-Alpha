/**
 * Bootstrap Alpha Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

interface BootstrapAlphaContextType {
  bootstrapAlpha: any
}

const BootstrapAlphaContext = createContext<BootstrapAlphaContextType | undefined>(undefined);

export default function BootstrapAlphaProvider({
  children,
}: {
  children: ReactNode,
}) {
  // State
  const [bootstrapAlpha, setBootstrapAlpha] = useState<any>(undefined);

  // Effect
  useEffect(() => {
    if (!bootstrapAlpha) {
      const js = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      setBootstrapAlpha(js);
    }
  }, [])

  return (
    <BootstrapAlphaContext.Provider value={{ bootstrapAlpha }}>
      {children}
    </BootstrapAlphaContext.Provider>
  );
}

export const useBootstrapAlpha = (): BootstrapAlphaContextType => {
  const context = useContext(BootstrapAlphaContext)
  if (!context) {
    throw new Error('useBootstrapAlpha must be used within a BootstrapAlphaProvider')
  }
  return context;
}
