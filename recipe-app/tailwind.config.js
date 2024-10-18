/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include JS, JSX, TS, and TSX files in the src folder
    "./public/index.html" // Include index.html if Tailwind classes are used there
  ],
  theme: {
    extend: {
      // You can extend your theme here if needed
    },
  },
  plugins: [
    // You can add Tailwind plugins here if needed
  ],
}
