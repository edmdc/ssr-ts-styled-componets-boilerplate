import React from "react";
// import { Route, Switch } from 'react-router-dom';
// import Home from "../../components/Home/Home";
// import NotFound from "../../components/Common/NotFound";
import IdeaForm from "../../modules/IdeaForm/IdeaForm";
import GlobalStyle from "../../ui/common/globalStyle";
import { darkTheme } from "../../ui/common/colors";

const App = (): JSX.Element => (
  <React.Fragment>
    <GlobalStyle />

    <div
      style={{
        backgroundColor: `rgba(${darkTheme.bg},1)`,
        color: `rgba(${darkTheme.textLight},1)`,
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <h1>Hello World</h1>
      <IdeaForm />
    </div>
  </React.Fragment>
);

export default App;

// <Switch>
//   <Route path="/" exact component={Home}></Route>
//   <Route component={NotFound} />
// </Switch>
