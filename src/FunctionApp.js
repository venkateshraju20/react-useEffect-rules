import React, { useEffect, useState } from "react";
import "./App.css";

export default function FunctionApp() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // on every render
  useEffect(() => {
    console.log("re-renders always");
  });

  // on first render/mount only - componentDidMount
  useEffect(() => {
    console.log("component mounted");
  }, []);

  // on first render + whenever dependency changes!
  // componentDidUpdate
  useEffect(() => {
    console.log(`Didupdate the name changed: ${name}`);
  }, [name]);

  // follow the same rules, except this handles the unmounting on
  // a component by using return! - componentWillUnmount
  useEffect(() => {
    console.log(`Unmount the name changed: ${name}`);

    // when component unmounts, this cleanup code runs..
    return () => {
      console.log("the name unmounted");
    };
  });

  // follow the same rules, except this handles the unmounting on
  // a component by using return! - componentWillUnmount
  //   useEffect(() => {
  //     window.addEventListener("resize", updateWindowWidth);

  //     // when component unmounts, this cleanup code runs..
  //     return () => {
  //       window.removeEventListener("resize", updateWindowWidth);
  //     };
  //   }, []);

  return (
    <div className="App">
      <center>
        <h1>The UseEffect Hook</h1>
        <h2>The window width is: {windowWidth}</h2>
      </center>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter value"
      ></input>
    </div>
  );
}
