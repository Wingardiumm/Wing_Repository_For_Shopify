/** @type {import('tailwindcss').Config} */
module.exports = {
  mod: 'jit', //JIT モード活性化
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      height:{
        '94': '22rem'
      }
    },
  },
  plugins: [],
}

