import styled, { ColorPalette, css, DefaultTheme } from "styled-components";

type BorderStyles = "striped" | "none";
export interface DivProps {
  theme: DefaultTheme;
  borderStyle?: BorderStyles;
  width?: string;
  height?: string;
  colorOverrides?: ColorOverrides;
}

type ColorOverrides = {
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
};

const foregroundGradient = (colors: ColorPalette) => css`
  margin: 0;
  padding: 0;
  border: 0;
  background: linear-gradient(
    to bottom right,
    ${() => colors.foregroundAccent + ", " + colors.foreground}
  );
`;

const createStripedBorder = (
  colors: ColorPalette,
  { color1, color2, color3, color4 }: ColorOverrides = {}
) => css`
  background: linear-gradient(
        to bottom right,
        ${() => colors.foregroundAccent + ", " + colors.foreground}
      )
      padding-box,
    repeating-linear-gradient(
        -45deg,
        ${() => (color1 ? color1 : colors.backgroundAccent)} 0,
        ${() => (color1 ? color1 : colors.backgroundAccent)} 12.5%,
        ${() => (color2 ? color2 : colors.foreground)} 0,
        ${() => (color2 ? color2 : colors.foreground)} 25%,
        ${() => (color3 ? color3 : colors.background)} 0,
        ${() => (color3 ? color3 : colors.background)} 37.5%,
        ${() => (color4 ? color4 : colors.foregroundAccent)} 0,
        ${() => (color4 ? color4 : colors.foregroundAccent)} 50%
      )
      0 / 2.1em 2.1em;
`;

const divStyleHandler = (props: DivProps) => {
  switch (props.borderStyle) {
    case "striped": {
      return props.colorOverrides
        ? createStripedBorder(props.theme.colors, { ...props.colorOverrides })
        : createStripedBorder(props.theme.colors);
    }
    default: {
      return foregroundGradient(props.theme.colors);
    }
  }
};

export const BaseDiv = styled.div<DivProps>`
  margin: 1rem auto;
  border: ${(props) => props.theme.borderSize} solid transparent;
  width: ${(props) => props.width || "55vw"};
  height: ${(props) => props.height || "45vh"};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 5px 5px 21px black;
  ${(props) => divStyleHandler(props)}
`;
