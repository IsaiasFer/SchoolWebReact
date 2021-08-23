import React from "react";
import ReactDOM from "react-dom";
/* import App from "./components/app"; */
import PlataformaContainer from "./components/platformContainer";



import "./styles/globalStyles.css";

const appContainer = document.getElementById("app");

ReactDOM.render(<PlataformaContainer isOpen="true" />, appContainer);