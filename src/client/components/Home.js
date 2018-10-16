import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/homeActions";
import Article from "./Article";
import Review from "./Review";

class Home extends Component {
  componentDidMount() {
    !this.props.home.news ? this.props.getNews() : null;
  }

  render() {
    return (
      <div className="container">
        <h1 className="home-title">In Entertainment</h1>
        {this.props.home.news ? (
          <div className="row">
            <div className="col-md-8">{this._makeNews()}</div>
            {/* <div className="col-md-4">{this._makeReviews()}</div> */}
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

  _makeNews() {
    let articles = [];
    this.props.home.news.articles.map((article, i) => {
      articles.push(<Article key={i} data={article} />);
    });
    return articles;
  }

  _makeReviews() {
    return <Review />;
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
