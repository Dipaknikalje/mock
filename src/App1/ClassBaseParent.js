import React, { Component } from "react";
import ClassBaseChild from "./ClassBaseChild";

class ClassBaseParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
  }
  render() {
    return (
      <>
        <ClassBaseChild name={this.state.name} />
      </>
    );
  }
}
export default ClassBaseParent;
