/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Reference lib only
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'primary': '#343434',
        'secondary': '#E9EBF8',
        'success': '#58B09C',
        'danger': '#F45866',
        'warning': '#F7EF99',
        'info': '#4A60F0'
      },
      spacing: {
        'xxs': '10px',
        'xs': '12px',
        'sm': '14px',
        'md': '18px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'xxxl': '60px'
      },
      fontFamily: {
        sans: ['Roboto Flex', 'sans-serif'],
      },
      fontVariations: {
        thin: { 'font-variation-settings': "'wght' 300" },
        normal: { 'font-variation-settings': "'wght' 400" },
        medium: { 'font-variation-settings': "'wght' 500" },
        semibold: { 'font-variation-settings': "'wght' 600" },
        bold: { 'font-variation-settings': "'wght' 700" },
        extrabold: { 'font-variation-settings': "'wght' 800" },
      },
    },
    fontSize: {
      xxs: ['8px', '14px'],
      xs: ['10px', '16px'],
      sm: ['12px', '18px'],
      base: ['16px', '24px'],
      md: ['20px', '28px'],
      lg: ['24px', '32px'],
      xl: ['32px', '40px'],
      xxl: ['48px', '60px'],
      xxxl: ['60px', '72px']
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      Object.entries(theme('fontVariations')).forEach(([key, value]) => {
        newUtilities[`.font-${key}`] = value;
      });
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

