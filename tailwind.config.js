/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001010',
        secondary: "#aaa6c3",
        tertiary: "#181624",
      },
      screens:{
        'xs': '550px',
      }
    }
  },
  plugins: [],
}

