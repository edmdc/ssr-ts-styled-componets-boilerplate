import React from "react";
import styled from "styled-components";

interface StripedDivProps {
  size: string;
  bg: string;
  bg2: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  width: string;
  height: string;
}

interface BoxProps {
  children: JSX.Element | JSX.Element[];
  width: string;
  height: string;
}

const StripedDiv = styled.div<StripedDivProps>`
  margin: 0 auto;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.size};
  border: ${(props) => props.size} solid transparent;
  border-radius: 0.4rem;
  box-shadow: 5px 5px 21px black;
  background: radial-gradient(
        ${(props) => props.bg} 35%,
        ${(props) => props.bg2} 85%
      )
      padding-box,
    repeating-linear-gradient(
        -45deg,
        ${(props) => props.color1} 0,
        ${(props) => props.color1} 12.5%,
        ${(props) => props.color2} 0,
        ${(props) => props.color2} 25%,
        ${(props) => props.color3} 0,
        ${(props) => props.color3} 37.5%,
        ${(props) => props.color4} 0,
        ${(props) => props.color4} 50%
      )
      0 / 2.1em 2.1em;
`;

export const ThinStripedBox = ({
  children,
  width,
  height,
}: BoxProps): JSX.Element => {
  return (
    <StripedDiv
      size=".5rem"
      bg="#fbf1c7"
      bg2="#ebdbb2"
      color1="rgba(40,40,40,1)"
      color2="rgba(60,56,54,1)"
      color3="rgba(80,73,69,1)"
      color4="#928374"
      width={width}
      height={height}
    >
      {children}
    </StripedDiv>
  );
};
