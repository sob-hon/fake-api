import { combineReducers } from "redux";
import  addNameReducer  from "./AddPersonName/reducer";

const rootReducer = combineReducers({
  addNameReducer,
});

export default rootReducer;
