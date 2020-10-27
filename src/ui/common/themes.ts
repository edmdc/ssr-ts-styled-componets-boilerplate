import { DefaultTheme } from "styled-components";
import { palette } from "../common/colors";

const darkTheme: DefaultTheme = {
  borderRadius: ".5rem",
  gridGap: "1.6rem",
  fonts: {
    body: "'Ubuntu', sans-serif",
    headers: "'Fira Sans', sans-serif",
  },

  colors: {
    main: palette.black1,
    mainAccent: palette.black2,
    secondary: palette.white1,
    secondaryAccent: palette.white,
    textDark: palette.black1,
    textLight: palette.white,
    black: palette.black,
    blue: palette.blue2,
    green: palette.green2,
    gray: palette.gray,
    purple: palette.purple2,
    orange: palette.orange2,
    red: palette.red2,
    white: palette.white,
  },
};

export { darkTheme };
