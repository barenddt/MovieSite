import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { syncHistoryWithStore } from "react-router-redux";
import { rootReducer } from ".";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

const tempHistory = createHistory();

export const history = syncHistoryWithStore(tempHistory, store);
