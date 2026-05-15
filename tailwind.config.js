/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        auriga: {
          sand: '#E8D8C3',
          marble: '#F6EFE6',
          teak: '#8B5E3C',
          charcoal: '#1E1E1C',
          brass: '#C6A15B',
          green: '#4F6F52',
          ivory: '#FFF8EF',
          terracotta: '#B96D4B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      animation: {
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'line-grow': 'lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
}
