/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js}"
    ],
    theme: {
      extend: {
        colors: {
            'valenta-orange': '#FF5400',
            'valenta-navy': '#0a2735',
            'valenta-teal': '#00b2b3',
            'valenta-teal-dark': '#047f80',
            'valenta-teal-darker': '#044b4b',
            'valenta-gray': {
                light: '#f8f9fa',
                DEFAULT: '#5a6c7d',
            },
            'valenta-content': '#2c3e50',
        },
        fontFamily: {
            sans: ['DM Sans', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
