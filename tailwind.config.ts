/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8c3f23',      // Navbar and buttons
        secondary: '#d9b391',    // Cards Background and buttons
        interactive: '#a6592d',  // Hover
        text: '#2a2a2a',         // Font color
        background: '#ffffff',   // General background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
