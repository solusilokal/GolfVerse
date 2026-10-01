/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./golfverse_landing_page.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        golf: {
          dark: '#064e3b',
          primary: '#166534',
          accent: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}
