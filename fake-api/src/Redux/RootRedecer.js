import { combineReducers } from "redux";
import  registerReducer  from "./AddPersonName/reducer";

const rootReducer = combineReducers({
  registerReducer,
});

export default rootReducer;
