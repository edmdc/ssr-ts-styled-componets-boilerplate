import React from "react";
import { palette } from "../../ui/common/colors";
import { beautifyBorder } from "../common/mixin";

interface FormProps {
  children: JSX.Element[];
}

const Form = (props: FormProps): JSX.Element => {
  const borderOptions = {
    size: ".4rem",
    bg1: palette.white1,
    bg2: palette.white2,
    color1: palette.gray,
    color2: palette.gray1,
    color3: palette.gray2,
    color4: palette.gray,
  };
  const { className, styles } = beautifyBorder(borderOptions);
  return (
    <form
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        width: "50%",
        margin: "0 auto",
        alignItems: "center",
        color: `rgba(${palette.black},1)`,
      }}
      className={className}
    >
      {props.children}
      <style>{styles}</style>
    </form>
  );
};

export default Form;
