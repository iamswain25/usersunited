import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Threads from "./components/Threads";
import Join from "./components/Join";
import User from "./components/User";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Threads} />
        <Route path="/join" component={Join} />
        <Route path="/user" component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
