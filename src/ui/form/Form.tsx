import React from "react";
import styled from "styled-components";
import { ThinStripedBox } from "../borders/StripedBorder";

interface FormProps {
  children: JSX.Element[];
  submissionHadler: (event: React.FormEvent<HTMLElement>) => void;
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  border: 0.4rem solid transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.textDark};
  background: ${(props) => props.theme.colors.secondary};
`;

const Form = (props: FormProps): JSX.Element => {
  return (
    <ThinStripedBox width="45rem" height="25rem">
      <StyledForm onSubmit={(event) => props.submissionHadler(event)}>
        {props.children}
      </StyledForm>
    </ThinStripedBox>
  );
};

export default Form;
