import styled from "styled-components";
import { softShadow } from "../common/boxShadows";

interface ButtonProps {
  width?: string;
}

const baseButton = styled.button.attrs((props: ButtonProps) => ({
  width: props.width || "45%",
}))`
  height: 3.3rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.text.light};
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  ${softShadow}
`;

const Submit = styled(baseButton)`
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0 0.4rem 0.3rem ${(props) => props.theme.onFocusHighlight},
      0.3rem 0.5rem 1.7rem rgba(40, 40, 40, 0.7);
  }
`;

export default Submit;
