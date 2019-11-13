import { types } from "../constants";
const initialState = {
  by: 'name',
  value: 1
};

let myReducer = (state = initialState, action) => {

  if (action.type === types.SORT) {
    let { by, value } = action.sort;
    state = {
      by: by,
      value: value
    };
  }

  return state;
}

export default myReducer;