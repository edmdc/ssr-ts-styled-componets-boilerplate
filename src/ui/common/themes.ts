import { DefaultTheme } from "styled-components";

const gruvBox: DefaultTheme = {
  borderRadius: ".5rem",
  borderSize: ".8rem",
  gridGap: "1.6rem",
  fonts: {
    body: {
      familyName: "'Ubuntu', sans-serif",
      url:
        "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
    },
    headers: {
      url:
        "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      familyName: "'Fira Sans', sans-serif",
    },
  },

  colors: {
    onFocusHighlight: "gray",
    mode: "dark",
    text: {
      dark: "rgba(60,56,54,1)",
      light: "rgba(251,241,199,1)",
    },
    dark: {
      background: "rgba(60,56,54,1)",
      backgroundAccent: "rgba(80,73,69,1)",
      foreground: "rgba(235,219,178,1)",
      foregroundAccent: "rgba(251,241,199,1)",
      aqua: "rgba(142,192,124,1)",
      black: "rgba(40,40,40,1)",
      blue: "rgba(131,165,152,1)",
      darkGray: "rgba(80,73,69,1)",
      green: "rgba(184, 187, 38, 1)",
      gray: "rgba(146,131,116,1)",
      purple: "rgba(211,134,155,1)",
      orange: "rgba(254,128,25,1)",
      red: "rgba(251, 73, 52, 1)",
      yellow: "rgba(250,189,47,1)",
      white: "rgba(245,245,245,1)",
    },
    light: {
      background: "rgba(235,219,178,1)",
      backgroundAccent: "rgba(251,241,199,1)",
      foreground: "rgba(60,56,54,1)",
      foregroundAccent: "rgba(80,73,69,1)",
      aqua: "rgba(104,157,106,1)",
      black: "rgba(60,56,54,1)",
      blue: "rgba(69,133,136,1)",
      darkGray: "rgba(102,92,84,1)",
      green: "rgba(152, 151, 26, 1)",
      gray: "rgba(124,111,100,1)",
      purple: "rgba(177,98,134,1)",
      orange: "rgba(214,93,14,1)",
      red: "rgba(204,36,29,1)",
      yellow: "rgba(215, 153, 33, 1)",
      white: "rgba(245,245,245,1)",
    },
  },
};

export { gruvBox };
