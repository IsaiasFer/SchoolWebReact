import React from "react";

class PrePlatform extends React.Component {
  render() {
    return (
        <div className="menu">
      <nav>
        <span>ELige tu plataforma de estudio!</span>
        <ul className="platforms">
          <li><a href="http://eet3141.ddns.net:8080/chamilo/"><img src="https://i.imgur.com/CqsFbpD.png" alt=""/></a></li>
          <li><a href="./plataforma/index.html"><img src="https://i.imgur.com/OGVelf2.pngg" alt=""/></a></li>
          <li><a href="http://eet3141.ddns.net:8080/moodle/"><img src="https://i.imgur.com/L0n8z2f.png" alt=""/></a></li>
        </ul>
      </nav>
    </div>
    );
  }
}

export default PrePlatform;