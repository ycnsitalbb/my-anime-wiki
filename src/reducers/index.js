import { combineReducers } from "redux";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import animeReducer from "./animeReducer";
export default combineReducers({
    user: userReducer,
    search:searchReducer,
    anime:animeReducer
  });
  