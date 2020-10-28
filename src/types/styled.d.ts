import "styled-components";

// extend og module declarations
declare module "styled-components" {
  type ColorProps = {
    colors: ColorPalette;
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
  };

  export interface ColorPalette {
    background: string;
    backgroundAccent: string;
    foreground: string;
    foregroundAccent: string;
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
    text: {
      dark: string;
      light: string;
    };
  }

  interface Font {
    url: string;
    familyName: string;
  }

  export interface DefaultTheme {
    borderRadius: string;
    borderSize: string;
    gridGap: string;
    fonts: {
      body: Font;
      headers: Font;
    };
    onFocusHighlight: string;

    colors: ColorPalette;
  }
}
