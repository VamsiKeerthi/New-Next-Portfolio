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
        "up-down": "up-down 2s infinite ease-in-out",
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
        "up-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  variants: {
    animation: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
