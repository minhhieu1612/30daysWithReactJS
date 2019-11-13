
import { combineReducers } from "redux";
import sort from "./sort";
import tasks from "./tasks";
import displayForm from "./displayForm";
import taskEditing from "./taskEditing";

const myReducer = combineReducers({
  sort,
  tasks,
  displayForm,
  taskEditing
});

export default myReducer;