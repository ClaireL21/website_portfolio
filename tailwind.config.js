const { styleText } = require('util');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.025) infinite",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      }, 
      keyframes: {
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        def_yellow: "#eab308",  // default
        hover_yellow: "#ca8a04",  // hover
        sec_yellow: '#FEF08A',  // secondary yellow
        gray: "#e2e8f0",    // background lighter gray
        med_gray: "#cbd5e1",  // background (border) medium gray
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.custom-flex-center': {  // "flex flex-col text-center items-center justify-center mt-10 px-10 lg:px-40 md:flex-row md:space-x-8 md:text-left">
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2.5rem', // mt-10 equivalent
          paddingLeft: '2.5rem', // px-10 equivalent
          paddingRight: '2.5rem', // px-10 equivalent
          '@screen lg': {
            paddingLeft: '10rem', // lg:px-40 equivalent
            paddingRight: '10rem', // lg:px-40 equivalent
          },
          '@screen md': {
            //flexDirection: 'row',
            textAlign: 'left',
            marginRight: '2rem', // md:space-x-8 equivalent
          },
        },
        '.custom-flex-center-span-height': {  //  'min-h-screen flex items-center justify-center'
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.custom-flex-tags-component': { // flex flex-row align-bottom space-x-4
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'bottom',
          '> :not([hidden]) ~ :not([hidden])': {
            marginLeft: '1rem',
          }
        }
      });
    },
    function ({ addUtilities, config }) {
      addUtilities({
        '.custom-flex-center-span-height': {  //  'min-h-screen flex items-center justify-center'
            'min_height': 'calc(100%)'
        },
        '.custom-grid': { // md:grid md:grid-cols-3 md:gap-8 max-w-7xl mx-auto p-4
          maxWidth: '80rem', // max-w-7xl (7xl is 80rem in Tailwind's default theme)
          marginLeft: 'auto', // mx-auto
          marginRight: 'auto',
          padding: '1rem', // p-4
          '@screen md': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '2rem', // md:space-x-8 equivalent
          },
        },
        '.custom-text-clickable-proj-heading': { // text-xl underline hover:text-yellow-600 font-bold 
          fontSize: '1.25rem',
          textDecoration: 'underline',
          fontWeight: '700',
          '&:hover': {
            color: config('theme.colors.hover_yellow'), // Matches hover:text-yellow-600
          },
        },
        '.custom-flex-tags-styling': { // bg-yellow-200 px-4 py-1 mt-2 text-neutral-900 rounded-lg font-semibold
          fontSize: '0.9rem',
          fontWeight: '500',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
          marginTop: '0.5rem',
          backgroundColor: config('theme.colors.sec_yellow'),
          borderRadius: '0.5rem',
        }

      })
    }
  ],
};
