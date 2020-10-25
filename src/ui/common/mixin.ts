import css from "styled-jsx/css";
import React from "react";

interface options {
  size: string;
  bg1: string;
  bg2: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}

export const beautifyBorder = (
  options: options
): { className: string; styles: string } => {
  const { size, bg1, bg2, color1, color2, color3, color4 } = options;

  return css.resolve`
    .beautify-border {
      padding: ${size};
      border: ${size} solid transparent;
      borderradius: 0.4rem;
      boxshadow: 5px 5px 21px black;
      background: radial-gradient(${bg1} 35%, ${bg2} 85%) padding-box,
        repeating-linear-gradient(
            -45deg,
            ${color1} 0,
            ${color1} 12.5%,
            ${color2} 0,
            ${color2} 25%,
            ${color3} 0,
            ${color3} 37.5%,
            ${color4} 0,
            ${color4} 50%
          )
          0 / 2.1em 2.1em;
    }
  `;
};
