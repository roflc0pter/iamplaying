import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./components/Root";
import "bootstrap/dist/css/bootstrap.min.css";

// const { ipcRenderer } = require("electron");
// ipcRenderer.on("os-resources", (event, data) => {
//   console.log("data", data);
// });

const App = () => {
  return <Root></Root>;
};

ReactDOM.render(<App />, document.getElementById("root"));
