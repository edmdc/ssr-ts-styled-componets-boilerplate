import React from "react";
import styled from "styled-components";
import { thinShadow } from "../common/boxShadows";

interface InputProps {
  id: string;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  noLabelDisplay?: boolean;
}

type StyledInputProps = {
  color?: string;
  noLabelDisplay?: boolean;
};

const InputDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 65%;
  font-size: 1.6rem;
  align-items: left;
  margin: 0.3rem;
  padding: 0.6rem;
`;

const StyledInput = styled.input<StyledInputProps>`
  height: ${(props) => (props.noLabelDisplay ? "3.7rem" : "3.1rem")};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.4rem;
  font-size: ${(props) => (props.noLabelDisplay ? "2.1rem" : "1.8rem")};
  font-family: "Ubuntu", sans-serif;
  font-weight: 200;
  border: 0.2rem solid
    ${(props) => (props.color ? props.color : props.theme.colors.black)};
  ${thinShadow}

  &:focus {
    box-shadow: 0 0 0.5rem 0.3rem
      ${(props) => (props.color ? props.color : props.theme.colors.gray)};
  }
`;

const InputLabel = styled.label`
  font-family: "Fira Sans", sans-serif;
  margin-bottom: 0.3rem;
  font-size: 1.8rem;
`;

const Input = (props: InputProps): JSX.Element => {
  const { id, label, value, setValue, noLabelDisplay } = props;

  return (
    <InputDiv>
      {!noLabelDisplay && <InputLabel htmlFor={id}>{label}:</InputLabel>}
      <StyledInput
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={noLabelDisplay ? label : ""}
        aria-label={id}
        noLabelDisplay={noLabelDisplay}
      />
    </InputDiv>
  );
};

export default Input;
