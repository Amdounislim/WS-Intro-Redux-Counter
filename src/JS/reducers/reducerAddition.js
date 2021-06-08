import { ADDITION } from "../constants/actionTypes";

const initialState = { sum: 0 };

const reducerAddition = (state = initialState, action) => {
//   if (action.type === ADDITION) {
//     return { ...state, sum: action.payload.val1 + action.payload.val2 };
//   } 
  if (action.type === ADDITION) {
    return { ...state, sum: action.x + action.y };
  } 
  else {
      return state
  }
};

export default reducerAddition