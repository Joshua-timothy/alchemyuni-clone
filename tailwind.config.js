/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        heebo: "'Heebo', sans-serif",
      },
      height: {
        ".2": ".2rem",
        "half": "85vh",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        "3.5": "3.5rem",
        "1.3": ".94rem",
      },
      lineHeight: {
        "semi": "1.20",
      },
      padding: {
        "2.5": ".7rem",
      },
      textColor: {
        color: {
          blue: "var(--color-text-blue)",
          gray: "var(--color-text-gray)",
          black: "var(--color-text-black)",
          white: "var(--color-text-white)",
        },
      },
      backgroundColor: {
        color: {
          black: "var(--color-bg-black)",
          white: "var(--color-bg-white)",
          orange: "var(--color-bg-orange)",
          blue: "var(--color-bg-blue)",
        },
      },
    },
  },
  plugins: [],
};
