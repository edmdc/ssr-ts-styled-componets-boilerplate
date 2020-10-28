import React from "react";
import { ThemeProvider } from "styled-components";
import IdeaCards from "../../modules/IdeaCards/IdeaCards";
import IdeaForm from "../../modules/IdeaForm/IdeaForm";
import GlobalStyle from "../../ui/common/globalStyle";
import { getGruvBoxTheme } from "../../ui/common/themes";

const App = (): JSX.Element => (
  <ThemeProvider theme={getGruvBoxTheme("light")}>
    <GlobalStyle />
    <IdeaForm />
    <IdeaCards />
  </ThemeProvider>
);

export default App;
