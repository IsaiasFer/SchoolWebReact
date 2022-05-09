import React from 'react';

import '../styles/newsStyles.scss';

function NoticiaHeader(props) {
  return (
    <React.Fragment>
      <h3 className="date">{props.date}</h3>
      <h1 className="title">{props.title}</h1>
      <div className="autorContainer">
        <h3 className="autor">
          por <b>E.E.T. N°3141</b>
        </h3>
        <figure>
          <img
            src="https://i.imgur.com/7ymG1mA.pnghttps://i.imgur.com/7ymG1mA.png"
            alt=""
          />
        </figure>
      </div>
      <h2 className="subtitle ">{props.subtitle}</h2>
    </React.Fragment>
  );
}

export default NoticiaHeader;
