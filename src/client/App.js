import React, { Component } from "react";
import "./app.scss";
import ReactImage from "./react.png";

export default class App extends Component {
  state = { username: null };

  // componentDidMount() {
  //   fetch("/api/search", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       s: "halo",
  //       type: "gamde"
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res.Search[0]));
  // }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? (
          <h1>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
