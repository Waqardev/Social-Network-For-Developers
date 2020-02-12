import React, { Component } from "react";

class IncrementDecrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }

  IncrementItem = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
    console.log("quantity");
  };
  DecrementItem = () => {
    this.setState({
      quantity: this.state.quantity - 1
    });
    console.log("quantity");
  };

  UpdateValue = e => {
    this.setState({ quantity: e.target.value });
  };

  render() {
    return (
      <div className="pagination">
        <button onClick={this.DecrementItem}>-</button>
        <input
          className="inputne"
          value={this.state.quantity}
          onChange={this.UpdateValue}
        />
        <button onClick={this.IncrementItem}>+</button>
      </div>
    );
  }
}
export default IncrementDecrement;
