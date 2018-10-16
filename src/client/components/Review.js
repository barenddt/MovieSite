import React, { Component } from "react";
import { history } from "../reducers/store";
import moment from "moment";

export default class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let review = this.props.data;
    return (
      <div className="review">
        <div className="review-top">
          <div className="review-score">{review.rating.toString()}</div>
          <div className="review-top-right">
            <div className="review-title">{review.title}</div>
            <div className="review-metadata">
              By:{" "}
              <a
                className="review-user"
                onClick={() => history.push("/user/mooshy")}
              >
                {review.username}
              </a>{" "}
              | Date: {moment(review.date).format("MMMM Do YYYY")}
            </div>
          </div>
        </div>
        <div className="review-content">{review.content}</div>
      </div>
    );
  }
}
