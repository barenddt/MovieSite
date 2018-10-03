import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import searchReducer from "./searchReducer";

// Create Store
export const rootReducer = combineReducers({
  search: searchReducer,
  routing: routerReducer
});
