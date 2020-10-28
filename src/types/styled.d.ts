import "styled-components";

// extend og module declarations
declare module "styled-components" {
  export type ColorChoices =
    | "aqua"
    | "black"
    | "blue"
    | "darkGray"
    | "gray"
    | "green"
    | "orange"
    | "purple"
    | "red"
    | "yellow"
    | "white";

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

    colors: {
      mode: "dark" | "light";
      onFocusHighlight: ColorChoices;
      text: {
        dark: string;
        light: string;
      };
      dark: ColorPalette;
      light: ColorPalette;
    };
  }
}
