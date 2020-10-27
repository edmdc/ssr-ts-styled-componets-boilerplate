import "styled-components";

// extend og module declarations
declare module "styled-components" {
  interface ColorPalette {
    main: string;
    mainAccent: string;
    secondary: string;
    secondaryAccent: string;
    textDark: string;
    textLight: string;
    aqua: string;
    black: string;
    blue: string;
    darkGray: string;
    gray: string;
    green: string;
    orange: string;
    purple: string;
    red: string;
    yellow: string;
    white: string;
  }

  interface Font {
    url: string;
    familyName: string;
  }

  export interface DefaultTheme {
    borderRadius: string;
    gridGap: string;
    fonts: {
      body: Font;
      headers: Font;
    };

    colors: {
      text: {
        dark: string;
        light: string;
      };
      dark: ColorPalette;
      light: ColorPalette;
    };
  }
}
