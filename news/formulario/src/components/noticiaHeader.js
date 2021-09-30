import React from "react";

import "../styles/newsStyles.css"

function NoticiaHeader(props) {
  return (
      <React.Fragment>
      <h3 class="date">{props.date}</h3>
      <h1 class="title">
        {props.title}
      </h1>
      <div class="autorContainer">
        <h3 class="autor">
          por <b>E.E.T. N°3141</b>
        </h3>
        <figure>
          <img
            src="https://i.imgur.com/7ymG1mA.pnghttps://i.imgur.com/7ymG1mA.png"
            alt=""
          />
        </figure>
      </div>
      <h2 class="subtitle ">{props.subtitle}</h2>
      </React.Fragment>
  );
}

export default NoticiaHeader