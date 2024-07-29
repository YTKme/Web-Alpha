/**
 * Bootstrap Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

interface BootstrapContextType {
  bootstrap: any
}

const BootstrapContext = createContext<BootstrapContextType | undefined>(undefined);

export default function BootstrapProvider({
  children,
}: {
  children: ReactNode,
}) {
  // State
  const [bootstrap, setBootstrap] = useState<any>(undefined);

  // Effect
  useEffect(() => {
    if (!bootstrap) {
      const js = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      setBootstrap(js);
    }
  }, [])

  return (
    <BootstrapContext.Provider value={{ bootstrap }}>
      {children}
    </BootstrapContext.Provider>
  );
}

export const useBootstrap = (): BootstrapContextType => {
  const context = useContext(BootstrapContext)
  if (!context) {
    throw new Error('useBootstrap must be used within a BootstrapProvider')
  }
  return context;
}
