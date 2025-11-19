/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'noir-profond': '#000000',
        'blanc-pur': '#FFFFFF',
        'gris-neutre-elegant': '#A0A0A0',
        'gris-anthracite': '#1A1A1A',
        'or-doux': '#D4C68A',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'], // Titles, subtitles, text, numbers / UI
      },
    },
  },
  plugins: [],
}

