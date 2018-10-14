import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import searchReducer from "./searchReducer";
import homeReducer from "./homeReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";

// Create Store
export const rootReducer = combineReducers({
  search: searchReducer,
  home: homeReducer,
  auth: authReducer,
  reviews: reviewReducer,
  routing: routerReducer
});
