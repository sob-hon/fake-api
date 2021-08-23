import { ADD_PERSONNAME } from "./action";

const initialState = {
  people: [],
};

const addNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSONNAME:
      return { people: action.payLoad };
    default:
      return state;
  }
};

export default addNameReducer;
