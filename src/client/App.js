import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import Title from "./components/Title";
import { history } from "./reducers/store";
import "normalize.css";
import "./app.scss";
import "./scss/flexboxgrid.min.css";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:title" component={Title} />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}
