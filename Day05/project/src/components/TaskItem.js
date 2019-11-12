import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSendIdToChangeStatusSelf = (e) => {
    let { task, onReceiveIdFromTaskItemToChangeStatus } = this.props;
    onReceiveIdFromTaskItemToChangeStatus(task.id);
  }

  handleSendIdToDeleteSelf = (e) => {
    let { onReceiveIdFromTaskItemToDeleteThisItem, task } = this.props;
    onReceiveIdFromTaskItemToDeleteThisItem(task.id);
  }

  handleSendIdToUpdateSelf = (e) => {
    let { onReceiveIdFromTaskItemToUpdateThisItem, task } = this.props;
    onReceiveIdFromTaskItemToUpdateThisItem(task.id);
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
            onClick={this.handleSendIdToChangeStatusSelf}>{(task.status) ? 'Active' : 'Hidden'}</div>
        </td>
        <td>
          <button className="btn p-2 btn-warning text-white mr-3"
            onClick={this.handleSendIdToUpdateSelf}>
            <i className="fas fa-pencil-alt mr-1"></i>
            Edit
          </button>
          <button className="btn p-2 btn-danger"
            onClick={this.handleSendIdToDeleteSelf}>
            <i className="fa fa-trash mr-1"></i>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;