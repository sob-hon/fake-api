import { ADD_PERSONNAME } from "./action";

const initialState = {
  name: "Sobhan",
};

const addNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSONNAME:
      return { name: action.payLoad };
    default:
      return state;
  }
};

export default addNameReducer;
