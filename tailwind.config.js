/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "soft-red": "hsl(10, 79%, 65%)",
      "soft-red-hover": "#ec775fb3",
      cyan: "hsl(186, 34%, 60%)",
      "cyan-hover": "#76b5bcb8",
      "dark-brown": "hsl(25, 47%, 15%)",
      "medium-brown": "hsl(28, 10%, 53%)",
      cream: "hsl(27, 66%, 92%)",
      "very-pale-orange": "hsl(33, 100%, 98%)"
    },
    fontFamily: {
      "DM-Sans": ["DM Sans", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    }
  },
  plugins: [],
};
