import typography from "@tailwindcss/typography";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        luxe: {
          950: "#0b0b0f",
          900: "#16161d",
          800: "#26262f",
          700: "#3f3f4e",
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
