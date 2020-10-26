import React from "react";
import { Row, HalfCell, ThirdCell } from "../../ui/layout/grid";

const IdeaCards = (): JSX.Element => (
  <div>
    <Row>
      <HalfCell>Hello</HalfCell>
      <HalfCell>World</HalfCell>
    </Row>
    <Row>
      <ThirdCell />
      <ThirdCell />
      <ThirdCell />
    </Row>
  </div>
);

export default IdeaCards;
