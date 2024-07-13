/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        "mainheader_breakpoint_one" : "1190px",
        "mainheader_breakpoint_two" : "1189px",
        "mainheader_breakpoint_three" : "1167px",
        "mainheader_breakpoint_four" : "1086px",
        "mainheader_breakpoint_five" : "812px",
        "xsm": "330px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
