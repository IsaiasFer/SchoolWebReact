import React from "react";

function Asignatura(props) {
  return (
    <p>
      Descargar:{" "}
      <a
        href={props.programa}
        target="blank"
      >
        {props.nombre}.pdf
      </a>
    </p>
  );
}

export default Asignatura;
