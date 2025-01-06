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
        def_yellow: "#eab308",  // default yellow
        sec_yellow: '#FEF08A',  // secondary yellow
        hover_yellow: "#ca8a04",  // hover yellow
        gray: "#e2e8f0",    // navbar lighter gray
        med_gray: "#cbd5e1",  // navbar (border) medium gray
        dark_gray: "#5d6675", // text dark gray
      },
      fontFamily: {
        tommy: ['var(--font-tommy)'],
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
          marginTop: '1.5rem', // mt-10 equivalent
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
          flexWrap: 'wrap', /* Allow items to wrap to the next row */
          gap: '0.5rem 1rem',
        },
        '.custom-twocol-body': { // flex flex-col space-y-2 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:flex-row md:text-left
          display: 'flex',
          flexDirection: 'column',
          rowGap: '0.5rem', // Equivalent to space-y-2
          '@screen md': {
            flexDirection: 'row',
            columnGap: '2.5rem', // Equivalent to space-x-10
            rowGap: '0', // Removes space-y-0 at md breakpoint
          },
        },
        '.custom-video-container': { // for videos, to be put in iframe className // relative inset-0 w-full h-full px-4
          position: 'relative', // for "relative"
          inset: '0', // for "inset-0"
          width: '100%', // for "w-full"
          height: '100%', // for "h-full"
          paddingLeft: '1rem', // for "px-4" (left padding)
          paddingRight: '1rem', // for "px-4" (right padding)
        },
      });
    },
    function ({ addUtilities, config }) {
      addUtilities({
        '.custom-subheading': { // grid subheadings // ml-24 text-left font-bold text-2xl
          maxWidth: '80rem', // max-w-7xl (7xl is 80rem in Tailwind's default theme)
          marginLeft: 'auto', // mx-auto
          marginRight: 'auto',
          paddingLeft: '1rem', // p-4
          textAlign: 'left',
          fontWeight: '700',
          fontSize: '1.5rem',
        },
        '.custom-body': { // ml-24 text-left font-bold text-2xl
          maxWidth: '80rem', // max-w-7xl (7xl is 80rem in Tailwind's default theme)
          marginLeft: 'auto', // mx-auto
          marginRight: 'auto',
          marginTop: '3.5rem',
          paddingLeft: '1rem', // p-4
          paddingRight: '1rem',
          textAlign: 'left',
        },
        '.custom-body-2': { // for project breakdowns // ml-24 text-left font-bold text-2xl
          maxWidth: '70rem', // max-w-7xl (7xl is 80rem in Tailwind's default theme)
          marginLeft: 'auto', // mx-auto
          marginRight: 'auto',
          marginTop: '0.5rem',
          paddingLeft: '1rem', // p-4
          paddingRight: '1rem',
          textAlign: 'left',
        },
        '.custom-subheading-2': { // for project breakdown subheadings // mt-8 text-left font-bold text-2xl
          marginTop: '2rem',
          textAlign: 'left',
          fontWeight: '700',
          fontSize: '1.5rem',
        },
        '.custom-center': { // for project breakdown centering content within container // flex items-stretch justify-center
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center',
        },
        '.custom-flex-center-span-height': {  //  'min-h-screen flex items-center justify-center'
            'min_height': 'calc(100%)'
        },
        '.custom-grid': { // md:grid md:grid-cols-3 md:gap-8 max-w-7xl mx-auto p-4
          maxWidth: '80rem', // max-w-7xl (7xl is 80rem in Tailwind's default theme)
          marginLeft: 'auto', // mx-auto
          marginRight: 'auto',
          padding: '1rem', // p-4
          display: 'flex',  // flex column when not in grid layout
          flexDirection: 'column',
          gap: '3rem', // Gap between the items when in column layout
          '@screen md': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '3rem', // md:space-x-8 equivalent
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
          fontWeight: '600',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
          marginTop: '0.5rem',
          backgroundColor: config('theme.colors.sec_yellow'),
          borderRadius: '0.5rem',
        },
        '.custom-highlighted-text': { // font-semibold text-def_yellow hover:text-hover_yellow
          fontWeight: '600',
          backgroundColor: config('theme.colors.sec_yellow'),
          paddingLeft: '0.25rem',
          paddingRight: '0.25rem',
          '&:hover': {
            color: config('theme.colors.hover_yellow'), // Matches hover:text-yellow-600
          }, // old resume: font-regular text-black italic hover:-translate-y-1 hover:text-yellow-600
          //                 <hr className="w-12 h-0.5 mx-auto bg-def_yellow border-0"></hr>

        }

      })
    }
  ],
};
