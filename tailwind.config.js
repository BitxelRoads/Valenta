/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'valenta-orange': '#FF6600',
        'valenta-orange-dark': '#CC5200',
        'valenta-navy': '#001F3F',
        'valenta-teal': '#00b2b3',
        'valenta-teal-dark': '#047f80',
        'valenta-teal-darker': '#044b4b',
        'valenta-gray': {
            light: '#f8f9fa',
            DEFAULT: '#5a6c7d',
        },
        'valenta-content': '#333333', // Default text color for light mode
        'valenta-bg-light': '#FFFFFF', // Light mode background
        'valenta-bg-dark': '#1a202c', // Dark mode background
        'valenta-text-light': '#333333', // Light mode text
        'valenta-text-dark': '#e2e8f0', // Dark mode text
      },
      fontFamily: {
          sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'base-mobile': '0.85rem', // 13.6px based on 16px default
      },
      keyframes: {
        'blurred-fade-in': {
          '0%': { filter: 'blur(20px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
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
        'blurred-fade-in': 'blurred-fade-in 1.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'fade-in-left': 'fade-in-left 1s ease-out forwards',
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
  variants: {
    extend: {},
  },
  plugins: [],
}
