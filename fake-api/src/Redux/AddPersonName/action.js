export const ADD_PERSONNAME = "ADD_PERSONNAME";

export const addName = (people) => {
  return {
    type: ADD_PERSONNAME,
    payLoad: people,
  };
};
