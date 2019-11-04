import React, { Component } from "react";

class JobItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSetStatus = () => {
    this.props.onSetStatus();
  }

  taskWillDelete = e => {
    let taskId = e.currentTarget.parentElement.id;
    this.props.onDeleteTask(taskId);
  }

  render() {
    return (
      <tr>
        <td>{this.props.itemNumber}</td>
        <td>{this.props.itemName}</td>
        <td>
          <div className={(this.props.itemStatus)
            ? 'badge badge-danger' : 'badge badge-info'}
            onClick={this.onSetStatus}>{(this.props.itemStatus) ? 'Active' : 'Hidden'}</div>
        </td>
        <td id={this.props.keyId}>
          <button className="btn p-2 btn-warning text-white mr-3">
            <i className="fas fa-pencil-alt mr-1"></i>
            Edit
          </button>
          <button className="btn p-2 btn-danger" onClick={this.taskWillDelete}>
            <i className="fa fa-trash mr-1"></i>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default JobItem;