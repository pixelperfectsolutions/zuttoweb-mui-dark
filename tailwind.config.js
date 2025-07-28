/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Open Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
      },
      colors: {
        "apple-bg": "#fafafa",
        "apple-text": "#1d1d1f",
        "apple-heading": "#1d1d1f",
        "apple-accent": "#007aff",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      fontSize: {
        "section-heading": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
      },
      boxShadow: {
        apple: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "apple-hover": "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
