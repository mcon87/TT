/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark theme palette
        dark: {
          bg: '#0f1115',
          surface: '#1a1d23',
          card: '#1f222a',
          border: 'rgba(255, 255, 255, 0.05)',
          'border-hover': 'rgba(255, 255, 255, 0.1)',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#b0b3b8',
          muted: '#6c6f7a',
        },
        accent: {
          50: '#f0fdff',
          100: '#ccfbff',
          200: '#99f6ff',
          300: '#4aebff',
          400: '#b91c1c',
          500: '#950606', // Main deep red accent
          600: '#7f0505',
          700: '#6b0404',
          800: '#570303',
          900: '#430202',
        },
        danger: {
          400: '#ff6b6b',
          500: '#ff4c4c',
          600: '#e53e3e',
        },
        success: {
          400: '#48bb78',
          500: '#38a169',
          600: '#2f855a',
        },
        warning: {
          400: '#ed8936',
          500: '#dd6b20',
          600: '#c05621',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'dark-soft': '0 2px 15px -3px rgba(0, 0, 0, 0.4), 0 10px 20px -2px rgba(0, 0, 0, 0.2)',
        'dark-medium': '0 4px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
        'dark-strong': '0 10px 40px -10px rgba(0, 0, 0, 0.6), 0 2px 10px -2px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(0, 188, 212, 0.3)',
        'glow-hover': '0 0 30px rgba(0, 188, 212, 0.5)',
        'inner-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'scale-in': 'scale-in 0.15s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 188, 212, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 188, 212, 0.6)' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      letterSpacing: {
        'tight': '-0.025em',
        'tighter': '-0.05em',
      },
    },
  },
  plugins: [],
};