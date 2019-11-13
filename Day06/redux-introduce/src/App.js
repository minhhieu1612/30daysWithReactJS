import React, { Component } from "react";
import "./app.css";
import TaskForm from "./components/TaskForm";
import SearchAndSort from './components/SearchAndSort';
import TaskList from './components/TaskList';
import { connect } from "react-redux";
import * as actions from './actions';
import helpers from './helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  //=============== handle event from TaskForm ===============
  onToggleTaskForm = e => {
    this.props.clearTaskEditing();
    this.props.onToggleTaskForm();
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
    let { sortTask } = this.state;
    let { displayForm } = this.props;

    return (
      <div className="container-fluid">
        <h1 className="display-3 py-4 d-flex align-self-center">
          Tasks Management
        </h1>
        <hr width="100%" />
        <div className="row">
          <div className={(displayForm) ? "col-3" : "d-none"}>
            {/* Add Task */}
            <TaskForm />
          </div>
          <div className={(displayForm) ? "col-9" : "col"}>
            <button className="btn btn-primary" onClick={this.onToggleTaskForm}>
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
            <TaskList
              sortParams={sortTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayForm: state.displayForm,
    taskEditing: state.taskEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleTaskForm: () => dispatch(actions.toggleForm()),
    clearTaskEditing: () => dispatch(actions.clearTaskEditing())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
