/**
 * Navigation
 * This component implements the navigation.
 */

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import viteLogo from '/res/img/vite.svg'
import { ThemeToggle } from './ThemeToggle'


export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <ThemeToggle />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
