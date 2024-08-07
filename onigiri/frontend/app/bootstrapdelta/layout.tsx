/**
 * Bootstrap Delta Layout
 */

'use client';

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Context
import BootstrapDeltaProvider from '@/context/BootstrapDeltaContext';

// CSS
import './bootstrapdelta.scss';

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
        <script src='res/js/bootstrap-color-mode-delta.js' />
        <BootstrapDeltaProvider>
          {children}
        </BootstrapDeltaProvider>
      </body>
    </html>
  )
}
