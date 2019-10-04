import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div class="card">
        <img
          class="card-img-top product-image"
          src="holder.js/100x180/"
          alt=""
        />
        <div class="card-body">
          <h4 class="card-title">Product Item</h4>
          <span className="btn btn-warning text-white">21.000$</span>
          <p class="card-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos autem
            iusto voluptatem?{" "}
          </p>
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    );
  }
}

export default Product;
