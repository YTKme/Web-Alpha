/**
 * Root Page
 */

import type { Metadata } from 'next'

import Login from "@/component/Login/Login";

export const metadata: Metadata = {
  title: 'Persimmon',
  description: 'Persimmon',
}

export default function Page() {
  return (
    <Login />
  );
}
