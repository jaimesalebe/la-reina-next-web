/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkblue: {
          100: "#0A1623",
          200: "#07111E",
          300: "#000814"
        },
        yellow: "#FFED00",
        white: "#FEFCEE"
      }
    },
  },
  plugins: [],
}
