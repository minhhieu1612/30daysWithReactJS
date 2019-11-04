import React, { Component } from "react";

class AddJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.generateID(),
      name: "A Task",
      status: true
    };
  }

  onHandleChange = e => {
    const target = e.target;
    let value = ("select-one" === target.type) ? (target.value === 'true') : target.value;
    this.setState({ [target.name.toString().substr(4).toLowerCase()]: value });
  };

  generateID = () => {
    let hash = '';
    for (let i = 0; i < 5; i++) {
      hash += Math.floor((1 + Math.random()) * 0x1000000).toString(16);
      if (i < 4) {
        hash += '-';
      }
    }
    return hash;
  }

  onHandleSubmit = e => {
    e.preventDefault();
    this.setState({ id: this.generateID() });
    this.props.onReceiveJob(this.state);
  };

  onCloseForm = e => {
    e.preventDefault();
    this.props.onCloseForm();
  }

  render() {
    return (
      <form action="" onSubmit={this.onHandleSubmit}>
        <div className="card">
          <div className="card-header alert-warning d-flex">
            Add Job
            <button className="btn ml-auto p-0" onClick={this.onCloseForm}>
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
                value={this.state.name}
                onChange={this.onHandleChange}
              />
            </div>

            <div className="form-group">
              <label>Status:</label>
              <select
                className="form-control"
                name="taskStatus"
                id="taskStatus"
                value={this.state.status}
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
                Add
              </button>
              <button className="btn btn-danger mr-auto" onClick={this.onCloseForm}>
                <i className="fas fa-times mr-1"></i>
                Close
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddJob;
