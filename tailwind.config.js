/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#023c45',
        accent: '#F9B20A',
        primaryBackground: '#D9D9D9',
      },
    },
  },
  plugins: [],
}