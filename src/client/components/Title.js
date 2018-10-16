import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTitle } from "../actions/searchActions";
import { getReviews, postReview } from "../actions/titleActions";
import Review from "../components/Review";
import { history } from "../reducers/store";

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      rating: 50,
      content: null
    };
  }

  componentDidMount() {
    let titleID = this.props.match.params.title;
    if (!this.props.search.selectedTitle) {
      this.props.selectTitle(titleID);
    }
    this.props.getReviews(titleID);
  }

  _onInputChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  _submitReview() {
    let state = this.state;

    let payload = {
      username: localStorage.getItem("username"),
      title: state.title,
      rating: state.rating,
      content: state.content,
      movieId: this.props.match.params.title
    };

    this.props.postReview(payload);
  }

  _makeReviews() {
    let reviews = [];
    this.props.reviews.map((item, i) => {
      reviews.push(<Review key={i} data={item} />);
    });
    return reviews;
  }

  render() {
    let title = this.props.search.selectedTitle;
    return (
      <div className="container">
        {title ? (
          <div className="row">
            <div className="col-md-8 title-left">
              <img className="poster-title" src={title.Poster} />
              <div className="title-left-right">
                <h3>{title.Title}</h3>
                <p className="rated">
                  <span>{title.Rated}</span>
                  {` ${title.Production} | Released: ${title.Released}`}
                </p>
                <p className="desc-item">
                  <span>Summary:</span> {title.Plot}
                </p>
                <p className="desc-item">
                  <span>Director:</span> {title.Director}
                </p>
                <p className="desc-item">
                  <span>Starring:</span> {title.Actors}
                </p>
                <p className="desc-item">
                  <span>Writers:</span> {title.Writer}
                </p>
                <p className="desc-item">
                  <span>Runtime:</span> {title.Runtime}
                </p>
                <p className="desc-item">
                  <span>Genre:</span> {title.Genre}
                </p>
                <p className="desc-item">
                  <span>Awards:</span> {title.Awards}
                </p>
                <p className="desc-item">
                  <span>Box Office:</span> {title.BoxOffice}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="title-right">
                <div className="score">
                  <div className="num num-beta">{title.Metascore}</div>
                  Metascore
                </div>
                <div className="score">
                  <div className="num num-imdb">{title.imdbRating}</div>
                  IMDb Rating
                </div>
                <div className="score">
                  <div className="num num-rt">
                    {title.Ratings[1]
                      ? title.Ratings[1].Value.replace("%", "")
                      : "N/A"}
                  </div>
                  Rotten Tomatoes
                </div>
              </div>
            </div>
            <div className="reviews">
              <div className="row">
                <div className="col-md-6">
                  <h1>User Reviews</h1>
                  <hr />
                  <br />
                  {this.props.reviews != null ? (
                    this._makeReviews()
                  ) : (
                    <p>No reviews</p>
                  )}
                </div>
                <div className="col-md-6">
                  <h1>Write a Review</h1>
                  <hr />
                  <br />
                  {localStorage.getItem("jwtToken") ? (
                    <div>
                      <input
                        className="review-input"
                        placeholder="Title"
                        name="title"
                        onChange={e => this._onInputChange(e)}
                      />
                      <input
                        className="review-slider"
                        type="range"
                        min="1"
                        max="100"
                        name="rating"
                        defaultValue="50"
                        onChange={e => this._onInputChange(e)}
                      />
                      <textarea
                        className="review-input"
                        name="content"
                        placeholder="Content"
                        onChange={e => this._onInputChange(e)}
                      />
                      <br />
                      <a
                        onClick={() => this._submitReview()}
                        className="form-btn"
                      >
                        Submit
                      </a>
                    </div>
                  ) : (
                    <p>
                      <span
                        onClick={() => history.push("/login")}
                        className="link"
                      >
                        Login {""}
                      </span>
                      or {""}
                      <span
                        onClick={() => history.push("/register")}
                        className="link"
                      >
                        Register {""}
                      </span>
                      to write a review.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
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
  search: state.search,
  reviews: state.reviews.reviews
});

const mapDispatchToProps = dispatch => ({
  selectTitle: e => dispatch(selectTitle(e)),
  getReviews: e => dispatch(getReviews(e)),
  postReview: e => dispatch(postReview(e))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
