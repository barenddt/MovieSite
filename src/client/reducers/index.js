import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// Create Store
export const rootReducer = combineReducers({
  routing: routerReducer
});
