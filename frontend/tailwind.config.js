module.exports = {
  content: ["./*.html", "./ecommerce/*.html", "./assets/**/*.js","./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
};
