import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      isSearching: false,
      titles: null
    };
  }

  _makeSearchbox() {
    if (this.state.titles == null) {
      return <p>No titles found.</p>;
    } else {
      let titles = [];
      this.state.titles.map((title, index) => {
        if (titles.length != 5) {
          titles.push(
            <div key={title.imdbID} className="title-item">
              <img className="poster" src={title.Poster} />
              {title.Title}
            </div>
          );
        }
      });
      return titles;
    }
  }

  _queryTitles(e) {
    this.setState({ query: e.target.value, isSearching: true });
    fetch("/api/search", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        s: e.target.value,
        type: ""
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ titles: res.Search, isSearching: false });
      });
  }

  render() {
    let { isSearching, query } = this.state;

    return (
      <div className="header">
        <a href="/">
          <img
            className="head-title"
            src="https://darkzero.co.uk/wp-content/themes/DarkZero/img/logos/metacritic.png"
          />
        </a>
        <div className="search-box">
          <DebounceInput
            minLength={1}
            debounceTimeout={300}
            className="search-bar"
            onChange={e => this._queryTitles(e)}
            placeholder="Search for Movies, TV Shows & Video Games"
          />
          {isSearching ? (
            <div className="search-results-box">
              <div className="spinner">
                <div className="bounce1" />
                <div className="bounce2" />
                <div className="bounce3" />
              </div>
            </div>
          ) : query != "" ? (
            <div className="search-results-box">{this._makeSearchbox()}</div>
          ) : null}
        </div>
        <div className="right-menu">
          <div className="login-btn-header">Login</div>
          <div className="login-btn-header">Get Started</div>
        </div>
      </div>
    );
  }
}
