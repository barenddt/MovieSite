import React, { Component } from "react";
import { connect } from "react-redux";

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        {this.props.search.selectedTitle ? (
          this.props.search.selectedTitle.Title
        ) : (
          <div className="loading-container">
            <div className="spinner">
              <div className="bounce1" />
              <div className="bounce2" />
              <div className="bounce3" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

export default connect(mapStateToProps)(Title);
