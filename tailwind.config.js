/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0A192F',
        'soft-gray': '#F5F7FA',
        'accent-blue': '#1E3A8A',
      },
    },
  },
  plugins: [],
}