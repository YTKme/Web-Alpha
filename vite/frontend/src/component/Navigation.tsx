/**
 * Navigation
 * This component implements the navigation.
 */

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import viteLogo from '/res/img/vite.svg'


export default function Navigation() {
  return (
    <Disclosure as="nav" className="tw-bg-gray-400 dark:tw-bg-gray-800">
      {({ open }) => (
        <>
          <div className="tw-mx-auto tw-max-w-7xl tw-px-2 sm:tw-px-6 lg:tw-px-8">
            <div className="tw-relative tw-flex tw-h-16 tw-items-center tw-justify-between">
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
