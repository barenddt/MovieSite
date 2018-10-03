import {
  SEARCH_TITLES,
  IS_SEARCHING,
  CLEAR_SEARCH,
  SELECT_TITLE
} from "../actions/types";

const initialState = {
  titles: null,
  isSearching: false,
  selectedTitle: null
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
    case CLEAR_SEARCH:
      state.titles = action.payload.titles;
      state.selectedTitle = action.payload.selectedTitle;
      return { ...state };
    case SELECT_TITLE:
      state.selectedTitle = action.payload.selectedTitle;
      return { ...state };
    default:
      return { ...state };
  }
}
