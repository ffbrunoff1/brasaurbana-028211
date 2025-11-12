/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7f2',
          100: '#ffece0',
          200: '#ffd6c2',
          300: '#ffb899',
          400: '#ff9066',
          500: '#ff6b3d',
          600: '#f04f20',
          700: '#c63c17',
          800: '#9f3118',
          900: '#802b18',
        },
        secondary: {
          50: '#fefef2',
          100: '#fefbe8',
          200: '#fff8c1',
          300: '#fff186',
          400: '#ffe441',
          500: '#ffd700',
          600: '#e6b800',
          700: '#bf9300',
          800: '#9c7100',
          900: '#815c00',
        },
        accent: {
          50: '#f8f3f1',
          100: '#ede4de',
          200: '#d9c7ba',
          300: '#c1a491',
          400: '#a8826c',
          500: '#946751',
          600: '#785444',
          700: '#624339',
          800: '#553b33',
          900: '#4a332c',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        bold: ['Inter Bold', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-fire':
          'linear-gradient(135deg, #ff6b3d 0%, #f04f20 50%, #c63c17 100%)',
        'gradient-dark':
          'linear-gradient(135deg, #1a1a1a 0%, #454545 50%, #1a1a1a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
