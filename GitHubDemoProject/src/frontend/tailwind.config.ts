import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        /* Universe 2025 — GitHub Copilot Dev Days */
        'u-black': '#000000',
        'u-white': '#FFFFFF',
        'u-muted': '#E4EBE5',
        'u-surface': '#232824',
        'u-mint': '#BEFFD0',
        'u-green-md': '#8BF1A6',
        'u-green': '#5EEC83',
        'u-green-deep': '#087827',
        'u-lime': '#DBFF95',
        'u-lime-bright': '#D3FA36',
        'u-link': '#EEF6FC',
        'u-teal': '#56CCC4',
        'u-code': '#24292F',
        highContrastText: {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        heading: ['Aptos', 'Arial', 'sans-serif'],
        body: ['Aptos', 'Arial', 'sans-serif'],
        code: ['Consolas', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [forms],
} satisfies Config
