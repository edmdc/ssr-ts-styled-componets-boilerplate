import React from "react";
import {
  Row,
  HalfCell,
  ThirdCell,
  FourthCell,
  TwoFourthCell,
  TwoThirdCell,
} from "../../ui/layout/grid";
import { H1, H2, H3, H4, H5, H6 } from "../../ui/common/typography";

const IdeaCards = (): JSX.Element => (
  <div>
    <Row>
      <HalfCell>
        <H1>Heading 1</H1>
      </HalfCell>
      <HalfCell>
        <H2>Heading 2</H2>
      </HalfCell>
    </Row>
    <Row>
      <ThirdCell>
        <H3>Heading 3</H3>
      </ThirdCell>
      <ThirdCell>
        <H4 thin useBodyText italic>
          Heading 4
        </H4>
      </ThirdCell>
      <ThirdCell>
        <H5>Heading 5</H5>
      </ThirdCell>
    </Row>
    <Row>
      <FourthCell>
        <H6>Heading 6</H6>
      </FourthCell>
      <TwoFourthCell>
        <H2 useBodyText>Body Text H2</H2>
      </TwoFourthCell>
      <FourthCell>
        <H5 thin>Heading 5</H5>
      </FourthCell>
    </Row>
    <Row>
      <ThirdCell>
        <H3 useBodyText italic>
          Body Text I H3
        </H3>
      </ThirdCell>
      <TwoThirdCell>
        <H1 italic thin>
          Thin Italic H1
        </H1>
      </TwoThirdCell>
    </Row>
  </div>
);

export default IdeaCards;
