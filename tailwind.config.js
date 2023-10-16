/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#202020',
        secondary: '#fdf1d9',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/hero-pattern.png')",
        'about-bg': "url('./src/assets/img/about-sec-bg.png')",
      },
    },
  },
  plugins: [],
}
