const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { mauve, violet } = require('@radix-ui/colors');

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
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        slideUp: {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: { height: 0 },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: {
            opacity: 0,
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
      },
      animation: {
        slideDown:
          'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp:
          'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
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
      ...mauve,
      ...violet,

      'bgc-1': 'hsl(var(--color-bgc-1) / <alpha-value>)',
      'bgc-2': 'hsl(var(--color-bgc-2) / <alpha-value>)',

      'accent-1':
        'hsl(var(--color-accent-1) / <alpha-value>)',
      'accent-2':
        'hsl(var(--color-accent-2) / <alpha-value>)',
      'accent-3':
        'hsl(var(--color-accent-3) / <alpha-value>)',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
