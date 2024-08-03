/**
 * Bootstrap Gamma Layout
 */

'use client';

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Context

import BootstrapGammaProvider from '@/context/BootstrapGammaContext';

// CSS
import './bootstrapgamma.scss';

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
    <html lang='en' data-bs-theme='auto'>
      <body>
        <script src='res/js/color-modes.js' />
        <BootstrapGammaProvider>
            {children}
        </BootstrapGammaProvider>
      </body>
    </html>
  )
}
