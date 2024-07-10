/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          blue: '#03318C',
          purple: '#5D04D9',
          pink1: '#C004D9',
          pink2: '#9303A6',
          pink3: '#8C0375',
        },
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'sans-serif'],
      },
    },
    plugins: [],
  }
}


