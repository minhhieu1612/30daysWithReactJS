import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      status: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(props.taskEditing);
    if (props && props.taskEditing && state.id !== props.taskEditing.id) {

      let { id, name, status } = props.taskEditing;
      return {
        id: id,
        name: name,
        status: status
      };
    }

    if (!props.taskEditing && !state.name.length) {
      return {
        id: "",
        name: "",
        status: false
      };
    }

    return state;
  }

  onHandleChange = e => {
    let target = e.target;
    let name = target.name.toString().substr(4).toLowerCase();
    let value = target.value;
    if (target.type === "select-one") value = (value === 'true');
    this.setState({ [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    let { id } = this.state;
    if (id.length) {
      this.props.onEditedTask(this.state);
    } else {
      this.props.onAddTask(this.state);
    }

    this.onCloseForm();
  };

  onCloseForm = () => {
    this.props.clearTaskEditing();

    this.props.onCloseForm();
  }

  clearForm = () => {
    this.setState({
      id: "",
      name: "",
      status: false
    });
  }

  render() {
    const { id, name, status } = this.state;
    // const { onCloseForm } = this.props;
    return (
      <form action="" onSubmit={this.onHandleSubmit}>
        <div className="card">
          <div className="card-header alert-warning d-flex">
            {(id.length) ? 'Update Task' : 'Add Task'}
            <button type="button" className="btn ml-auto p-0" onClick={this.onCloseForm}>
              <i className="fas fa-times-circle"></i>
            </button>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="taskName"
                id="taskName"
                className="form-control"
                placeholder=""
                value={name}
                onChange={this.onHandleChange}
              />
            </div>

            <div className="form-group">
              <label>Status:</label>
              <select
                className="form-control"
                name="taskStatus"
                id="taskStatus"
                value={status}
                onChange={this.onHandleChange}
              >
                <option value={false}>Hidden</option>
                <option value={true}>Active</option>
              </select>
            </div>

            <div className="d-flex text-center pt-4">
              <button
                type="submit"
                className="btn btn-warning mr-3 ml-auto"
                onClick={this.onHandleSubmit}
              >
                <i className="fas fa-plus mr-1"></i>
                Save
              </button>
              <button type="button" className="btn btn-danger mr-auto" onClick={this.clearForm}>
                <i className="fas fa-times mr-1"></i>
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    taskEditing: state.taskEditing,
    displayForm: state.displayForm
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => dispatch(actions.addTask(task)),
    onEditedTask: (task) => dispatch(actions.editedTask(task)),
    clearTaskEditing: () => dispatch(actions.clearTaskEditing()),
    onCloseForm: () => dispatch(actions.closeForm()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
