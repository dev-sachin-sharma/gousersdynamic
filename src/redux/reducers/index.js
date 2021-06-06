import { combineReducers } from "redux";
import { AllUserReducer, SingleUserReducer } from "./userReducer";

export const reducers = combineReducers({
  allUsers: AllUserReducer,
  singleUser: SingleUserReducer,
});
