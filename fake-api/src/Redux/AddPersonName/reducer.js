import { ADD_PERSONNAME } from "./action";

const initialState = {
  name: "",
};

const addNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSONNAME:
      return { ...action.payLoad };
    default:
      return state;
  }
};

export default registerReducer;
