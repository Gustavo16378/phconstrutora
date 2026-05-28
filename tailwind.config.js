/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          ph: '#1565C0',
          dark: '#0E4A93',
        },
        gold: '#C9A84C',
        ink: {
          DEFAULT: '#111111',
          2: '#555555',
        },
        off: '#F4F6F9',
        line: '#E6E9EE',
        'ph-grey': '#AAAAAA',
        footer: '#0D0D0D',
      },
    },
  },
  plugins: [],
}
