import React from "react";
import styled from "styled-components";
import { thinShadow } from "../common/boxShadows";

interface InputProps {
  id: string;
  label: string;
  value: string;
  changeHandler: React.Dispatch<React.SetStateAction<string>>;
  noLabelDisplay?: boolean;
  className?: string;
}

const inputBase: React.FC<InputProps> = (props) => {
  const { id, label, value, changeHandler, className, noLabelDisplay } = props;

  return (
    <div className={className}>
      {!noLabelDisplay && <label htmlFor={id}>{label}:</label>}
      <input
        id={id}
        value={value}
        onChange={(event) => changeHandler(event.target.value)}
        placeholder={noLabelDisplay ? label : ""}
        aria-label={id}
      />
    </div>
  );
};

const Input = styled(inputBase)`
  display: flex;
  flex-flow: column nowrap;
  width: 65%;
  font-size: 1.6rem;
  align-items: left;
  margin: 0.3rem;
  padding: 0.6rem;

  input {
    height: ${(props) => (props.noLabelDisplay ? "3.7rem" : "3.1rem")};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 0.4rem;
    font-size: ${(props) => (props.noLabelDisplay ? "2.1rem" : "1.8rem")};
    font-family: "Ubuntu", sans-serif;
    font-weight: 200;
    border: 0.2rem solid ${(props) => props.theme.colors.black};
    ${thinShadow}

    &:focus {
      box-shadow: 0 0 0.5rem 0.3rem ${(props) => props.theme.onFocusHighlight};
    }
  }

  label {
    font-family: "Fira Sans", sans-serif;
    margin-bottom: 0.3rem;
    font-size: 1.8rem;
  }
`;

export default Input;
