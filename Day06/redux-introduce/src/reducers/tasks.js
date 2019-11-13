import { types } from "../constants";
import * as helpers from "../helpers";
const data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data || [];

let myReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_TASK: {
      let { task } = action;
      task.id = helpers.generateID();
      state = state.concat(task);
      helpers.setupLocal('tasks', state);
    } break;

    case types.EDITED_TASK: {
      let { task } = action;
      let index = helpers.findIndex(task.id, state);
      if (index > -1) state.splice(index, 1, task);
      helpers.setupLocal('tasks', state);
    } break;

    case types.DELETE_TASK: {
      let { id } = action;
      let index = helpers.findIndex(id, state);

      if (index > -1 && index < state.length - 1) state.splice(index, 1);
      else if (index === state.length - 1) state.pop();

      helpers.setupLocal('tasks', state);
    } break;

    case types.LIST_ALL: {
      let { tasks } = action;
      state = tasks;
      helpers.setupLocal('tasks', state);
    } break;

    case types.TOGGLE_STATUS: {
      let index = helpers.findIndex(action.id, state);

      let task = { ...state[index] };
      task.status = !task.status;

      state.splice(index, 1, task);

      helpers.setupLocal('tasks', state);
    } break;

    default:
  }

  return [...state];
}


export default myReducer;
