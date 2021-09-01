import React from "react";
import PlataformaContainer from "./platformContainer";

class PrePlatform extends React.Component {
  state = {
    modalIsOpen: false,
  };

  handleOpen = (e) => {
    this.setState({ modalIsOpen: true });
  };
  handleClose = (e) => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="menu">
        <nav>
          <span>ELige tu plataforma de estudio!</span>
          <ul className="platforms">
            <li>
              <button>
                <a href="http://eet3141.ddns.net:8080/chamilo/">
                  <img src="https://i.imgur.com/CqsFbpD.png" alt="" />
                </a>
              </button>
            </li>
            <li>
              <button>
                <PlataformaContainer
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  isOpen={this.state.modalIsOpen}
                />
                <img
                  src="https://i.imgur.com/OGVelf2.pngg"
                  onClick={this.handleOpen}
                  alt=""
                />
              </button>
            </li>
            <li>
              <button href="http://eet3141.ddns.net:8080/moodle/">
                <a href="http://eet3141.ddns.net:8080/chamilo/">
                  <img src="https://i.imgur.com/L0n8z2f.png" alt="" />
                </a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default PrePlatform;
