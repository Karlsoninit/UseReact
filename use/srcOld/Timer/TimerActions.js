export const Type = {
  DECREMENT: "DECREMENT",
  INCREMENT: "INCREMENT",
  CHANGE_STEP: "CHANGE_STEP"
};

export const increment = value => ({
  type: Type.INCREMENT,
  payload: value
});

export const decrement = value => ({
  type: Type.DECREMENT,
  payload: value
});
