import { types } from "../constants";
const initialState = false;

let myReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.SHOW_FORM:
      state = true;
      break;
    case types.CLOSE_FORM:
      state = false;
      break;

    case types.TOGGLE_FORM:
      state = !state;
      break;
    default:
  }

  return state;
}

export default myReducer;