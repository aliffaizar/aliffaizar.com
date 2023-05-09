module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
  plugins: [require('tailwind-scrollbar')],
};
