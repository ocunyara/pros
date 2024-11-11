/** @type {import('postcss-load-config').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        primary: '#f8d2bf'
      }
    }
  },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
