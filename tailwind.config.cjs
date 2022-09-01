/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        exo: '"Exo 2", sans',
        fira: '"Fira Code", monospace',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '120ch',
          },
        },
      }),
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
