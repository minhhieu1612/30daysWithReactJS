import { types } from "../constants";
const initialState = null;

let myReducer = (state = initialState, action) => {

  if (action.type === types.EDITING_TASK) {
  }

  switch (action.type) {
    case types.EDITING_TASK: state = action.task;
      break;
    case types.CLEAR_TASK_EDITING: state = null;
      break;
    default:
  }

  return state;
}

export default myReducer;