import styled, { css } from "styled-components";

interface HeaderProps {
  light?: boolean;
  italic?: boolean;
  thin?: boolean;
  useBodyText?: boolean;
}

const baseStyles = css<HeaderProps>`
  color: ${(props) =>
    props.light ? props.theme.colors.textLight : props.theme.colors.textDark};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  font-weight: ${(props) => (props.thin ? "400" : "700")};
  font-family: ${(props) =>
    props.useBodyText ? props.theme.fonts.body : props.theme.fonts.headers};
  padding: 0.3rem;
  margin: 0.5rem auto;
`;

export const H1 = styled.h1<HeaderProps>`
  font-size: 4.1rem;
  ${baseStyles}
`;

export const H2 = styled.h2<HeaderProps>`
  font-size: 3.6rem;
  ${baseStyles}
`;

export const H3 = styled.h3<HeaderProps>`
  font-size: 2.7rem;
  ${baseStyles}
`;

export const H4 = styled.h4<HeaderProps>`
  font-size: 2.4rem;
  ${baseStyles}
`;

export const H5 = styled.h5<HeaderProps>`
  font-size: 2.1rem;
  ${baseStyles}
`;

export const H6 = styled.h6<HeaderProps>`
  font-size: 1.8rem;
  ${baseStyles}
`;
