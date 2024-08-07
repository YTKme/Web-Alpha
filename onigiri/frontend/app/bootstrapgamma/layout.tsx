/**
 * Bootstrap Gamma Layout
 */

'use client';

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Component
import BootstrapGammaColorMode from '@/component/BootstrapGammaColorMode';

// Context
import BootstrapGammaProvider from '@/context/BootstrapGammaContext';

// CSS
import './bootstrap-gamma.scss';

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
        <script src='res/js/bootstrap-gamma-color-mode.js' />
        <BootstrapGammaProvider>
          {children}
          <BootstrapGammaColorMode />
        </BootstrapGammaProvider>
      </body>
    </html>
  )
}
