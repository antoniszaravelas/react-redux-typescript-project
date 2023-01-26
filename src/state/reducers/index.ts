import { reducer } from "./repositoriesReducer";
import { combineReducers } from "redux";

// in case there are more add them here
const rootReducer = combineReducers({ reducer });

export default rootReducer;
