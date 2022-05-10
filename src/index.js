import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import "./styles/globalStyles.css";

const appContainer = document.getElementById("app");

if (appContainer.hasChildNodes()) {
  ReactDOM.hydrate(<App />, appContainer);
} else {
  ReactDOM.render(<App />, appContainer);
}
