import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      size: 16
    };
  }

  changeColorToRed = () => {
    this.setState({ color: "red" });
  };

  changeColorToGreen = () => {
    this.setState({ color: "green" });
  };

  changeColorToBlue = () => {
    this.setState({ color: "blue" });
  };

  increaseSize = () => {
    this.setState({ size: this.state.size + 1 });
  };

  descreaseSize = () => {
    if (this.state.size > 0) this.setState({ size: this.state.size - 1 });
  };

  render() {
    return (
      <div className="App">
        <div className="row mx-4 text-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Setting Color</div>
              <div className="card-body">
                <div
                  style={{ backgroundColor: "red" }}
                  onClick={this.changeColorToRed}
                ></div>
                <div
                  style={{ backgroundColor: "green" }}
                  onClick={this.changeColorToGreen}
                ></div>
                <div
                  style={{ backgroundColor: "blue" }}
                  onClick={this.changeColorToBlue}
                ></div>
              </div>
              <div className="card-footer">
                <button className="btn btn-info">Change Color</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Setting Font Size</div>
              <div className="card-body">
                <button
                  className="btn btn-success mr-3"
                  onClick={this.increaseSize}
                >
                  Increase
                </button>

                <button
                  className="btn btn-success"
                  onClick={this.descreaseSize}
                >
                  Descrease
                </button>
              </div>
              <div class="card-footer text-muted">Footer</div>
            </div>
          </div>
          <div
            className="col mt-5 rounded"
            style={{
              color: this.state.color,
              border: "3px solid " + this.state.color,
              fontSize: this.state.size,
              padding: "12px"
            }}
          >
            Content need to setting
            <br />
            Color: {this.state.color}, font-size: {this.state.size}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
