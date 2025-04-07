/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotateIn: {
        '0%': { transform: 'rotate(0)' },
        '100%': { transform: 'rotate(120deg)' }, // 0.5 turn = 180 degrees
      },
      animation: {
        'rotate-in': 'rotateIn 1s ease-in-out forwards', // Adjust duration as needed
      },
    },
  },
  plugins: [],
}