import React from "react";
import { ThemeProvider } from "styled-components";
import IdeaCards from "../../modules/IdeaCards/IdeaCards";
import IdeaForm from "../../modules/IdeaForm/IdeaForm";
import GlobalStyle from "../../ui/common/globalStyle";
import { darkTheme } from "../../ui/common/themes";

const App = (): JSX.Element => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <h1>Hello World</h1>
    <IdeaForm />
    <IdeaCards />
  </ThemeProvider>
);

export default App;
