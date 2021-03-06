import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/tailwind/before.css";
import "./index.css";
import "antd/dist/antd.css";
import "./stylesheets/font/font.css";
import "./stylesheets/tailwind/after.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
