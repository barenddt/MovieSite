import { SEARCH_TITLES, IS_SEARCHING } from "./types";

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

export const isSearching = e => dispatch => {
  dispatch({
    type: IS_SEARCHING,
    payload: {
      isSearching: e
    }
  });
};
