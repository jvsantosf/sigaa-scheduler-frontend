/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#16161a",
        }
      },
      fontFamily: {
        sans: ['ABC Ginto Nord Unlicensed Trial', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}