import React from "react";

class Autority extends React.Component {
  render() {
    var imagen= this.props.imageURL||'https://i.imgur.com/d15bFnHl.jpg'
    return (
        <div>
            <figure>
              <img src={imagen}/* "https://i.imgur.com/zCYivHdm.jpg" */ alt=""/>
            </figure>
            <h3>{this.props.name}{/* Prof. Jorge Enrique Pacheco */}</h3>
            <h4>{this.props.position}{/* Director EETN° 3141 */}</h4>
          </div>
    );
  }
}

export default Autority;