/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blinking 0.75s ease-in-out infinite',
        typewriter: 'typing 2s steps(30, end)',
      },
      keyframes: {
        blinking: {
          '50%': { opacity: 0 },
        },
        typing: {
          '0%': { width: 0 },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
