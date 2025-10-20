/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Optional: only if using the App Router
  ],
  theme: {
    extend: {
      keyframes: {
        // 🔹 Marquee Animation
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        // 🔹 Dropdown Fade & Slide Animation
        fadeSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        // Marquee Animation
        marquee: 'marquee 15s linear infinite',

        // Dropdown Fade & Slide
        fadeSlideDown: 'fadeSlideDown 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
