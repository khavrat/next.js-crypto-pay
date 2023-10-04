/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1600px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "20px",
          md: "36px",
          lg: "200px",
        },
      },
      colors: {
        bodyColor: "var(--color-body)",
        usecasesColor: "var(--color-usecases)",
        featuresColor: "var(--color-features)",
        blackColor: "#0D0D12",
        blueColor: "#41A4DF",
        wightColor: "#FFFFFF",
        hoverColor: "#297EE2",
        disabledColor: "rgba(255, 255, 255, 0.24)",
      },
      boxShadow: {
        innerShadow: "inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)",
        dropShadow: "2px 1px 6px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        pic: ["SF Pro Display", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "629",
      },
      fontSize: {
        s: "14px",
        p: "18px",
        h: "32px",
      },
      backgroundImage: {
        pinkGradient: "linear-gradient(340deg, #FAACA8 8.42%, #DDD6F3 91.45%)",
        yellowGradient:
          "linear-gradient(207deg, #FCB69F 6.91%, #FFECD2 92.45%)",
        blueGradient: "linear-gradient(0deg, #C2E9FB -16.6%, #A1C4FD 106.15%)",
        purpleGradient:
          "linear-gradient(297deg, #8EC5FC 8.25%, #E0C3FC 91.76%)",
      },
    },
  },
  plugins: [],
};
