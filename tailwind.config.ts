import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7F2EF',
        black: '#202020',
        gold: '#B4AB9B',
        goldLight: '#B4AB9B',
        blue: '#abb8c3',
        global: '#e5e4e2'
      },
      // fontFamily: {
      //   montserrat: ['var(--montserrat-font)', ...fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
export default config;
