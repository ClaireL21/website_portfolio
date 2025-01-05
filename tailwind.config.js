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
        def_yellow: "#eab308",
        hover_yellow: "#ca8a04",
        gray: "#e2e8f0",
        med_gray: "#cbd5e1",
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
            flexDirection: 'row',
            textAlign: 'left',
            marginRight: '2rem', // md:space-x-8 equivalent
          },
        },
      });
    },
  ],
};
