import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer.js";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  rootElement
);
