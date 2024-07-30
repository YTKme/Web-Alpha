/**
 * Bootstrap Alpha Layout
 */

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Context
import BootstrapProvider from '@/context/BootstrapContext';

// CSS
import { BootstrapColorModeAlphaProvider } from '@/context/BootstrapColorModeAlphaContext';
import './bootstrapalpha.scss';

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
        <BootstrapProvider>
          <BootstrapColorModeAlphaProvider>
            {children}
          </BootstrapColorModeAlphaProvider>
        </BootstrapProvider>
      </body>
    </html>
  )
}
