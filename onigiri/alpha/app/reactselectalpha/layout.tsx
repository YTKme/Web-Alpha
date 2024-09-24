/**
 * Bootstrap Alpha Layout
 */

'use client';

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Context

// Component

// CSS
import { ReactSelectAlphaProvider } from '@/context/ReactSelectAlphaContext';
import './react-select-alpha.scss';

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
    <html lang='en' data-bs-theme='dark'>
      <body>
        <ReactSelectAlphaProvider>
          {children}
        </ReactSelectAlphaProvider>
      </body>
    </html>
  )
}
