/**
 * React Select Text Alpha
 */

'use client';

import { useReactSelectAlpha } from "@/context/ReactSelectAlphaContext";

export default function ReactSelectTextAlpha() {
  // Context
  const { character } = useReactSelectAlpha();

  return (
    <div className='mt-3'>
      <p>Selected Character: {character?.name}</p>
    </div>
  );
}
