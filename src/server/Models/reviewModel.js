const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  movieId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Review", ReviewSchema);
