import {
  SEARCH_TITLES,
  IS_SEARCHING,
  CLEAR_SEARCH,
  SELECT_TITLE
} from "./types";

export const searchTitles = e => dispatch => {
  fetch("/api/search", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      s: e.target.value,
      type: ""
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: SEARCH_TITLES,
        payload: {
          titles: res.Search,
          isSearching: false
        }
      });
    });
};

export const selectTitle = e => dispatch => {
  fetch("/api/title", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: e
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch({
        type: SELECT_TITLE,
        payload: {
          selectedTitle: res
        }
      });
    });
};

export const isSearching = e => dispatch => {
  dispatch({
    type: IS_SEARCHING,
    payload: {
      isSearching: e
    }
  });
};

export const clearSearch = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH,
    payload: {
      titles: null,
      selectedTitle: null
    }
  });
};
