/**
 * Bootstrap Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface BootstrapContextType {
  bootstrap: any;
}

const BootstrapContext = createContext<BootstrapContextType | undefined>(undefined);

export default function BootstrapProvider({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <BootstrapContext.Provider value={{ bootstrap: undefined }}>
      {children}
    </BootstrapContext.Provider>
  );
}

export function useBootstrap(): BootstrapContextType {
  const context = useContext(BootstrapContext);
  if (!context) {
    throw new Error("useBootstrap must be used within a BootstrapProvider");
  }
  return context;
}
