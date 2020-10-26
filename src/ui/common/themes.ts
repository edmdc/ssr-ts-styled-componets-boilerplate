import { DefaultTheme } from "styled-components";
import { palette } from "../common/colors";

const darkTheme: DefaultTheme = {
  borderRadius: ".5rem",
  gutterHorizontal: ".6rem",

  colors: {
    main: palette.black1,
    secondary: palette.white1,
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
