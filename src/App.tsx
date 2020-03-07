import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";

import { Header } from "./components/header";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Users } from "./pages/users";

const App: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.container}>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const useStyles = makeStyles({
  container: {
    background: "linear-gradient(45deg, #CDE0C9 30%, #2C6975 90%)",
    height: "100vh"
  }
});
export default App;
