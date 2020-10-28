import { ColorPalette, css } from "styled-components";

type ColorProps = {
  colors: ColorPalette;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
};

export const clearfix = css`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const foregroundGradient = css<ColorProps>`
  background: linear-gradient(
    to bottom right,
    ${(props) => props.colors.foregroundAccent + ", " + props.colors.foreground}
  );
`;

export const useStripedBorder = css<ColorProps>`
  background: linear-gradient(
      to bottom right,
      ${(props) =>
        props.colors.foregroundAccent + ", " + props.colors.foreground}
    ),
    repeating-linear-gradient(
        -45deg,
        ${(props) =>
            props.color1 ? props.color1 : props.colors.backgroundAccent}
          0,
        ${(props) =>
            props.color1 ? props.color1 : props.colors.backgroundAccent}
          12.5%,
        ${(props) => (props.color2 ? props.color2 : props.colors.foreground)} 0,
        ${(props) => (props.color2 ? props.color2 : props.colors.foreground)}
          25%,
        ${(props) => (props.color3 ? props.color3 : props.colors.background)} 0,
        ${(props) => (props.color3 ? props.color3 : props.colors.background)}
          37.5%,
        ${(props) =>
            props.color4 ? props.color4 : props.colors.foregroundAccent}
          0,
        ${(props) =>
            props.color4 ? props.color4 : props.colors.foregroundAccent}
          50%
      )
      0 / 2.1em 2.1em;
`;
