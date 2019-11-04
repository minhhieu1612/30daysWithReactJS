import React, { Component } from "react";
import "./index.css";
import Product from "../Product";
class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "Iphone 6s Plus",
      productPrice: 1260000,
      productDesc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!",
      sltOnSale: 0,
      rdLang: "vi"
    };
  }

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form action="" onSubmit={this.onHandleSubmit}>
        <div className="card mt-4">
          <div className="card-header bg-success">Add Product</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="nameID">Name</label>
              <input
                type="text"
                id="nameID"
                name="productName"
                className="form-control"
                placeholder="Enter Name"
                value={this.state.productName}
                onChange={this.onHandleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="priceID">Price</label>
              <input
                type="number"
                name="productPrice"
                id="priceID"
                className="form-control"
                max="999000000"
                min="0"
                step="10000"
                value={this.state.productPrice}
                onChange={this.onHandleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="descID">Description</label>
              <textarea
                name="productDesc"
                id="descID"
                className="form-control"
                placeholder="Enter Description"
                rows="5"
                cols="30"
                value={this.state.productDesc}
                onChange={this.onHandleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">On Sale: </label>
              <select
                className="form-control"
                name="sltOnSale"
                value={this.state.sltOnSale}
                onChange={this.onHandleChange}
              >
                <option value={0}>Yes</option>
                <option value={1}>No</option>
              </select>
            </div>

            <div className="form-check">
              <label className="form-check-label mr-4">
                <input
                  type="radio"
                  className="form-check-input"
                  name="rdLang"
                  value="vi"
                  onChange={this.onHandleChange}
                  checked={this.state.rdLang === "vi"}
                />
                Tiếng Việt
              </label>
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="rdLang"
                  value="en"
                  onChange={this.onHandleChange}
                  checked={this.state.rdLang === "en"}
                />
                English
              </label>
            </div>
          </div>
          <div className="card-footer bg-light d-flex">
            <button
              type="submit"
              className="btn btn-success mr-4"
              onClick={this.onHandleSubmit}
            >
              Add Product
            </button>
            <button type="reset" className="btn btn-info">
              Reset
            </button>
            <button className="btn btn-danger ml-auto">Cancle</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddProduct;
