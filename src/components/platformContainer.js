import React from "react";
import ReactDOM from "react-dom";
import Plataforma from "./platform";

import '../styles/platform.css'

function PlataformaContainer(props){
  const App=document.querySelector('#app')
    if (props.isOpen) {
      App.classList.add('delete')
      return ReactDOM.createPortal(
        <Plataforma onClose={props.onClose} onOpen={props.onOpen}/>,document.querySelector("#plataforma")
      );
    }else{
        App.classList.remove('delete')
        return null
    }
}

export default PlataformaContainer
