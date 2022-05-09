import React, { Component } from "react";

export default class ClassComp extends Component {
  render() {
    return (
      <div className="container2">
        <h1>This is created using class Component</h1>
        <h4>This is done using external CSS</h4>
        <h5 style={{ color: "white" }}>This is done using internal CSS</h5>
      </div>
    );
  }
}
