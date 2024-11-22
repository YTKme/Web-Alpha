/**
 * Tailwind Context
 */

'use client';

import {
  createContext,
  ReactNode,
  useContext,
} from "react";

import './Tailwind.scss';

interface TailwindContextType {
  tailwind: any;
};

const TailwindContext = createContext<TailwindContextType | undefined>(undefined);

export default function TailwindProvider({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <TailwindContext.Provider value={{ tailwind: undefined }}>
      {children}
    </TailwindContext.Provider>
  );
};

export const useTailwind = (): TailwindContextType => {
  const context = useContext(TailwindContext);
  if (!context) {
    throw new Error('useTailwind must be used within a TailwindProvider');
  }
  return context;
};
