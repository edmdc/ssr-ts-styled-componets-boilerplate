import React from "react";
import styled from "styled-components";
import { softShadow, darkShadow } from "../common/boxShadows";

interface SubmitButtonProps {
  text?: string;
  width?: string;
}

const SubmitButton = styled.button<SubmitButtonProps>`
  height: 3.3rem;
  width: ${(props) => props.width};
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.textLight};
  background-color: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.borderRadius};
  ${softShadow}

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0 0.4rem 0.3rem
        ${(props) => (props.color ? props.color : props.theme.colors.green)},
      0.3rem 0.5rem 1.7rem rgba(40, 40, 40, 0.7);
  }
`;

const Submit = ({ text, width }: SubmitButtonProps): JSX.Element => {
  return (
    <SubmitButton type="submit" width={width || "40%"}>
      {text || "Submit"}
    </SubmitButton>
  );
};

export default Submit;
