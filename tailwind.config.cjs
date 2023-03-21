const plugin = require('tailwindcss/plugin')

/** Base application colors */
const appColors = {
  primary: '#160B14',
  secondary: '#FFFBFB',
  highlight1: 'rgba(255, 255, 255, 0.07)',
  highlight2: 'rgba(255, 255, 255, 0.15)',
  positive: '#70FF00',
  negative: '#FF0000',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      ...appColors
    },
    extend: {
      spacing: {
        'input': '.25rem 1rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'max-width': 'none',
            'color': theme('colors.secondary'),
            '--tw-prose-headings': theme('colors.secondary'),
            '--tw-prose-links': theme('colors.secondary'),
            '--tw-prose-bold': theme('colors.secondary'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        'html': { 'background': theme('colors.primary') },
        'input': {
          'color': theme('colors.secondary'),
          'background': theme('colors.highlight2'),
          'border-radius': theme('borderRadius.full'),
          'padding': theme('spacing.input'),
          'backdrop-filter': 'blur(65px)',
        },
        'select': { 
          'color': theme('colors.secondary'),
          'background': 'none',
        },
        'option': {
          'color': theme('colors.primary'),
        },
      }),
      addComponents({
        '.card': {
          'color': theme('colors.dark'),
          'background': theme('colors.highlight1'),
          'border-radius': theme('borderRadius.2xl'),
          'backdrop-filter': 'blur(65px)',
        }
      }),
      addUtilities({
        '.gradient-mobile': {
          'background': `radial-gradient(98.21% 20.97% at 8.72% 24.11%, rgba(255,0, 0, 0.2) 30.21%, rgba(0, 0, 0, 0) 100%),
          radial-gradient(84.12% 84.12% at 90.64% 15.88%, rgba(51, 119, 253, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
          radial-gradient(149.1% 31.84% at -16.79% 51.72%, rgba(211, 111, 195, 0.2) 0%, rgba(191, 58, 154, 0) 100%),
          #160B14;`,
        },
        '.gradient-desktop': {
          'background': `radial-gradient(74.69% 51.52% at 80.62% 35.06%, rgba(255, 0, 0, 0.2) 15.1%, rgba(0, 0, 0, 0) 100%),
          radial-gradient(84.12% 84.12% at 90.64% 15.88%, rgba(51, 119, 253, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
          radial-gradient(149.1% 31.84% at -16.79% 51.72%, rgba(211, 111, 195, 0.2) 0%, rgba(191, 58, 154, 0) 100%),
          #160B14;`,
        },
      })
    }),
  ],
}
