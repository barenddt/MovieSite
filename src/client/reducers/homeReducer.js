import { GET_NEWS } from "../actions/types";

const initialState = {
  news: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      state.news = action.payload.news;
      return { ...state };
    default:
      return { ...state };
  }
}
