export const ADD_PERSONNAME = "ADD_PERSONNAME";

export const addName = (name) => {
  return {
    type: ADD_PERSONNAME,
    payLoad: name,
  };
};
