/**
 * Bootstrap Beta Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

// JavaScript
// import '../public/res/js/color-modes.js';

interface BootstrapBetaContextType {
  bootstrap: any
}

const BootstrapBetaContext = createContext<BootstrapBetaContextType | undefined>(undefined);

export default function BootstrapBetaProvider({
  children,
}: {
  children: ReactNode,
}) {
  // State
  const [bootstrapBeta, setBootstrapBeta] = useState<any>(undefined);

  // Effect
  useEffect(() => {
    if (!bootstrapBeta) {
      const js = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      setBootstrapBeta(js);
    }
  }, [])

  return (
    <BootstrapBetaContext.Provider value={{ bootstrap: bootstrapBeta }}>
      {children}
    </BootstrapBetaContext.Provider>
  );
}

export const useBootstrapBeta = (): BootstrapBetaContextType => {
  const context = useContext(BootstrapBetaContext)
  if (!context) {
    throw new Error('useBootstrapBeta must be used within a BootstrapBetaProvider')
  }
  return context;
}
