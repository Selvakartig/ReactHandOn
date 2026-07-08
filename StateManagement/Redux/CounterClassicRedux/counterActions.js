import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_AMOUNT,
} from "./counterActionTypes";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementByAmount = (amount) => {
  return {
    type: INCREMENT_BY_AMOUNT,
    payload: amount,
  };
};
