import { GET_NEWS } from "../actions/types";

export const getNews = e => dispatch => {
  fetch("/api/news", {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: GET_NEWS,
        payload: {
          news: res
        }
      });
    });
};
