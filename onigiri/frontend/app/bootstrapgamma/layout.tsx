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
import { BootstrapGammaColorModeProvider } from '@/context/BootstrapGammaColorModeContext';
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
        <BootstrapGammaProvider>
          <BootstrapGammaColorModeProvider>
            {children}
            <BootstrapGammaColorMode />
          </BootstrapGammaColorModeProvider>
        </BootstrapGammaProvider>
      </body>
    </html>
  )
}
