import React from "react";
import { palette } from "../../ui/common/colors";

interface InputProps {
  id: string;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = (props: InputProps): JSX.Element => {
  const { id, label, value, setValue } = props;

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        width: "50%",
        fontSize: "1.6rem",
        alignItems: "left",
        margin: "1rem",
      }}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id="title"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        style={{
          borderRadius: ".4rem",
          boxShadow: `0 1rem 2rem rgba(${palette.black1}, .2)`,
        }}
      />
    </div>
  );
};

export default Input;
