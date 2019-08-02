export const Type = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CHANGE_CHOICE: "CHANGE_CHOICE"
};

export const increment = value => ({
  type: Type.INCREMENT,
  payload: value
});

export const decrement = value => ({
  type: Type.DECREMENT,
  payload: value
});
