/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.(md|html)", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        red: {
          100: '#fcc7c7',
          200: '#ee9f9f',
          300: '#df7777',
          400: '#d14f4f',
          500: '#c22727',
          DEFAULT: '#c22727',
          600: '#a72020',
          700: '#8b1919',
          800: '#701212',
          900: '#540b0b',
        },
        gray: {
          100: '#e6ebee',
          200: '#c4c9cc',
          300: '#a1a6a9',
          400: '#7f8487',
          500: '#5c6164',
          DEFAULT: '#5c6164',
          600: '#4a4e50',
          700: '#383b3c',
          800: '#252728',
          900: '#131414',
        },
        tip: {
          100: '#f7edb9',
          100: '#f4e594',
          100: '#f1dd6f',
          100: '#eed54a',
          100: '#ebcd25',
          DEFAULT: '#ebcd25',
          100: '#c7ad1d',
          100: '#a38d16',
          100: '#7e6d0e',
          100: '#5a4d06',
        }
      }
    },
  },
  plugins: [],
}

