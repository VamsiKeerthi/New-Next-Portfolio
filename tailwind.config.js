/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        move: "move 10s ease-in-out infinite alternate",
      },
      fontFamily: {
        primary: ["IBM Plex Mono", "monospace"],
        secondary: ["Raleway", "sans-serif"],
      },
      keyframes: {
        move: {
          "25%": { transform: "translateY(-50px)" },
          "50%": { transform: "translateY(-100px)" },
          "75%": { transform: "translateY(-150px)" },
          "100%": { transform: "translateY(-200px)" },
        },
      },
    },
  },
  variants: {
    animation: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
