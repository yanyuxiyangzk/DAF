import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1f6feb',
          50: '#e9f1ff',
          100: '#d6e6ff',
          200: '#abc7ff',
          300: '#7fa7ff',
          400: '#5488ff',
          500: '#2a69ff',
          600: '#1f6feb',
          700: '#1b5ec8',
          800: '#164da5',
          900: '#103c82'
        }
      }
    }
  },
  plugins: []
} satisfies Config