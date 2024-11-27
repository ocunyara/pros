import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        primary: '#F7F2EF',
        black: '#202020',
        gold: '#B4AB9B',
        goldLight: '#B4AB9B',
        blue: '#abb8c3',
        global: '#e5e4e2',
        lite: '#f7f7f7'
      },
    },
  },
  plugins: [],
};
export default config;
