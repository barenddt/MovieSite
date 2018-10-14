import { GET_REVIEWS } from "../actions/types";
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
