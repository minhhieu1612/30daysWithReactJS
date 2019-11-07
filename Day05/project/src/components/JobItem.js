import React, { Component } from "react";

class JobItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSetStatus = e => {
    let taskId = this.props.task.id;
    this.props.onSetStatus(taskId);
  }

  taskWillDelete = e => {
    let taskId = this.props.task.id;
    this.props.onDeleteTask(taskId);
  }

  onUpadteJob = e => {
    let { onUpadteJob, task } = this.props;
    onUpadteJob(task.id);
  }

  render() {
    let { task, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td>
          <div className={(task.status)
            ? 'badge badge-danger' : 'badge badge-info'}
            onClick={this.onSetStatus}>{(task.status) ? 'Active' : 'Hidden'}</div>
        </td>
        <td>
          <button className="btn p-2 btn-warning text-white mr-3"
            onClick={this.onUpadteJob}>
            <i className="fas fa-pencil-alt mr-1"></i>
            Edit
          </button>
          <button className="btn p-2 btn-danger"
            onClick={this.taskWillDelete}>
            <i className="fa fa-trash mr-1"></i>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default JobItem;