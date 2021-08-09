import React from "react";

class Autority extends React.Component {
  render() {
    return (
        <div>
            <figure>
              <img src={this.props.imageURL}/* "https://i.imgur.com/zCYivHdm.jpg" */ alt=""/>
            </figure>
            <h3>{this.props.name}{/* Prof. Jorge Enrique Pacheco */}</h3>
            <h4>{this.props.position}{/* Director EETN° 3141 */}</h4>
          </div>
    );
  }
}

export default Autority;