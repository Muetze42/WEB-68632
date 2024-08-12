const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.vue'],
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        accent: colors.blue,
        slate: {
          750: '#182235'
        },
        secondary: { ...colors.slate, 750: '#182235' },
        success: colors.green,
        info: colors.blue,
        warning: colors.yellow,
        danger: colors.red,
        message: colors.neutral
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base'
    }),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ]
}
