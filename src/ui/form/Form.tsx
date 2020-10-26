import React from "react";
import { palette } from "../../ui/common/colors";
import { ThinStripedBox } from "../borders/StripedBorder";

interface FormProps {
  children: JSX.Element[];
}

const Form = (props: FormProps): JSX.Element => {
  return (
    <ThinStripedBox width="45rem" height="25rem">
      <form
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          margin: "0 auto",
          alignItems: "center",
          color: `rgba(${palette.black},1)`,
        }}
      >
        {props.children}
      </form>
    </ThinStripedBox>
  );
};

export default Form;
