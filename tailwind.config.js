/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid', // Telling tailwind to look at the liqiud extension files in layout folder
    '.sections/*.liquid',
    '.snippets/*.liquid',
    '.templates/customers/*.liquid',
    '.templates/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

