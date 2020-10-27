import React from "react";
import styled from "styled-components";
import { useStripedBorder, foregroundGradient } from "../common/mixin";
import { getModeColors } from "../utilities/ColorHandlers";

interface FormProps {
  children: JSX.Element[];
  submissionHandler: (e: React.FormEvent<HTMLElement>) => void;
  useStripedBorder: boolean;
}

const Form: React.FC<FormProps> = ({ children, submissionHandler }) => (
  <form onSubmit={(event) => submissionHandler(event)}>{children}</form>
);

export const StyledForm = styled(Form).attrs((props) => ({
  colors: () => getModeColors(props.theme),
}))`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  border: 0.4rem solid transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.text.dark};
  ${(props) => (props.useStripedBorder ? useStripedBorder : foregroundGradient)}
`;
