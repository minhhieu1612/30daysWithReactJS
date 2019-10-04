import React, { Component } from "react";
import "./App.css";

class App extends Component {
  getProductRemainOnStock(products) {
    let productElements = [];
    products.filter(product => {
      if (product.onStock >= 0) {
        let productElement = (
          <div className="col-4 pt-4 px-2" key={product.id}>
            <div className="card text-left">
              <img
                className="card-img-top"
                style={{ backgroundColor: "rgba(0,0,0,.5)", height: "12em" }}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title" style={{ fontSize: "2em" }}>
                  {product.name}
                </h4>
                <span
                  className="badge badge-warning text-white"
                  style={{ fontSize: "1em" }}
                >
                  {"$" + product.price}
                </span>
                <p className="card-text">{product.des}</p>
              </div>
            </div>
          </div>
        );
        productElements.push(productElement);
      }
    });
    return <div className="row mx-2">{productElements}</div>;
  }

  render() {
    let product = {
      id: 1,
      name: "Ipone 5s",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum minima similique.",
      price: 1200,
      onStock: 12,
      status: "pending"
    };

    let products = [
      {
        id: 1,
        name: "Ipone 5",
        des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum minima similique.",
        price: 200,
        onStock: 0,
        status: "abort"
      },
      {
        id: 2,
        name: "Ipone 6s",
        des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum minima similique.",
        price: 1500,
        onStock: 12,
        status: "pending"
      },
      {
        id: 3,
        name: "Ipone XS Max",
        des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum minima similique.",
        price: 1000,
        onStock: 5,
        status: "pending"
      },
      {
        id: 4,
        name: "Ipone 11 Pro",
        des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum minima similique.",
        price: 2200,
        onStock: 2,
        status: "outdated"
      }
    ];
    return <div className="App">{this.getProductRemainOnStock(products)}</div>;
  }
}

export default App;
