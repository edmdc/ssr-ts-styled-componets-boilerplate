import React from "react";
import styled, {
  ColorChoices,
  ColorPalette,
  DefaultTheme,
} from "styled-components";
import { thinShadow } from "../common/boxShadows";
import { getColor, getModeColors } from "../utilities/ColorHandlers";

interface InputProps {
  id: string;
  label: string;
  value: string;
  changeHandler: React.Dispatch<React.SetStateAction<string>>;
  colors: ColorPalette;
  theme: DefaultTheme;
  noLabelDisplay?: boolean;
  onFocusShadowColor?: ColorChoices;
  className?: string;
}

const inputBase = (props: InputProps): JSX.Element => {
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

export const Input = styled(inputBase).attrs((props) => ({
  colors: getModeColors(props.theme),
  onFocusShadowColor: props.onFocusShadowColor
    ? getColor(props.theme, props.onFocusShadowColor)
    : getColor(props.theme, "gray"),
}))`
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
    border: 0.2rem solid ${(props) => props.colors.black};
    ${thinShadow}

    &:focus {
      box-shadow: 0 0 0.5rem 0.3rem ${(props) => props.onFocusShadowColor};
    }
  }

  label {
    font-family: "Fira Sans", sans-serif;
    margin-bottom: 0.3rem;
    font-size: 1.8rem;
  }
`;
