import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        amber: {
          500: '#f59e0b',
        },
        highContrastText: {
          DEFAULT: '#ffffff',
        },
      },
    },
  },
  plugins: [forms],
} satisfies Config
