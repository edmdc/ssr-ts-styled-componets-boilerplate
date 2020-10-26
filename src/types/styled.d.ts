import "styled-components";

// extend og module declarations
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    gutterHorizontal: string;

    colors: {
      main: string;
      secondary: string;
      textDark: string;
      textLight: string;
      black: string;
      blue: string;
      gray: string;
      green: string;
      orange: string;
      purple: string;
      red: string;
      white: string;
    };
  }
}
