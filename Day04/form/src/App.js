import React, { Component } from "react";
import "./App.css";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import ProductTable from "./components/ProducTable";
import ListProduct from "./components/ListProduct";
import AddProduct from "./components/AddProduct";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Form",
      products: [
        {
          id: "prod1",
          price: "123.000$",
          name: "Ipone 5s",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
        },
        {
          id: "prod2",
          name: "Ipone 6s",
          price: "124.000$",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
        },
        {
          id: "prod3",
          name: "Ipone 7s",
          price: "125.000$",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
        },
        {
          id: "prod4",
          name: "Ipone 9s",
          price: "126.000$",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
        },
        {
          id: "prod5",
          name: "Ipone 11s",
          price: "127.000$",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
        }
      ],
      isActived: false
    };
  }

  addProduct = () => {};

  render() {
    let products = [
      {
        name: "Ipone 5s",
        price: "123.000$",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
      },
      {
        name: "Ipone 6s",
        price: "124.000$",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
      },
      {
        name: "Ipone 7s",
        price: "125.000$",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
      },
      {
        name: "Ipone 9s",
        price: "126.000$",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
      },
      {
        name: "Ipone 11s",
        price: "127.000$",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus blanditiis ipsam!"
      }
    ];

    return (
      <div>
        <Navbar title={this.state.title} />
        <div className="container">
          <div className="p-3">
            {/* <ProductTable products={products} /> */}
            <AddProduct />
          </div>
          <hr className="mx-3" />
          {/* <ListProduct listProduct={this.state.products} /> */}
        </div>
      </div>
    );
  }
}

export default App;
