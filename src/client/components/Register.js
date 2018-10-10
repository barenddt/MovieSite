import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="container form">
        <div className="form-title">Register</div>
        <form className="form-box">
          <input
            className="form-input"
            id="username"
            name="username"
            placeholder="Username"
          />
          <input
            className="form-input"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <input
            className="form-input"
            id="password2"
            name="password2"
            type="password"
            placeholder="Confirm Password"
          />
          <input
            className="form-input"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <a className="form-btn">Register</a>
        </form>
      </div>
    );
  }
}
