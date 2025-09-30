/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'white-rev': '#f3efe9',
        primary: '#333',
        accent: '#8a8a8a'
      }
    },
  },
  plugins: [],
}
