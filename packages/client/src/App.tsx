import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes";
import { Root } from "./components/Root";

// const { ipcRenderer } = require("electron");
// ipcRenderer.on("os-resources", (event, data) => {
//   console.log("data", data);
// });

const App = () => {
  return (
    <BrowserRouter>
      <Root>{routes}</Root>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
