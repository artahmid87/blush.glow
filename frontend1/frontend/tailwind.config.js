/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cf118c",
        secondery:'#878787',
        tertiary:'#252525'
      },
      fontFamily:{
        primary:'"Noto Sans", sans-serif',
        secondery:'"Playfair Display", serif',
        loraFont: '"Lora", serif',
      },
    
      keyframes: {
        pulseAnimation: {
          '100%': {
            opacity: '0',
            transform: 'scale(2)',
          },
        },
        slide: {
          '0%': { transform: 'translateX(-2%)' },
          '50%': { transform: 'translateX(2%)' },
          '100%': { transform: 'translateX(-2%)' },
        },
        top_bottom: {
          '0%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(-5%)' },
        },
      },
      animation: {
        pulseCustom: 'pulseAnimation 8s ease-out infinite',
        'slide-left-right': 'slide 5s ease-in-out infinite',
        'slide-top-bottom': 'top_bottom 5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}