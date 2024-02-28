/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    future: {
      hoverOnlyWhenSupported: true,
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        support: { raw: '(hover: hover)' }, // check if hover is supported on the device
      },
    },
  },
  plugins: [],
}

