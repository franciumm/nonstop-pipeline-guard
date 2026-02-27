export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Extracted from your code
        amber: { 500: '#F59E0B' },
        neutral: { 900: '#171717', 100: '#F5F5F5' },
      }
    },
  },
  plugins: [],
}