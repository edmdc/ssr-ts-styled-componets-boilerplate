import styled from "styled-components";
import { softShadow } from "../common/boxShadows";
import { getHighlightColor, getModeColors } from "../utilities/ColorHandlers";

const Submit = styled.button.attrs((props) => ({
  colors: getModeColors(props.theme),
  type: "submit",
  highlightColor: getHighlightColor(props.theme),
}))`
  height: 3.3rem;
  font-size: 1.8rem;
  background-color: ${(props) => props.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  ${softShadow}

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0 0.4rem 0.3rem ${(props) => props.highlightColor},
      0.3rem 0.5rem 1.7rem rgba(40, 40, 40, 0.7);
  }
`;

export default Submit;
