/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#54E6AF",
        "blue-950": "#121725",
        "blue-900": "#2C344B",
        "blue-600": "#5A668A",
        "blue-300": "#C2CBE5",
        red: "#FB3E3E",
      },
      backgroundImage: {
        desktop: 'url("./assets/desktop/image-host.jpg")',
        tablet: 'url("./assets/tablet/image-host.jpg")',
        mobile: 'url("./assets/mobile/image-host.jpg")',
      },
      boxShadow: {
        button: "box-shadow: 0px 2px 4px 0px rgba(84, 230, 175, 0.14)",
      },
    },
  },
  plugins: [],
};
