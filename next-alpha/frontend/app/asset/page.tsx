/**
 * Asset Page
 */

import type { Metadata } from 'next'

import Navigation from "@/component/Navigation/Navigation"

const CURRENT_PAGE = 'Asset'

export const metadata: Metadata = {
  title: `Persimmon | ${CURRENT_PAGE}`,
  description: `Persimmon ${CURRENT_PAGE}`,
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
            <h1>Asset Page</h1>
          </div>
        </div>
      </div>
    </>
  );
}
