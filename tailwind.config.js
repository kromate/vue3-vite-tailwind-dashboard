module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: 'rgba(29, 40, 53, 0.95)',
        primary:'#3cd2a5'
      },
      spacing: {
        '13': '3.25rem',
      }
    },
  },
  plugins: [],
}
