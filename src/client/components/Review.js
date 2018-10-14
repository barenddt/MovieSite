import React, { Component } from "react";
import { history } from "../reducers/store";

export default class Review extends Component {
  render() {
    return (
      <div className="review">
        <div className="review-top">
          <div className="review-score">89</div>
          <div className="review-top-right">
            <div className="review-title">Greatest movie ever!</div>
            <div className="review-metadata">
              By:{" "}
              <a
                className="review-user"
                onClick={() => history.push("/user/mooshy")}
              >
                Mooshy
              </a>{" "}
              | Date: October 4th
            </div>
          </div>
        </div>
        <div className="review-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    );
  }
}
