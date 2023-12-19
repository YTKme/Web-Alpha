/**
 * Root Layout
 */

import type { Metadata } from 'next'
import { Viewport } from 'next'

// CSS
import './global.css';

export const metadata: Metadata = {
  title: 'StyleX Alpha',
  description: 'StyleX Alpha',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
      </head>
      <body>
          {children}
      </body>
    </html>
  )
}
