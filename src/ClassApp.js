import React, { Component } from "react";

export default class ClassApp extends Component {
  state = {
    windowWidth: window.innerWidth,
  };

  componentDidMount() {
    console.log("Didmount");
  }

  componentDidUpdate() {
    console.log("Didupdate");
  }

  componentWillUnmount() {
    console.log("Willunmount");
  }

  render() {
    return (
      <div>
        <center>
          <h1>The UseEffect Hook</h1>
          <h2>The window width is: {this.state.windowWidth}</h2>
        </center>
      </div>
    );
  }
}
