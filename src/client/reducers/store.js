import { rootReducer } from ".";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

let initialState = {};

export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(applyMiddleware(routerMiddleware(history), thunk))
);
