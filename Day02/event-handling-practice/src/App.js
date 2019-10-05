import React, { Component } from "react";
import "./App.css";
import Product from "./components/Product";

class App extends Component {
  changeBackgroundColor() {
    let el = document.getElementsByClassName("card")[0];
    el.style.backgroundColor = `rgba(${255 * Math.random()},${255 *
      Math.random()},${255 * Math.random()},.5)`;
    let el1 = document.getElementsByClassName("card")[1];
    el1.style.backgroundColor = `rgba(${255},${255 * Math.random()},${255 *
      Math.random()},.5)`;
    let el2 = document.getElementsByClassName("card")[2];
    el2.style.backgroundColor = `rgba(${255 * Math.random()},${255},${255 *
      Math.random()},.5)`;
    let el3 = document.getElementsByClassName("card")[3];
    el3.style.backgroundColor = `rgba(${255 * Math.random()},${255 *
      Math.random()},${255},.5)`;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Props
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
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="row mx-2">
          <Product name="Product 1" price="35000" />
          <Product name="Product 2" price="10000" />
          <Product name="Product 3" price="450000" />
          <Product name="Product 4" price="3000" />
        </div>
        <div className="d-flex">
          <button
            className="btn btn-outline-info mt-md-5 mt-3 mx-auto"
            onClick={this.changeBackgroundColor}
          >
            Change Background Color
          </button>
        </div>
      </div>
    );
  }
}

export default App;
