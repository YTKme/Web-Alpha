/**
 * Provider Page
 */

import type { Metadata } from 'next'

import { ThemeProvider } from '@/context/ThemeContext';
import { ModeToggleThemeProvider } from '@/component/ModeToggle/ModeToggleThemeProvider';

// Style
import './themeprovider.css';

export const metadata: Metadata = {
  title: '🍙 Onigiri 🍙 Theme Provider 🍙',
  description: '🍙 Onigiri 🍙 Theme Provider 🍙',
}

export default function Page() {
  return (
    <ThemeProvider>
      <div className='d-flex w-100 h-100'>
        <div className='w-100'>
          <header>
            <h1>Theme Provider</h1>
          </header>
          <main className='text-center'>
            <ModeToggleThemeProvider />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
