import { css } from "styled-components";

export const clearfix = css`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;
