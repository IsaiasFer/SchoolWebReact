import React from "react";
import { showContentAsign } from "../scripts/functions";

function Division(props) {
  var abreviacion;
  var ciclo;
  var abreviacionD;
  var imgUrl;

  switch (props.año) {
    case 1:
      abreviacion = "ro";
      break;
    case 2:
      abreviacion = "do";
      break;
    case 3:
      abreviacion = "ro";
      break;
    case 4:
      abreviacion = "to";
      break;

    default:
      break;
  }

  switch (props.division) {
    case 1:
      abreviacionD = "ra";
      break;
    case 2:
      abreviacionD = "da";
      break;
    case 3:
      abreviacionD = "ra";
      break;
    case 4:
      abreviacionD = "ta";
      break;
    case 5:
      abreviacionD = "ta";
      break;

    default:
      break;
  }

  if (props.año === 1 && props.ciclo === "b") {
    imgUrl = "https://i.imgur.com/45ysIEL.png";
  } else if (props.año === 1 && props.ciclo === "s") {
    imgUrl = "https://i.imgur.com/dJHRV95.png";
  } else if (props.año === 2 && props.ciclo === "b") {
    imgUrl = "https://i.imgur.com/klOmYMF.png";
  } else if (props.año === 2 && props.ciclo === "s") {
    imgUrl = "https://i.imgur.com/OKDZFLC.png";
  } else if (props.año === 3 && props.ciclo === "s") {
    imgUrl = "https://i.imgur.com/IEdUyGC.png";
  } else if (props.año === 4 && props.ciclo === "s") {
    imgUrl = "https://i.imgur.com/beupHtd.png";
  }

  if (props.ciclo === "b") {
    ciclo = "Ciclo Básico";
  } else if (props.ciclo === "s") {
    ciclo = "Ciclo Superior";
  }

  return (
    <div
      onClick={() => {
        showContentAsign(props.id);
      }}
    >
      <figure className="curseContainer">
        <img src={imgUrl} alt="" />
      </figure>
      <h3>
        {props.año}
        <sup>{abreviacion}</sup> {props.division}
        <sup>{abreviacionD}</sup> {ciclo}
      </h3>
    </div>
  );
}

export default Division;
