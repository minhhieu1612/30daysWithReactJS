import React, { Component } from "react";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="display-3 py-4 d-flex align-self-center">
          Jobs Management
        </h1>
        <hr width="100%" />
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-header alert-warning d-flex">
                Add Job
                <button className="btn ml-auto p-0">
                  <i className="fas fa-times-circle"></i>
                </button>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label>Status:</label>
                  <select className="form-control" name="" id="">
                    <option>Hidden</option>
                    <option>Active</option>
                  </select>
                </div>
                <div className="d-flex text-center pt-4">
                  <button className="btn btn-warning mr-3 ml-auto">
                    <i className="fas fa-plus mr-1"></i>
                    Add
                  </button>
                  <button className="btn btn-danger mr-auto">
                    <i className="fas fa-times mr-1"></i>
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <button className="btn btn-primary">
              <i className="fa fa-plus"></i> Add Job
            </button>
            <div className="row">
              <div className="col-8">
                <div className="input-group my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter keyword"
                  />
                  <div className="input-group-append">
                    <button className="input-group-text bg-primary text-white">
                      <i className="fa fa-search mr-2"></i>
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="dropdown">
                  <button
                    className="btn btn-primary my-3 dropdown-toggle"
                    type="button"
                    id="triggerId"
                    data-toggle="dropdown"
                  >
                    Sort
                    <i className="fa fa-arrow-circle-down ml-1"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="triggerId">
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-sort-alpha-down mr-1"></i>
                      Sort A - Z
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-sort-alpha-down-alt mr-1"></i>
                      Sort Z - A
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Active Status
                    </a>
                    <a className="dropdown-item" href="#">
                      Hidden Status
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Learn Angular 8</td>
                  <td>
                    <h4 className="text-center">
                      <div className="badge badge-danger">Active</div>
                    </h4>
                  </td>
                  <td>
                    <button className="btn p-2 btn-warning text-white mr-3">
                      <i className="fas fa-pencil-alt mr-1"></i>
                      Edit
                    </button>
                    <button className="btn p-2 btn-danger">
                      <i className="fa fa-trash mr-1"></i>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Go Swimming</td>
                  <td>
                    <h4 className="text-center">
                      <div className="badge badge-info">Hidden</div>
                    </h4>
                  </td>
                  <td>
                    <button className="btn p-2 btn-warning text-white mr-3">
                      <i className="fas fa-pencil-alt mr-1"></i>
                      Edit
                    </button>
                    <button className="btn p-2 btn-danger">
                      <i className="fa fa-trash mr-1"></i>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Play Soccer</td>
                  <td>
                    <h4 className="text-center">
                      <div className="badge badge-danger">Active</div>
                    </h4>
                  </td>
                  <td>
                    <button className="btn p-2 btn-warning text-white mr-3">
                      <i className="fas fa-pencil-alt mr-1"></i>
                      Edit
                    </button>
                    <button className="btn p-2 btn-danger">
                      <i className="fa fa-trash mr-1"></i>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
