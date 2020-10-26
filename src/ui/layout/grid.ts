import styled from "styled-components";
import { clearfix } from "../common/mixin";

interface RowProps {
  maxWidth?: string;
}

const Cell = styled.div`
  background-color: black;
  height: 2rem;
`;

export const HalfCell = styled(Cell)``;
export const ThirdCell = styled(Cell)``;
export const TwoThirdCell = styled(Cell)``;
export const FourthCell = styled(Cell)``;
export const TwoFourthCell = styled(Cell)``;
export const ThreeFourthCell = styled(Cell)``;

export const Row = styled.div<RowProps>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "60rem")};
  margin: 0 auto;
  background-color: white;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }

  ${clearfix}

  ${Cell} {
    float: left;

    &:not(:last-child) {
      margin-right: ${(props) => props.theme.gutterHorizontal};
    }
  }

  ${HalfCell} {
    width: calc((100% - ${(props) => props.theme.gutterHorizontal}) / 2);
  }

  ${ThirdCell} {
    width: calc((100% - 2 * ${(props) => props.theme.gutterHorizontal}) / 3);
  }

  ${TwoThirdCell} {
    width: calc(
      2 * ((100% - 2 * ${(props) => props.theme.gutterHorizontal}) / 3) +
        ${(props) => props.theme.gutterHorizontal}
    );
  }

  ${FourthCell} {
    width: calc((100% - 3 * ${(props) => props.theme.gutterHorizontal}) / 4);
  }

  ${TwoFourthCell} {
    width: calc(
      2 * ((100% - 3 * ${(props) => props.theme.gutterHorizontal}) / 4) + #${(props) => props.theme.gutterHorizontal}
    );
  }

  ${ThreeFourthCell} {
    width: calc(
      3 * ((100% - 3 * ${(props) => props.theme.gutterHorizontal}) / 4) +
        (2 * ${(props) => props.theme.gutterHorizontal})
    );
  }
`;
