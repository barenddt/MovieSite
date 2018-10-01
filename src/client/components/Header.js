import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/" className="head-title">
          metacritic
        </a>
        <input
          className="searchbar"
          onChange={e => this._queryChange(e)}
          placeholder="Search for Movies, TV Shows & Video Games"
        />
        <div className="login-btn-header">Login</div>
      </div>
    );
  }
}
