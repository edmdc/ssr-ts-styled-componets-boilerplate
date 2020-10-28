import styled from "styled-components";
import { clearfix } from "../common/mixin";

interface RowProps {
  maxWidth?: string;
  height?: string;
}

// prettier-ignore
const Cell = styled.div<RowProps>`
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius};
  height: ${(props) => props.height || "6.6rem"};
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

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.gridGap};
  }

  &:first-child {
    margin-top: 3rem;
  }

  ${clearfix}

  ${Cell} {
    float: left;

    &:not(:last-child) {
      margin-right: ${(props) => props.theme.gridGap};
    }
  }

  ${HalfCell} {
    width: calc((100% - ${(props) => props.theme.gridGap}) / 2);
  }

  ${ThirdCell} {
    width: calc((100% - 2 * ${(props) => props.theme.gridGap}) / 3);
  }

  ${TwoThirdCell} {
    width: calc(
      2 * ((100% - 2 * ${(props) => props.theme.gridGap}) / 3) +
        ${(props) => props.theme.gridGap}
    );
  }

  ${FourthCell} {
    width: calc((100% - 3 * ${(props) => props.theme.gridGap}) / 4);
  }

  ${TwoFourthCell} {
    width: calc(
      2 * ((100% - 3 * ${(props) => props.theme.gridGap}) / 4) +
        ${(props) => props.theme.gridGap}
    );
  }

  ${ThreeFourthCell} {
    width: calc(
      3 * ((100% - 3 * ${(props) => props.theme.gridGap}) / 4) +
        (2 * ${(props) => props.theme.gridGap})
    );
  }
`;
