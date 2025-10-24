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
        },
        keyframes: {
          'blurred-fade-in': {
            '0%': { filter: 'blur(10px)', opacity: '0' },
            '100%': { filter: 'blur(0)', opacity: '1' },
          },
          'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'fade-in-down': {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'fade-in-left': {
            '0%': { opacity: '0', transform: 'translateX(-20px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          'fade-in-right': {
            '0%': { opacity: '0', transform: 'translateX(20px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          'fade-out-up': {
            '0%': { opacity: '1', transform: 'translateY(0)' },
            '100%': { opacity: '0', transform: 'translateY(-20px)' },
          },
          'fade-out-down': {
            '0%': { opacity: '1', transform: 'translateY(0)' },
            '100%': { opacity: '0', transform: 'translateY(20px)' },
          },
          'fade-out-left': {
            '0%': { opacity: '1', transform: 'translateX(0)' },
            '100%': { opacity: '0', transform: 'translateX(-20px)' },
          },
          'fade-out-right': {
            '0%': { opacity: '1', transform: 'translateX(0)' },
            '100%': { opacity: '0', transform: 'translateX(20px)' },
          },
          'heartbeat': {
            '0%, 100%': { transform: 'scale(1)' },
            '15%': { transform: 'scale(1.05)' },
            '30%': { transform: 'scale(1.0)' },
            '45%': { transform: 'scale(1.03)' },
            '60%': { transform: 'scale(1.0)' },
          },
          'impulse-rotation-right': {
            '0%': { transform: 'scale(1) rotate(0deg)' },
            '20%': { transform: 'scale(1.1) rotate(5deg)' },
            '40%': { transform: 'scale(1.1) rotate(-5deg)' },
            '60%': { transform: 'scale(1.1) rotate(5deg)' },
            '80%': { transform: 'scale(1.1) rotate(-5deg)' },
            '100%': { transform: 'scale(1) rotate(0deg)' },
          },
          'impulse-rotation-left': {
            '0%': { transform: 'scale(1) rotate(0deg)' },
            '20%': { transform: 'scale(1.1) rotate(-5deg)' },
            '40%': { transform: 'scale(1.1) rotate(5deg)' },
            '60%': { transform: 'scale(1.1) rotate(-5deg)' },
            '80%': { transform: 'scale(1.1) rotate(5deg)' },
            '100%': { transform: 'scale(1) rotate(0deg)' },
          },
          'rotational-wave': {
            '0%': { transform: 'rotate(0deg) translateY(0%)' },
            '25%': { transform: 'rotate(90deg) translateY(-10%)' },
            '50%': { transform: 'rotate(180deg) translateY(0%)' },
            '75%': { transform: 'rotate(270deg) translateY(10%)' },
            '100%': { transform: 'rotate(360deg) translateY(0%)' },
          },
        },
        animation: {
          'blurred-fade-in': 'blurred-fade-in 1s ease-in-out forwards',
          'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
          'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
          'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
          'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
          'fade-out-up': 'fade-out-up 0.6s ease-out forwards',
          'fade-out-down': 'fade-out-down 0.6s ease-out forwards',
          'fade-out-left': 'fade-out-left 0.6s ease-out forwards',
          'fade-out-right': 'fade-out-right 0.6s ease-out forwards',
          'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
          'impulse-rotation-right': 'impulse-rotation-right 2s ease-in-out infinite',
          'impulse-rotation-left': 'impulse-rotation-left 2s ease-in-out infinite',
          'rotational-wave': 'rotational-wave 4s linear infinite',
        },
      },
    },
    plugins: [],
  }
