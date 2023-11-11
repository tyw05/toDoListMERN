/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'bam': ['Baloo Tamma 2']
    },
    extend: {},
  },
  variants: {
    fill: ['hover', 'focus']
  },
  plugins: [],
}

