import React from "react";

function Asignatura(props) {
  if (props.programa === "") {
    return (
      <p className="noExiste">
        El programa de {props.nombre} no se encuentra disponible.
      </p>
    );
  } else {
    return (
      <p>
        Descargar:
        <a href={props.programa} download>
          Programa de {props.nombre}
        </a>
      </p>
    );
  }
}

export default Asignatura;
