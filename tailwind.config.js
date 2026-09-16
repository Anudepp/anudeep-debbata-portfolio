/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#0f0f0f',
          800: '#141414',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2a2a2a',
          400: '#3a3a3a',
          300: '#525252',
          200: '#888888',
          100: '#c0c0c0',
          50: '#e8e8e8',
        },
        accent: {
          DEFAULT: '#00d4ff',
          50: '#e0fbff',
          100: '#b3f5ff',
          200: '#80efff',
          300: '#4de9ff',
          400: '#1ae3ff',
          500: '#00d4ff',
          600: '#00a8cc',
          700: '#007a99',
          800: '#005266',
          900: '#002b33',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
