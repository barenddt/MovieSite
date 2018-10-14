import { GET_REVIEWS } from "../actions/types";

let initialState = {
  reviews: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEWS:
      state.reviews = action.payload.reviews;
      return { ...state };
    default:
      return { ...state };
  }
}
