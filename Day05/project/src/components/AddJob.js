import React, { Component } from "react";

class AddJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      status: false
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   let { jobEditing } = nextProps;
  //   let state = this.state;
  //   console.log(this.state);
  //   let checkUpdateState = (JSON.stringify(nextState) !== JSON.stringify(this.state));
  //   let checkUpdateProps = (JSON.stringify(jobEditing) !== JSON.stringify(state));
  //   return checkUpdateState && checkUpdateProps;
  //   //  (checkUpdateProps && !state.id.length) || (!checkUpdateProps && state.id.length);
  // }

  componentDidUpdate() {
    let { jobEditing } = this.props;
    if (jobEditing !== null && !this.state.name.length) {
      let { id, name, status } = jobEditing;
      if (this.state.id !== id) {
        console.log('set state to jobEditing');
        this.setState({
          id: id,
          name: name,
          status: status
        });
      }
    }
  }

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

  onHandleChange = e => {
    const target = e.target;
    let value = ("select-one" === target.type) ? (target.value === 'true') : target.value;
    this.setState({ [target.name.toString().substr(4).toLowerCase()]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    let { id, name, status } = this.state;
    if (id.length) {
      this.props.onEditedJob({
        id: id,
        name: name,
        status: status
      });
    } else {
      this.props.onReceiveJob({
        id: this.generateID(),
        name: name,
        status: status
      });
    }
    this.clearForm();
    this.onCloseForm();
  };

  onCloseForm = () => {
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
    return (
      <form action="" onSubmit={this.onHandleSubmit}>
        <div className="card">
          <div className="card-header alert-warning d-flex">
            {(id.length) ? 'Update Job' : 'Add Job'}
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

export default AddJob;
