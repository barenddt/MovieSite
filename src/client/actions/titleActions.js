import { GET_REVIEWS, POST_REVIEW } from "../actions/types";
import axios from "axios";

export const getReviews = e => dispatch => {
  axios.get(`/api/reviews/${e}`).then(result => {
    dispatch({
      type: GET_REVIEWS,
      payload: {
        reviews: result.data.reviews
      }
    });
  });
};

export const postReview = ({
  username,
  title,
  content,
  rating,
  movieId
}) => dispatch => {
  axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    "jwtToken"
  );
  axios
    .post(`/api/actions/review`, { username, title, content, rating, movieId })
    .then(result => {
      if (result.data.success) {
        axios.get(`/api/reviews/${movieId}`).then(result => {
          dispatch({
            type: GET_REVIEWS,
            payload: {
              reviews: result.data.reviews
            }
          });
        });
      }
    });
};
