/** @type {import('tailwindcss').Config} */
export default {
  content: ['.index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          'dark-blue': '#35383E',
          primary: '#00ADB5',
          'dark-gray': '#181818',
          'text-gray': '#9A9C9F',
          'light-gray': '#EEEEEE',
          white: '#FFFFFF',
          background: '#F8F8F8',
          process: '#FFAA84',
          border: '#F4F4F5',
          danger: '#EF4444',
        },
      },
    },
  },
  plugins: [],
};
