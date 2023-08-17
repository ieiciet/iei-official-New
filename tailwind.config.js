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
        tertiary: "#202020",
      },
      screens:{
        'xs': '550px',
      }
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Roboto Slab', 'serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'mansalva': ['Mansalva', 'cursive'],
      'hiMelody': ['Hi Melody', 'cursive'],
    }
  },
  plugins: [],
}

