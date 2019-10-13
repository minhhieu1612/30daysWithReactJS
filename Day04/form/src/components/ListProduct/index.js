import React, { Component } from "react";
import "./index.css";
import Product from "../Product";
class ListProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listProductRender = this.props.listProduct.map(
      ({ name, price, description }, index) => {
        return (
          <Product
            name={name}
            price={price}
            description={description}
            key={index}
          />
        );
      }
    );
    return <div className="row mx-2">{listProductRender}</div>;
  }
}

export default ListProduct;
