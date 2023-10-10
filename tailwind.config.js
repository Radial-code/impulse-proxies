/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // fontFamily: {
      //   Montserrat: "'Montserrat', sans-serif",
      // },
      backgroundColor: {
        '29586A': '#29586A',
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "15px",
        xl: "17px",
        "2xl": "19px",
        "3xl": "22px",
        "4xl": "27px",
        "5xl": "32px",
        "6xl": "37px",
        "7xl": "50px",
        "8xl": "58px",
      },
      colors: {
        "dark-blue": "#040426",
        "cyan-green": "#50EED7",
        "dark-gray": "#9898A3",
      },
    },
  },
  plugins: [],
};
