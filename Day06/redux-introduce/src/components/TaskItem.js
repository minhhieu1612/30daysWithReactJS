import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSendIdToChangeStatusSelf = (e) => {
    let { onChangeTaskStatus, task } = this.props;
    onChangeTaskStatus(task.id);
  }

  handleSendIdToDeleteSelf = (e) => {
    let { onDeleteTask, task } = this.props;
    onDeleteTask(task.id);
  }

  handleSendItemToUpdateSelf = (e) => {
    let { onEditingTask, task, onShowForm } = this.props;
    onShowForm();
    onEditingTask(task);
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
            onClick={this.handleSendItemToUpdateSelf}>
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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    displayForm: state.displayForm
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeTaskStatus: (id) => dispatch(actions.changeStatus(id)),
    onEditingTask: (task) => dispatch(actions.editingTask(task)),
    onDeleteTask: (id) => dispatch(actions.deleteTask(id)),
    onShowForm: () => dispatch(actions.showForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);