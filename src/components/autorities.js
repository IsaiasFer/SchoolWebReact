import React from "react";

import Autority from './autority'

class Autorities extends React.Component {
  render() {
    return (
        <div className="fondoDegradado">
        <h1 className="pageTitle">Autoridades E.E.T.N° 3141</h1>
        <section className="authorities">
          <Autority imageURL='https://i.imgur.com/zCYivHdm.jpg' name='Prof. Jorge Enrique Pacheco' position='Director EETN° 3141'/>
          <Autority imageURL='https://i.imgur.com/CEZC0oK.jpg' name='Prof Mariana Gimenez' position='Vicedirectora TM'/>
          <Autority imageURL='https://i.imgur.com/IvHuKAF.jpg' name='Prof. Martin cardozo' position='Vicedirector TT'/>
          <Autority name='Prof. Silivina Calisaya' position='Secretaria'/>
          <Autority name='Klgo. Matias Morales' position='Prosecretario'/>
          <Autority imageURL='https://i.imgur.com/UUhnxCfl.jpg' name='Prof. Viviana Farfan' position='MEP TM'/>
          <Autority name='Sandra Ramirez' position='MEP TT'/>
        </section>
      </div> 
    );
  }
}

export default Autorities;