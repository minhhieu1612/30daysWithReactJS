import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="text-danger header-box  py-5 mx-5">
        <h2>This is header</h2>
        <button className="rounded-pill btn btn-outline-danger">
          Read More
        </button>
      </header>
    );
  }
}

export default Header;
