/**
 * tailwindcss Configuration
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  prefix: 'tw-',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
    },
  },
  plugins: [],
}

export default config
