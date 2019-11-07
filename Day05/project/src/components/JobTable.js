import React, { Component } from "react";
import JobItem from "./JobItem";

class JobTable extends Component {
  constructor(props) {
    super(props);
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.state = {
      tasks: tasks
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   let tasks = this.state.tasks;
  //   let taskWillAddProps = nextProps.taskWillAdd;
  //   let taskNextState = nextState.tasks;

  //   console.log(taskNextState, tasks, taskWillAddProps);

  //   // console.log(tasks[tasks.length - 1]);

  //   // console.log(JSON.stringify(taskWillAddProps), '\n', JSON.stringify(tasks[tasks.length - 1]),
  //   //   (JSON.stringify(taskWillAddProps) !== JSON.stringify(tasks[tasks.length - 1])));
  //   return (
  //     (!tasks[tasks.length - 1] || JSON.stringify(taskWillAddProps) !== JSON.stringify(tasks[tasks.length - 1]))
  //     // (tasks != taskNextState)
  //   );
  // }

  componentDidUpdate() {
    const { jobWillAdd, editedJob } = this.props;
    let tasks = this.state.tasks;
    let checkNewJob = (tasks[tasks.length - 1].id !== jobWillAdd.id);

    // add job here
    if ((!tasks.length || checkNewJob) && jobWillAdd.hasOwnProperty('id')) {
      tasks.push(jobWillAdd);
      this.setState(state => ({
        tasks: tasks
      }));

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // update job here
    if (editedJob !== null) {
      console.log('ok');
      let indexOfJobEdited = this.findIndex(editedJob.id);
      let { name, status } = editedJob;
      let checkEditedJob = (JSON.stringify(tasks[indexOfJobEdited]) !== JSON.stringify(editedJob));
      if (checkEditedJob) {
        // tasks[indexOfJobEdited] = Object.assign(editedJob);
        tasks[indexOfJobEdited].name = name;
        tasks[indexOfJobEdited].status = status;
        this.setState({
          tasks: tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
  }

  showState = () => {
    console.log(this.state);
  }

  handleDeleteTask = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index >= 0 && index < tasks.length - 1) {
      tasks.splice(index, 1);
    } else if (index === tasks.length - 1) tasks.pop();
    // console.log(index);
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onSetStatus = (id) => {
    let index = this.findIndex(id);
    let { tasks } = this.state;
    if (index !== -1) tasks[index].status = !tasks[index].status;
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpadteJob = (id) => {
    let index = this.findIndex(id);
    if (index !== -1) this.props.onUpdateJob(this.state.tasks[index]);
  }

  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

  render() {
    let element = this.state.tasks.map((task, index) => {
      return <JobItem
        key={task.id}
        task={task}
        index={index}
        onDeleteTask={this.handleDeleteTask}
        onSetStatus={this.onSetStatus}
        onUpadteJob={this.onUpadteJob}
      />
    });

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th width="5%">Order</th>
            <th width="50%">Name</th>
            <th width="22%">Status</th>
            <th width="23%">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                />
              </div>
            </td>
            <td>
              <div className="form-group">
                <select className="form-control" name="" id="">
                  <option>All</option>
                  <option>Active</option>
                  <option>Hidden</option>
                </select>
              </div>
            </td>
            <td>
              <button className="btn btn-info" onClick={this.showState}>Show State</button>
            </td>
          </tr>
          {element}
        </tbody>
      </table>
    );
  }
}

export default JobTable;