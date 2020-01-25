import React, { Component } from "react";
import { connect } from "react-redux";
import { testAdd, testRemove } from "./actions/testAction";

class test extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.testRemove}>Negetive</button>
        {this.props.data}
        <button onClick={this.props.testAdd}>Positive</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.Data
});
export default connect(mapStateToProps, { testAdd, testRemove })(test);
