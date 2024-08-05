/**
 * Bootstrap Beta Layout
 */

'use client';

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Context
import BootstrapBetaProvider from '@/context/BootstrapBetaContext';

// CSS
import './bootstrapbeta.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function BootstrapLayout({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <BootstrapBetaProvider>
          {children}
        </BootstrapBetaProvider>
      </body>
    </html>
  )
}
