import React from "react";
import {showContentDivisions} from "../scripts/functions";

function Curso(props) {
var abreviacion;
var ciclo;
var imgUrl;

switch (props.año) {
    case 1:
        abreviacion="er"
        break;
    case 2:
        abreviacion="do"
        break;
    case 3:
        abreviacion="er"
        break;
    case 4:
        abreviacion="to"
        break;

    default:
        break;
}
if(props.ciclo==="b"){
    ciclo="Ciclo Básico"
}else if(props.ciclo==="s"){
    ciclo="Ciclo Superior"
}

if(props.año===1 && props.ciclo==="b"){
    imgUrl="https://i.imgur.com/45ysIEL.png"
}else if(props.año===1 && props.ciclo==="s"){
    imgUrl="https://i.imgur.com/dJHRV95.png"
}else if(props.año===2 && props.ciclo==="b"){
    imgUrl="https://i.imgur.com/klOmYMF.png"
}else if(props.año===2 && props.ciclo==="s"){
    imgUrl="https://i.imgur.com/OKDZFLC.png"
}else if(props.año===3 && props.ciclo==="s"){
    imgUrl="https://i.imgur.com/IEdUyGC.png"
}else if(props.año===4 && props.ciclo==="s"){
    imgUrl="https://i.imgur.com/beupHtd.png"
}


  return (
    <div
      onClick={() => {
        showContentDivisions(props.id);
      }}
    >
      <figure className="curseContainer">
        <img src={imgUrl} alt="" />
      </figure>
      <h3>
        {props.año}<sup>{abreviacion}</sup> Año {ciclo}
      </h3>
    </div>
  );
}

export default Curso;
