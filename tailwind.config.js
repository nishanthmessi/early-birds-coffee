/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#202020',
        secondary: '#fdf1d9',
        alter: '#C5D6D1',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/hero-pattern.png')",
        'about-bg': "url('./src/assets/img/about-sec-bg.png')",
        'suppy-banner': "url('./src/assets/img/supply-banner.png')",
        'button-bg': "url('./src/assets/svg/button-bg.svg')",
      },
    },
  },
  plugins: [],
}
