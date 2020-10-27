import "styled-components";

// extend og module declarations
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    gridGap: string;
    fonts: {
      body: string;
      headers: string;
    };

    colors: {
      main: string;
      mainAccent: string;
      secondary: string;
      secondaryAccent: string;
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
