const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#0E31F2",
        "secondary-hover": "#3F5BF6",
        "light-purple": "#EBEDFF",
        gray: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAEDFE",
          300: "#D0D5DD",
          400: "",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "",
          900: "#101828",
        },
      },
      fontFamily: {
        "work-sans": [`'Work Sans'`, "sans-serif"],
      },
      content: {},
    },
    screens: {
      xs: "480px",
      xsm: "600px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
    },
    keyframes: {
      spin: {
        to: {transform: 'rotate(360deg)'}
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      blink: {
        "0%": { opacity: 0.2 },
        "20%": { opacity: 1 },
        "100% ": { opacity: 0.2 },
      },
    },
    animation: {
      fadeIn: "fadeIn .3s ease-in-out",
      blink: "blink 1.4s both infinite",
      spin: "spin 1s linear infinite",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    plugin(({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          "animation-delay": (value: any) => ({
            "animation-delay": value,
          }),
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
