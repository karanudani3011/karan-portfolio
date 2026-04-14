/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode manually via a class
  theme: {
    extend: {
      colors: {
        softBlue: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c2d6ff',
          300: '#94b8ff',
          400: '#6090ff',
          500: '#3866ff',
          600: '#1f43eb',
          700: '#1631cf',
          800: '#1729a8',
          900: '#172785',
        },
        darkBg: '#0f172a',    // Deep slate for dark mode background
        darkCard: '#1e293b',  // Slightly lighter slate for cards 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A modern, highly readable font
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
