import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = () => {
    const { username, password } = this.state;
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <div className="container form">
        <div className="form-title">Login</div>
        <div className="form-box">
          <input
            className="form-input"
            id="username"
            name="username"
            placeholder="Username"
            required
            onChange={this.onChange}
          />
          <input
            className="form-input"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={this.onChange}
          />
          <a onClick={() => this.onSubmit()} className="form-btn">
            Login
          </a>
          <p className="msg">{this.props.auth.login.msg}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  loginUser: e => dispatch(loginUser(e))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
