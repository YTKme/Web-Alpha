/**
 * Bootstrap Delta Context
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

interface BootstrapDeltaContextType {
  bootstrapDelta: any
}

const BootstrapDeltaContext = createContext<BootstrapDeltaContextType | undefined>(undefined);

export default function BootstrapDeltaProvider({
  children,
}: {
  children: ReactNode,
}) {
  // State
  const [bootstrapDelta, setBootstrapDelta] = useState<any>(undefined);

  // Effect
  useEffect(() => {
    if (!bootstrapDelta) {
      const js = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      setBootstrapDelta(js);
    }
  }, [])

  return (
    <BootstrapDeltaContext.Provider value={{ bootstrapDelta: setBootstrapDelta }}>
      {children}
    </BootstrapDeltaContext.Provider>
  );
}

export const useBootstrapDelta = (): BootstrapDeltaContextType => {
  const context = useContext(BootstrapDeltaContext)
  if (!context) {
    throw new Error('useBootstrapDelta must be used within a BootstrapDeltaProvider')
  }
  return context;
}
