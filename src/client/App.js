import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import Title from "./components/Title";
import Register from "./components/Register";
import Login from "./components/Login";
import { history } from "./reducers/store";
import "normalize.css";
import "./app.scss";
import "./scss/flexboxgrid.min.css";

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/id/:title"
            render={props => (
              <Title key={props.match.params.title} {...props} />
            )}
          />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </ConnectedRouter>
    );
  }
}
