/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      'Header' : ['DM Serif Display' , 'cursive']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./harimau-putih.jpeg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

