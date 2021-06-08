import { TOGGLE } from "../constants/actionTypes";

const initalState = {
  show: false,
};

const reducerShow = (state = initalState, action) => {
  if (action.type === TOGGLE) {
    return { ...state, show: !state.show };
  } else {
    return state;
  }
};

export default reducerShow
