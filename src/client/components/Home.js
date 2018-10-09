import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/homeActions";
import Article from "./Article";

class Home extends Component {
  componentDidMount() {
    this.props.getNews();
  }

  _makeNews() {
    let articles = [];
    this.props.home.news.articles.map(article => {
      console.log(article);
      articles.push(<Article data={article} />);
    });
    return articles;
  }

  render() {
    return (
      <div className="container">
        <h1 className="home-title">News in Entertainment</h1>
        {this.props.home.news ? (
          <div className="row">
            <div className="col-md-8">{this._makeNews()}</div>
          </div>
        ) : (
          <div className="spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch => ({
  getNews: e => dispatch(getNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
