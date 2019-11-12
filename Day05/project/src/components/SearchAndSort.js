import React, { Component } from "react";

class SearchAndSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        by: 'name',
        value: 1
      }
    };
  }

  onSendParamsToAppForSortItem = (sortBy, sortValue) => {
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue
      }
    });
    this.props.onReceiveParamsFromSearchAndSortToSortTaskList(sortBy, sortValue);
  }

  render() {
    let { sort: { by, value } } = this.state;
    return (
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
          <div className="dropdown sort-by">
            <button
              className="btn btn-primary my-3 dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
            > Sort <i className="fa fa-arrow-circle-down ml-1"></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <button
                className={(by === 'name' && value === 1) ? 'dropdown-item active'
                  : 'dropdown-item'}
                onClick={() => { this.onSendParamsToAppForSortItem('name', 1); }}
              >
                <i className="fas fa-sort-alpha-down mr-1"></i>Sort A - Z
              </button>
              <button
                className={(by === 'name' && value === -1) ? 'dropdown-item active'
                  : 'dropdown-item'}
                onClick={() => { this.onSendParamsToAppForSortItem('name', -1); }}
              >
                <i className="fas fa-sort-alpha-down-alt mr-1"></i>Sort Z - A
              </button>
              <div className="dropdown-divider"></div>
              <button
                className={(by === 'status' && value === 1) ? 'dropdown-item active'
                  : 'dropdown-item'}
                onClick={() => { this.onSendParamsToAppForSortItem('status', 1); }}
              > Active Status
              </button>
              <button
                className={(by === 'status' && value === -1) ? 'dropdown-item active'
                  : 'dropdown-item'}
                onClick={() => { this.onSendParamsToAppForSortItem('status', -1); }}
              > Hidden Status
              </button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SearchAndSort;