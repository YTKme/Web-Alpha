/**
 * Main Page
 */

import type { Metadata } from 'next'

import Navigation from "@/component/Navigation/Navigation"

const CURRENT_PAGE = 'Main'

export const metadata: Metadata = {
  title: 'Persimmon | Main',
  description: 'Persimmon Main',
}

export default function Page() {
  return (
    <>
      <div className='d-flex w-100 h-100'>
        <div className='w-100'>
          <header className=''>
            <Navigation page={CURRENT_PAGE} />
          </header>
          <div className='container-fluid'>
            <h1>Main Page</h1>
          </div>
        </div>
      </div>
    </>
  );
}
