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
    const jobWillAdd = this.props.taskWillAdd;
    let tasks = this.state.tasks;
    let checkNewJob = (JSON.stringify(tasks[tasks.length - 1]) !== JSON.stringify(jobWillAdd));

    if ((!tasks.length || checkNewJob) && jobWillAdd.hasOwnProperty('id')) {
      this.setState(state => ({
        tasks: [...state.tasks, jobWillAdd]
      }));

      localStorage.setItem('tasks', JSON.stringify([...tasks, jobWillAdd]));
    }
  }

  showState = () => {
    console.log(this.state);
  }

  handleDeleteTask = (taskId) => {
    let tasks = this.state.tasks.filter(task => task.id !== taskId) || {};
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render() {
    let element = this.state.tasks.map((task, index) => {
      return <JobItem key={task.id} keyId={task.id}
        itemNumber={index + 1} itemName={task.name}
        itemStatus={task.status} onDeleteTask={this.handleDeleteTask} />
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