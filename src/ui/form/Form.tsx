import React from "react";
import { darkTheme } from "../../ui/common/colors";

interface FormProps {
  children: JSX.Element[];
}

const Form = (props: FormProps): JSX.Element => {
  return (
    <form
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        width: "50%",
        margin: "0 auto",
        alignItems: "center",
        backgroundColor: darkTheme.bgInverse,
        color: darkTheme.textDark,
      }}
    >
      {props.children}
    </form>
  );
};

export default Form;
