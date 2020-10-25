import React from "react";

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
        alignItems: "center",
      }}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id="title"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default Input;
