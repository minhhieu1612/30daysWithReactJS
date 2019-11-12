import React, { Component } from "react";
import "./app.css";
import TaskForm from "./components/TaskForm";
import SearchAndSort from './components/SearchAndSort';
import TaskTable from './components/TaskList';
import helpers from './helpers';
class App extends Component {
  constructor(props) {
    super(props);

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    this.state = {
      tasks: tasks,
      showTaskForm: false,
      taskEditing: null,
      sortTask: {
        by: 'name',
        value: 1
      }
    };
  }


  //=============== handle event from TaskForm ===============
  toggleTaskForm = e => {
    this.setState({
      showTaskForm: !this.state.showTaskForm,
    });
  }

  onCloseForm = e => {
    this.setState({
      showTaskForm: false,
      taskEditing: null
    });
  }

  onShowForm = e => {
    this.setState({ showTaskForm: true });
  }

  onReceiveTaskFromTaskForm = (task) => {
    let { tasks } = this.state;
    let index = helpers.findIndex(task.id, tasks);

    if (index > -1) tasks.splice(index, 1, task);
    else tasks.concat(task);
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  //================ Manage local storage ====================
  onGenerateData = () => {
    let tasks = [

      {
        id: helpers.generateID(),
        name: 'Learn React',
        status: true
      }, {
        id: helpers.generateID(),
        name: 'Get Done with "I love Yoo"',
        status: false
      }, {
        id: helpers.generateID(),
        name: 'Learn Angular 8',
        status: false
      }, {
        id: helpers.generateID(),
        name: 'Go Swimming',
        status: true
      }, {
        id: helpers.generateID(),
        name: 'Play Soccer',
        status: false
      }
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  clearLocalStorage = () => {
    localStorage.removeItem('tasks');
  }


  //================ handle event from TaskList ==============

  setStatusForOneItem = (id) => {
    let { tasks } = this.state;
    let index = helpers.findIndex(id, tasks);
    if (index !== -1) tasks[index].status = !tasks[index].status;
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onSendDataToTaskFormToUpdateItem = (id) => {
    let { tasks } = this.state;
    let index = helpers.findIndex(id, tasks);
    if (index > -1) {
      this.setState({
        taskEditing: tasks[index]
      });
      this.onShowForm();
    }
  }

  deleteOneTaskItem = (id) => {
    let { tasks } = this.state;
    let index = helpers.findIndex(id, tasks);
    if (index >= 0 && index < tasks.length - 1) {
      tasks.splice(index, 1);
    } else if (index === tasks.length - 1) tasks.pop();

    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  //================ handle event from SearchAndSort ==============

  onSortTaskList = (sortBy, sortValue) => {
    this.setState({
      sortTask: {
        by: sortBy,
        value: sortValue
      }
    });
  }

  render() {
    let { taskEditing, tasks, sortTask } = this.state;
    return (
      <div className="container-fluid">
        <h1 className="display-3 py-4 d-flex align-self-center">
          Tasks Management
        </h1>
        <hr width="100%" />
        <div className="row">
          <div className={(this.state.showTaskForm) ? "col-3" : "d-none"}>
            {/* Add Task */}
            <TaskForm
              onCloseForm={this.onCloseForm}
              onReceiveTask={this.onReceiveTaskFromTaskForm}
              taskEditing={taskEditing}
            />
          </div>
          <div className={(this.state.showTaskForm) ? "col-9" : "col"}>
            <button className="btn btn-primary" onClick={this.toggleTaskForm}>
              <i className="fa fa-plus"></i> Add Task
            </button>
            <button className="btn btn-danger ml-3" onClick={this.onGenerateData}>
              <i className="fa fa-pen"></i> Generate Data
            </button>
            <button className="btn btn-warning ml-3" onClick={this.clearLocalStorage}>
              <i className="fa fa-trash"></i> Clear Cookie
            </button>
            {/* Search - Sort */}
            <SearchAndSort onReceiveParamsFromSearchAndSortToSortTaskList={this.onSortTaskList} />

            {/* Show Task */}
            <TaskTable
              onReceiveIdFromTaskListToChangeStatus={this.setStatusForOneItem}
              onReceiveIdFromTaskListToDeleteItem={this.deleteOneTaskItem}
              onReceiveIdFromTaskListToUpdateItem={this.onSendDataToTaskFormToUpdateItem}
              tasks={tasks}
              sortParams={sortTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
