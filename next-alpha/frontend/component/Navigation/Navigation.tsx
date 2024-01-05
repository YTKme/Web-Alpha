/**
 * Navigation
 */

import { useEffect } from 'react';
import Image from 'next/image';

import './Navigation.scss';

export default function Navigation({
  page,
}: {
  page: string,
}) {
  return (
    <nav className='navbar navbar-expand-md bg-body-tertiary fixed-top'>
      <div className='container-fluid'>
        <a className='navbar-brand' href="/">
          <Image className='me-2' src='/res/img/persimmon-1.svg' alt='Persimmon Logo' width={32} height={32} />
          Persimmon
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navigationCollapse' aria-controls='navbarnavigationCollapseCollapse' aria-expanded='false' aria-label='Toggle Navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navigationCollapse'>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              {page === 'Main'
                ? <a className='nav-link active' aria-current='page' href='/main'>Home</a>
                : <a className='nav-link' href='/main'>Home</a>
              }
            </li>
            <li className='nav-item'>
              {page === 'Asset'
                ? <a className='nav-link active' aria-current='page' href='/asset'>Asset</a>
                : <a className='nav-link' href='/asset'>Asset</a>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
