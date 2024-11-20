/**
 * Color Mode Bootstrap
 */

'use client';

import { useEffect, useState } from "react"

import Image from 'next/image';

import CircleHalf from 'bootstrap-icons/icons/circle-half.svg';
import SunFill from 'bootstrap-icons/icons/sun-fill.svg';
import MoonFill from 'bootstrap-icons/icons/moon-fill.svg';
import Check2 from 'bootstrap-icons/icons/check2.svg';


export function ColorModeBootstrap() {
  // State
  // const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // Effect
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, [])

  return (
    <>
      <div className='dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle'>
        {/* Toggle */}
        <button
          id='bd-theme'
          className='btn dropdown-toggle py-2 d-flex align-items-center'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          aria-label='Toggle Mode (Auto)'
        >
          <Image className='bi theme-icon-active my-1' src={CircleHalf} alt='Toggle Mode (Auto)' />
          <span id='bd-theme-text' className='visually-hidden'>Toggle Theme</span>
        </button>
        {/* Mode */}
        <ul className='dropdown-menu dropdown-menu-end shadow' aria-labelledby='bd-theme-text'>
          <li>
            <button className='dropdown-item d-flex align-items-center' type='button' data-bs-theme-value='light' aria-pressed='false'>
              <Image className='bi me-2' src={SunFill} alt='Light' />
              Light
              <Image className='bi ms-auto d-none' src={Check2} alt='Light Check' />
            </button>
          </li>
          <li>
            <button className='dropdown-item d-flex align-items-center' type='button' data-bs-theme-value='dark' aria-pressed='false'>
              <Image className='bi me-2' src={MoonFill} alt='Dark' />
              Dark
              <Image className='bi ms-auto d-none' src={Check2} alt='Dark Check' />
            </button>
          </li>
          <li>
            <button className='dropdown-item d-flex align-items-center' type='button' data-bs-theme-value='auto' aria-pressed='true'>
              <Image className='bi me-2' src={CircleHalf} alt='Auto' />
              Auto
              <Image className='bi ms-auto d-none' src={Check2} alt='Auto Check' />
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
