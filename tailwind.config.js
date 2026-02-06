/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#06B8F1',
      primaryDark: '#0593c4',
    },
    backgroundImage: {
      'brand-gradient':
        'linear-gradient(135deg, #06B8F1 0%, #0EA5E9 40%, #2563EB 100%)',
    },
  },
},

  plugins: [],
}

