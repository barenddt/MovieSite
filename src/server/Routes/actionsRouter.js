const express = require("express");
const Review = require("../Models/reviewModel");

function Actions(actionRoutes = express.Router()) {
  actionRoutes.route("/review").post((req, res) => {
    let { username, title, content, rating, movieId } = req.body;

    let review = new Review({
      username,
      title,
      content,
      rating,
      movieId
    });

    review.save((err, review) => {
      if (err) throw err;

      if (review) {
        res.json({
          success: true,
          msg: "Review posted successfully"
        });
      } else {
        res.json({
          success: false,
          msg: "an error occured while posting your review."
        });
      }
    });
  });

  return actionRoutes;
}

module.exports = Actions();
