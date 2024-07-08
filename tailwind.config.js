/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./PortFolio2/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-size-adjust': {
          'text-size-adjust': '100%',
          '-webkit-text-size-adjust': '100%',
          '-moz-text-size-adjust': '100%',
          '-ms-text-size-adjust': '100%',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

