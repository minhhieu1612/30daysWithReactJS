import React, { Component } from "react";
import "./App.css";
import Product from "./components/Product";

class App extends Component {
  constructor(props) {
    super(props);
    this.btnSearch = React.createRef();
  }

  showRef = (e) => {
    e.preventDefault();
    console.log(this.btnSearch);
  }

  addProduct = () => {
    let result = ``;
    for (const key1 in this.refs) {
      if (this.refs.hasOwnProperty(key1)) {
        const property = this.refs[key1];
        for (const key2 in property) {
          if (property.hasOwnProperty(key2) && key2 === "value") {
            const value = property[key2];
            result += `${key1}: ${value} `;
          }
        }
      }
      console.log(result);
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Refs
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.showRef}>
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                ref={this.btnSearch}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="row my-5 mx-3">
          <div className="col-md-4 mx-2">
            <div className="card">
              <div className="card-header bg-success">Add Product</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required="required"
                    ref="productName"
                  />
                  <small id="helpId" className="text-muted">
                    <span className="text-danger">*</span> Lenght of product's
                    name less than 100 characters.
                  </small>
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control"
                    required="required"
                    ref="productPrice"
                  />
                  <small id="helpId" className="text-muted">
                    <span className="text-danger">*</span> Price must greater
                    10$.
                  </small>
                </div>
              </div>
              <div className="card-footer d-flex">
                <button className="btn btn-success" onClick={this.addProduct}>
                  Save
                </button>
                <button className="btn btn-danger ml-auto">Cancle</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mx-2"></div>
          <div className="col-md-4 mx-2"></div>
        </div>
        <hr className="mx-3" />
        <div className="row mx-2">
          <Product name="Product Name" price="30000" />
          <Product name="Product Name" price="30000" />
          <Product name="Product Name" price="30000" />
          <Product name="Product Name" price="30000" />
        </div>
      </div>
    );
  }
}

export default App;
