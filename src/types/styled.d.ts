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
    black: string;
    blue: string;
    gray: string;
    green: string;
    orange: string;
    purple: string;
    red: string;
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
      dark: ColorPalette;
      light: ColorPalette;
    };
  }
}
