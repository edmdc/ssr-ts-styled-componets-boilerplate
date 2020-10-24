import React from "react";
import { Route, Switch } from 'react-router-dom';
// import Home from "../../components/Home/Home";
// import NotFound from "../../components/Common/NotFound";
import IdeaForm from '../../modules/IdeaForm/IdeaForm';

const App = (): JSX.Element => (
  <div>
    <h1>
      Hello World
    </h1>
    <IdeaForm />
    // <Switch>
    //   <Route path="/" exact component={Home}></Route>
    //   <Route component={NotFound} />
    // </Switch>
  </div>
);

export default App;
