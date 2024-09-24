/**
 * React Select Alpha Context
 */

import {
  createContext,
  ReactNode,
  useContext,
  useState
} from "react";

export interface ReactSelectAlphaType {
  value: string;
  label: string;
  name: string;
  vision: string;
  weapon: string;
  nation: string;
  rarity: number;
};

interface ReactSelectAlphaContextType {
  character: ReactSelectAlphaType | undefined;
  setCharacter: (character: ReactSelectAlphaType) => void;
};

// Context
export const ReactSelectAlphaContext =
  createContext<ReactSelectAlphaContextType>(
    {} as ReactSelectAlphaContextType
  );

// Provider
export function ReactSelectAlphaProvider({
  children,
}: {
  children: ReactNode,
}) {
  const [characterState, setCharacterState] = useState<ReactSelectAlphaType>();

  return (
    <ReactSelectAlphaContext.Provider value={{ character: characterState, setCharacter: setCharacterState }}>
      {children}
    </ReactSelectAlphaContext.Provider>
  );
}

// Hook
export const useReactSelectAlpha = (): ReactSelectAlphaContextType => {
  const context = useContext(ReactSelectAlphaContext);

  if (!context) {
    throw new Error("useReactSelectAlpha must be used within a ReactSelectAlphaProvider");
  }
  return context;
}
