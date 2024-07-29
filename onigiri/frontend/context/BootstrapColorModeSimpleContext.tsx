/**
 * Bootstrap Color Mode Simple Context
 */

'use client';

import {
  createContext,
  ReactNode
} from "react";

type BootstrapColorModeSimple = 'light' | 'dark' | 'auto';

interface BootstrapColorModeSimpleContextType {
  colorMode: BootstrapColorModeSimple
  setColorMode: (colorMode: BootstrapColorModeSimple) => void
}

const BootstrapColorModeSimpleContext = createContext<BootstrapColorModeSimpleContextType | undefined>(undefined);

export function BootstrapColorModeSimpleProvider({
  children,
}: {
  children: ReactNode,
}) {

}
