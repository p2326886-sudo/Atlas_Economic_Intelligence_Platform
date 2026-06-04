/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        atlas: {
          navy: '#0A2540',
          blue: '#1D6AE5',
          green: '#00A86B',
          amber: '#F59E0B',
          red: '#E53E3E',
          slate: '#64748B',
          light: '#F8FAFC',
          border: '#E2E8F0',
          dark: '#0F172A',
        },
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)',
        premium: '0 4px 24px -2px rgba(10,37,64,0.12), 0 2px 8px -2px rgba(10,37,64,0.08)',
        hero: '0 20px 60px -10px rgba(10,37,64,0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        ticker: 'ticker 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
