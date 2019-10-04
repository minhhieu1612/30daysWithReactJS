import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
function App() {
  return (
    <div className="text-center text-info">
      <h1>Hello World</h1>
      <p>This is the first time i code with ReactJS!!</p>
      <p>It's so cool</p>
      <Header></Header>
      <br />
      <div className="row mx-2 mb-4">
        <div className="col-md-4 col-sm-6 px-2 pt-4">
          <Product />
        </div>
        <div className="col-md-4 col-sm-6 px-2 pt-4">
          <Product />
        </div>
        <div className="col-md-4 col-sm-6 mx-md-0 mx-auto px-2 pt-4">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
