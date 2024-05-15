/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          "100": "#eee8f6",
          "200": "#ede8f5",
          "300": "#e2eaf8",
        },
        lightskyblue: "#90b6ef",
        white: "#fff",
        black: "#000",
        darkslateblue: {
          "100": "#3d52a1",
          "200": "#3749a6",
        },
        cornflowerblue: {
          "100": "#6199ff",
          "200": "#6378c7",
          "300": "#5e70cc",
        },
        gray: {
          "100": "#fbfcfe",
          "200": "#1e293b",
          "300": "#202224",
        },
        darkslategray: {
          "100": "#3e4f60",
          "200": "rgba(62, 79, 96, 0.12)",
        },
        snow: "#fcfafa",
        mediumslateblue: "#0b63f8",
        royalblue: "#4880ff",
        lightsteelblue: "#adbada",
        darkgray: "#979797",
        whitesmoke: {
          "100": "#f9f8fb",
          "200": "#f8f8f8",
        },
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        poppins: "Poppins",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "81xl": "100px",
        mini: "15px",
        sm: "14px",
        "4xs": "9px",
        "131xl": "150px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      "7xl": "26px",
      lg: "18px",
      "29xl": "48px",
      sm: "14px",
      xs: "12px",
      "10xl": "29px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq625: {
        raw: "screen and (max-width: 625px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
