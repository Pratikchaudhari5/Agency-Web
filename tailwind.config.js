/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10B981",    // green
        secondary: "#F59E0B",  // orange
        accent: "#3B82F6",     // blue
        muted: "#6B7280",      // gray
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],  // for headings and important text
        secondary: ["Inter", "sans-serif"],  // for body / descriptive text
      },
    },
  },
  plugins: [],
};
