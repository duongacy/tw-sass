const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  // darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extends: {
      colors: {
        primary: colors.red,
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: [
          'Lexend',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      neutral: colors.stone,
      secondary: colors.slate,
      primary: colors.pink,
      info: '',
      success: '',
      error: '',
      warning: '',
      inherit: 'inherit',

      'bgc-0': 'hsl(var(--color-bgc-0) / <alpha-value>)',
      'bgc-50': 'hsl(var(--color-bgc-50) / <alpha-value>)',
      'bgc-100': 'hsl(var(--color-bgc-100) / <alpha-value>)',
      'bgc-200': 'hsl(var(--color-bgc-200) / <alpha-value>)',
      'bgc-300': 'hsl(var(--color-bgc-300) / <alpha-value>)',
      'bgc-400': 'hsl(var(--color-bgc-400) / <alpha-value>)',
      'bgc-500': 'hsl(var(--color-bgc-500) / <alpha-value>)',
      'bgc-600': 'hsl(var(--color-bgc-600) / <alpha-value>)',
      'bgc-700': 'hsl(var(--color-bgc-700) / <alpha-value>)',
      'bgc-800': 'hsl(var(--color-bgc-800) / <alpha-value>)',
      'bgc-900': 'hsl(var(--color-bgc-900) / <alpha-value>)',
      'bgc-950': 'hsl(var(--color-bgc-950) / <alpha-value>)',

      'accent-0': 'hsl(var(--color-accent-0) / <alpha-value>)',
      'accent-50': 'hsl(var(--color-accent-50) / <alpha-value>)',
      'accent-100': 'hsl(var(--color-accent-100) / <alpha-value>)',
      'accent-200': 'hsl(var(--color-accent-200) / <alpha-value>)',
      'accent-300': 'hsl(var(--color-accent-300) / <alpha-value>)',
      'accent-400': 'hsl(var(--color-accent-400) / <alpha-value>)',
      'accent-500': 'hsl(var(--color-accent-500) / <alpha-value>)',
      'accent-600': 'hsl(var(--color-accent-600) / <alpha-value>)',
      'accent-700': 'hsl(var(--color-accent-700) / <alpha-value>)',
      'accent-800': 'hsl(var(--color-accent-800) / <alpha-value>)',
      'accent-900': 'hsl(var(--color-accent-900) / <alpha-value>)',
      'accent-950': 'hsl(var(--color-accent-950) / <alpha-value>)',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
