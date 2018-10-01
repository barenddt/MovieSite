import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/">
          <img
            className="head-title"
            src="https://darkzero.co.uk/wp-content/themes/DarkZero/img/logos/metacritic.png"
          />
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
