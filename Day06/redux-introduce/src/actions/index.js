import { types } from "../constants";

const changeStatus = (id) => ({
  type: types.TOGGLE_STATUS,
  id: id
});

const sort = (sort) => ({
  type: types.SORT,
  sort: sort
});

const tasks = (tasks) => ({
  type: types.LIST_ALL,
  tasks: tasks
});

const addTask = (task) => ({
  type: types.ADD_TASK,
  task: task
});

const editedTask = (task) => ({
  type: types.EDITED_TASK,
  task: task
});

const editingTask = (task) => ({
  type: types.EDITING_TASK,
  task: task
});

const clearTaskEditing = () => ({
  type: types.CLEAR_TASK_EDITING
});

const deleteTask = (id) => ({
  type: types.DELETE_TASK,
  id: id
});

const showForm = () => ({
  type: types.SHOW_FORM
});

const closeForm = () => ({
  type: types.CLOSE_FORM
});

const toggleForm = () => ({
  type: types.TOGGLE_FORM
});

export {
  changeStatus,
  sort,
  tasks,
  addTask,
  editedTask,
  editingTask,
  clearTaskEditing,
  deleteTask,
  showForm,
  closeForm,
  toggleForm
}