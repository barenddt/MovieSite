import React, { Component } from "react";
import { throttle, debounce } from "throttle-debounce";

export default class Home extends Component {
  _queryChange(e) {
    // fetch("/api/search", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     s: "halo",
    //     type: "gamde"
    //   })
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res.Search[0]));
  }

  render() {
    return <div className="home" />;
  }
}
