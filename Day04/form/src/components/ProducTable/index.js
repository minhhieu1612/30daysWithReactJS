import React, { Component } from "react";
import "./index.css";

class ProducTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActived: false
    };
  }

  onClickActive = () => {
    this.setState({ isActived: !this.state.isActived });
  };

  render() {
    let elements = this.props.products.map((product, index) => {
      return (
        <tr className="py-2" key={product.id}>
          <td>{index + 1}</td>
          <td>{product.name}</td>
          <td>
            <div className="btn btn-success p-2 my-2">{product.price}</div>
          </td>
          <td>{product.description}</td>
          <td>
            <button className="btn btn-info">Update</button>
          </td>
          <td>
            <button className="btn btn-danger">Deledte</button>
          </td>
          <td>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                cols="20"
                id="comment"
              ></textarea>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th colSpan="2">Action</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>{elements}</tbody>
        </table>
      </div>
    );
  }
}

export default ProducTable;
