import { SEARCH_TITLES, IS_SEARCHING } from "../actions/types";

const initialState = {
  titles: null,
  isSearching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TITLES:
      state.titles = action.payload.titles;
      state.isSearching = action.payload.isSearching;
      return { ...state };
    case IS_SEARCHING:
      state.isSearching = action.payload.isSearching;
      return { ...state };
    default:
      return { ...state };
  }
}
