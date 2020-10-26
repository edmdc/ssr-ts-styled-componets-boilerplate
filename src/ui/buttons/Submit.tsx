import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  height: 2.4rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.textLight};
  background-color: ${(props) => props.theme.colors.main};
  padding: 0.8rem;
`;

interface SubmitButtonProps {
  submissionHadler: (event: React.FormEvent<HTMLElement>) => void;
}

const Submit = (): JSX.Element => {
  return <SubmitButton type="submit">Submit</SubmitButton>;
};

export default Submit;
