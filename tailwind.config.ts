import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        // Primary - Sacred Saffron
        saffron: {
          50: 'hsl(var(--saffron-50))',
          100: 'hsl(var(--saffron-100))',
          200: 'hsl(var(--saffron-200))',
          300: 'hsl(var(--saffron-300))',
          400: 'hsl(var(--saffron-400))',
          500: 'hsl(var(--saffron-500))',
          600: 'hsl(var(--saffron-600))',
          700: 'hsl(var(--saffron-700))',
          800: 'hsl(var(--saffron-800))',
          900: 'hsl(var(--saffron-900))',
        },
        // Secondary - Divine Gold
        gold: {
          50: 'hsl(var(--gold-50))',
          100: 'hsl(var(--gold-100))',
          200: 'hsl(var(--gold-200))',
          300: 'hsl(var(--gold-300))',
          400: 'hsl(var(--gold-400))',
          500: 'hsl(var(--gold-500))',
          600: 'hsl(var(--gold-600))',
          700: 'hsl(var(--gold-700))',
          800: 'hsl(var(--gold-800))',
          900: 'hsl(var(--gold-900))',
        },
        // Neutral - Temple Cream
        cream: {
          50: 'hsl(var(--cream-50))',
          100: 'hsl(var(--cream-100))',
          200: 'hsl(var(--cream-200))',
          300: 'hsl(var(--cream-300))',
          400: 'hsl(var(--cream-400))',
          500: 'hsl(var(--cream-500))',
        },
        // Sacred - Deep Maroon
        maroon: {
          50: 'hsl(var(--maroon-50))',
          100: 'hsl(var(--maroon-100))',
          200: 'hsl(var(--maroon-200))',
          300: 'hsl(var(--maroon-300))',
          400: 'hsl(var(--maroon-400))',
          500: 'hsl(var(--maroon-500))',
          600: 'hsl(var(--maroon-600))',
          700: 'hsl(var(--maroon-700))',
          800: 'hsl(var(--maroon-800))',
          900: 'hsl(var(--maroon-900))',
        },
        // Semantic Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        bengali: ['Noto Sans Bengali', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2rem',
      },
      boxShadow: {
        'inner-glow': 'inset 0 2px 4px 0 rgba(249, 115, 22, 0.1)',
        'spiritual': '0 4px 20px -2px rgba(249, 115, 22, 0.15)',
        'golden': '0 4px 20px -2px rgba(245, 158, 11, 0.2)',
        'divine': '0 10px 40px -10px rgba(249, 115, 22, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-spiritual': 'linear-gradient(135deg, hsl(var(--saffron-500)), hsl(var(--gold-500)), hsl(var(--saffron-600)))',
        'hero-gradient': 'linear-gradient(to bottom, transparent 0%, rgba(127, 29, 29, 0.3) 50%, rgba(127, 29, 29, 0.9) 100%)',
        'card-gradient': 'linear-gradient(145deg, hsl(var(--cream-50)), hsl(var(--cream-100)))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        shimmer: 'shimmer 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        'ken-burns': 'ken-burns 20s ease-out forwards',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
