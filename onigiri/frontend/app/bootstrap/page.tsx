/**
 * Bootstrap Page
 */

import type { Metadata } from 'next'

import { ColorModeBootstrap } from '@/component/ModeToggle/ColorModeBootstrap'

export const metadata: Metadata = {
  title: '🍙 Onigiri 🍙 Bootstrap 🍙',
  description: '🍙 Onigiri 🍙 Bootstrap 🍙',
}

export default function Page() {
  return (
    <div className='d-flex w-100 h-100'>
      <div className='w-100'>
        <ColorModeBootstrap />
        <header>
          <h1>Bootstrap</h1>
        </header>
        <main className='text-center'>
        </main>
      </div>
    </div>
  );
}
