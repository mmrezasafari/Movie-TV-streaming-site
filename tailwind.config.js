module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1B1C1F',
        'secondary': '#242629',
        'danger': '#AB070F99',
        'warning': '#F3B209',
        'success': '#43B100',
        'info': '#245DEF',
        'light': '#FFFFFF'
      },
    },
  },
  plugins: [],
}
