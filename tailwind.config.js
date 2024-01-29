/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fcfcff",
          "200": "#fafafb",
        },
        "light-goku": "#f5f5f5",
        "light-gohan": "#fff",
        "light-trunks": "#999ca0",
        "light-bulma": "#231f20",
        gainsboro: "#e6e6e6",
        "light-piccolo-piccolo": "#0e6fff",
        mediumslateblue: {
          "100": "#7a75ff",
          "200": "#605bff",
        },
        "light-beerus-beerus": "#f2f2f2",
        dodgerblue: "#5b93ff",
        black: "#000",
        "light-beerus-hover": "rgba(0, 0, 0, 0.08)",
        text: "#030229",
        darkgray: {
          "100": "#9a9",
          "200": "#999",
        },
        ghostwhite: "#f8faff",
        link: "#346bd4",
        "secondary-text": "#858585",
        "field-color-darker": "#eaeaea",
        "supportive-dodoria-100": "#d33030",
      },
      spacing: {},
      fontFamily: {
        "avertastd-regular": "AvertaStd-Regular",
        "paragraph-ui-type-text-2xl-s": "Figtree",
        nunito: "Nunito",
        lato: "Lato",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "10xs": "3px",
        "8xs": "5px",
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      "3xs": "10px",
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      xs: "12px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      sm: '360px',
      md: '480px',
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
