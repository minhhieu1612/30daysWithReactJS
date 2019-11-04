import React, { Component } from "react";

class SearchAndSort extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
              <button className="dropdown-item">
                <i className="fas fa-sort-alpha-down mr-1"></i>
                Sort A - Z
                    </button>
              <button className="dropdown-item">
                <i className="fas fa-sort-alpha-down-alt mr-1"></i>
                Sort Z - A
                    </button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">
                Active Status
                    </button>
              <button className="dropdown-item">
                Hidden Status
                    </button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SearchAndSort;