module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        violet: 'hsl(257, 40%, 49%)',
        magenta: 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '2px 2px 3px 3px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
