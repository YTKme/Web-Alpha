/**
 * Bootstrap Gamma Page
 */

import type { Metadata } from 'next';

// Component

export const metadata: Metadata = {
  title: '🍙 Onigiri 🍙 Bootstrap 🍙 Gamma 🍙',
  description: '🍙 Onigiri 🍙 Bootstrap Gamma 🍙',
}

export default function Page() {
  return (
    <div className='d-flex w-100 h-100'>
      <div className='w-100'>
        <header>
          <h1>Bootstrap Gamma</h1>
        </header>
        <main className='text-center'>
          <p>Bootstrap Gamma</p>
        </main>
      </div>
    </div>
  );
}
