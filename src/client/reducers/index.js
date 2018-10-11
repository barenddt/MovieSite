import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import searchReducer from "./searchReducer";
import homeReducer from "./homeReducer";
import authReducer from "./authReducer";

// Create Store
export const rootReducer = combineReducers({
  search: searchReducer,
  home: homeReducer,
  auth: authReducer,
  routing: routerReducer
});
