import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";
import { connect } from "react-redux";
import {
  searchTitles,
  isSearching,
  clearSearch,
  selectTitle
} from "../actions/searchActions";
import logo from "../logo.png";
import { history } from "../reducers/store";
import { Spring } from "react-spring";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  _makeSearchbox() {
    if (this.props.search.titles == null) {
      return <p>No titles found.</p>;
    } else {
      let titles = [];
      this.props.search.titles.map((title, index) => {
        if (titles.length != 5) {
          titles.push(
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={100}
              key={title.imdbID}
            >
              {styles => (
                <div
                  onClick={() => this._selectTitle(title)}
                  className="title-item"
                  style={styles}
                >
                  <img className="poster" src={title.Poster} />
                  {title.Title}
                </div>
              )}
            </Spring>
          );
        }
      });
      return titles;
    }
  }

  _selectTitle(title) {
    history.push(`/${title.Title}`);
    this.props.clearSearch();
    this.setState({ query: "" });
    this.props.selectTitle(title.imdbID);
  }

  _queryTitles(e) {
    this.setState({ query: e.target.value });
    this.props.isSearching(true);
    this.props.searchTitles(e);
  }

  render() {
    let { query } = this.state;

    return (
      <div className="header">
        <a onClick={() => history.push("/")}>
          <img className="head-title" src={logo} />
        </a>
        <div className="search-box">
          <DebounceInput
            minLength={1}
            debounceTimeout={300}
            className="search-bar"
            value={this.state.query}
            onChange={e => this._queryTitles(e)}
            placeholder="Search for Movies, TV Shows & Video Games"
          />
          {this.props.search.isSearching ? (
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
          <div className="create-btn-header">+ Create Account</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  searchTitles: e => dispatch(searchTitles(e)),
  isSearching: e => dispatch(isSearching(e)),
  clearSearch: () => dispatch(clearSearch()),
  selectTitle: e => dispatch(selectTitle(e))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
