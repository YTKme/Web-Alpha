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
  const [bootstrapAlphaState, setBootstrapAlphaState] = useState<any>(undefined);

  // Effect
  useEffect(() => {
    if (!bootstrapAlphaState) {
      const js = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      setBootstrapAlphaState(js);
    }
  }, [])

  return (
    <BootstrapAlphaContext.Provider value={{ bootstrapAlpha: bootstrapAlphaState }}>
      {children}
    </BootstrapAlphaContext.Provider>
  );
}

export const useBootstrapAlpha = (): BootstrapAlphaContextType => {
  const context = useContext(BootstrapAlphaContext)
  if (!context) {
    throw new Error('useBootstrapAlpha must be used within a BootstrapAlphaContext')
  }
  return context;
}
