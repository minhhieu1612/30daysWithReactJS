import React, { Component } from "react";
import "./index.css";

class Product extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart() {
    // bind this through contructor
    alert(this.props.name);
  }

  onAddToCart2 = () => alert(this.props.name); // bind this through arrow function

  onAddToCart3(productName) {
    // bind this through passed params form arrow function
    alert(productName);
  }

  render() {
    return (
      <div className="col-xl-3 col-md-4 col-sm-6 p-2">
        <div className="card text-left">
          <img
            className="card-img-top"
            style={{ backgroundColor: "rgba(0,0,0,.5)", height: "8em" }}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <span className="btn btn-outline-warning rounded-pill">
              {this.props.price}
            </span>
            <p className="card-text mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              natus blanditiis ipsam!
            </p>
            <button className="btn btn-primary m-2">View</button>
            <button className="btn btn-success m-2" onClick={this.onAddToCart2}>
              Add to cart
            </button>
            {/* <button
              className="btn btn-info m-2"
              onClick={() => this.onAddToCart3(this.props.name)}
            >
              Add to cart2
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
