import styled from "styled-components";

interface StripedDivProps {
  size: string;
  width: string;
  height: string;
}

export const StripedDiv = styled.div<StripedDivProps>`
  margin: 0 auto;
  max-width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.theme.borderSize} solid transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 5px 5px 21px black;
`;
