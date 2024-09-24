/**
 * Bootstrap Alpha Layout
 */

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Context
import { BootstrapAlphaColorModeProvider } from '@/context/BootstrapAlphaColorModeContext';
import BootstrapAlphaProvider from '@/context/BootstrapAlphaContext';

// Component
import BootstrapAlphaColorMode from '@/component/BootstrapAlphaColorMode';

// CSS
import './bootstrap-alpha.scss';

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
        <BootstrapAlphaProvider>
          <BootstrapAlphaColorModeProvider>
            {children}
            <BootstrapAlphaColorMode />
          </BootstrapAlphaColorModeProvider>
        </BootstrapAlphaProvider>
      </body>
    </html>
  )
}
