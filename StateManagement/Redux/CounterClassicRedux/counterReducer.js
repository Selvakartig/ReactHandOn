import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_AMOUNT,
} from "./counterActionTypes";

const initialState = {
  value: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    default:
      return state;
  }
}
