import React from "react";
import ReactDOM from "react-dom";
import Plataforma from "./platform";

import '../styles/platform.css'

function PlataformaContainer(props){
    if (props.isOpen) {
      return ReactDOM.createPortal(
        <Plataforma/>,document.querySelector("#plataforma")
      );
    }else{
        return null
    }
}

export default PlataformaContainer
