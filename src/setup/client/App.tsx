import React from "react";
import { ThemeProvider } from "styled-components";
import IdeaForm from "../../modules/IdeaForm/IdeaForm";
import GlobalStyle from "../../ui/common/globalStyle";
import Root from "../../ui/common/root";
import { darkTheme } from "../../ui/common/themes";

const App = (): JSX.Element => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <Root>
      <h1>Hello World</h1>
      <IdeaForm />
    </Root>
  </ThemeProvider>
);

export default App;
