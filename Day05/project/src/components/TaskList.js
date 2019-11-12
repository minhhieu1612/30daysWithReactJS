import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    };
  }

  // handle of this component

  handleOnChange = e => {
    let target = e.currentTarget;
    let name = target.name;
    let value = target.value;
    this.setState({ [name]: value });
  }

  onSendIdToAppToChangeItemStatus = (id) => {
    let { onReceiveIdFromTaskListToChangeStatus } = this.props;
    onReceiveIdFromTaskListToChangeStatus(id);
  }

  onSendIdToAppToDeleteItem = (id) => {
    let { onReceiveIdFromTaskListToDeleteItem } = this.props;
    onReceiveIdFromTaskListToDeleteItem(id);
  }

  onSendIdToAppToUpdateItem = (id) => {
    let { onReceiveIdFromTaskListToUpdateItem } = this.props;
    onReceiveIdFromTaskListToUpdateItem(id);
  }


  render() {

    let { filterName, filterStatus } = this.state;
    let { tasks, sortParams } = this.props;

    // filter
    if (filterName.toString().length) {
      tasks = tasks.filter(task => task.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1);
    }

    filterStatus = parseInt(filterStatus);

    if (filterStatus !== -1) {
      tasks = tasks.filter(task => task.status === (filterStatus === 0));
    }

    //sort
    if (sortParams.by === 'name') {
      tasks.sort((a, b) => (sortParams.value > 0) ? (a.name.charCodeAt(0) - b.name.charCodeAt(0)) : (b.name.charCodeAt(0) - a.name.charCodeAt(0)));
    }

    if (sortParams.by === 'status') {
      tasks.sort((a, b) => (sortParams.value < 0) ? (a.status - b.status) : (b.status - a.status))
    }

    let element = tasks.map((task, index) => {
      return <TaskItem
        key={task.id}
        task={task}
        index={index}
        onReceiveIdFromTaskItemToDeleteThisItem={this.onSendIdToAppToDeleteItem}
        onReceiveIdFromTaskItemToChangeStatus={this.onSendIdToAppToChangeItemStatus}
        onReceiveIdFromTaskItemToUpdateThisItem={this.onSendIdToAppToUpdateItem}
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
                  name="filterName"
                  id=""
                  onChange={this.handleOnChange}
                />
              </div>
            </td>
            <td>
              <div className="form-group">
                <select
                  className="form-control"
                  name="filterStatus"
                  onChange={this.handleOnChange}
                >
                  <option value={-1}>All</option>
                  <option value={0}>Active</option>
                  <option value={1}>Hidden</option>
                </select>
              </div>
            </td>
            <td>
            </td>
          </tr>
          {element}
        </tbody>
      </table>
    );
  }
}

export default TaskList;