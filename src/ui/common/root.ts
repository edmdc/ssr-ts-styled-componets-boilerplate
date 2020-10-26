import styled from "styled-components";

const Root = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.textLight};
  height: 100vh;
  overflow-y: hidden;
`;

export default Root;
