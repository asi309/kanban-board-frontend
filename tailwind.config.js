/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        mainPurple: '#635FC7',
        mainPurpleHover: '#A8A4FF',
        black: '#000112',
        veryDarkGrey: '#20212C',
        darkGrey: '#2B2C37',
        darkLines: '#3E3F4E',
        mediumGrey: '#828FA3',
        lightLines: '#E4EBFA',
        lightGrey: '#F4F7FD',
        white: '#ffffff',
        red: '#EA5555',
        redHover: '#FF9898',
      },
      // fontFamily: {
      //   base: ['Plus Jakarta Sans'],
      // },
      fontSize: {
        sm: '12px',
        base: '13px',
        xl: '15px',
        '2xl': '18px',
        '3xl': '24px',
      },
      lineHeight: {
        sm: '15.12px',
        base: '23px',
        xl: '18.9px',
        '2xl': '22.68px',
        '3xl': '30.24px',
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
  // variants: {
  //   extend: {
  //     display: ['dark'],
  //   },
  // },
};
