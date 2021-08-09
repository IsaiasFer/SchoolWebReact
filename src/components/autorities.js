import React from "react";

import Autority from './autority'

class Autorities extends React.Component {
  render() {
    return (
        <div class="fondoDegradado">
        <h1 class="pageTitle">Autoridades E.E.T.N° 3141</h1>
        <section class="authorities">
          <Autority imageURL='https://i.imgur.com/zCYivHdm.jpg' name='Prof. Jorge Enrique Pacheco' position='Director EETN° 3141'/>
          <Autority imageURL='https://i.imgur.com/CEZC0oK.jpg' name='Prof Mariana Gimenez' position='Vicedirectora TM'/>
          <Autority imageURL='https://i.imgur.com/IvHuKAF.jpg' name='Prof. Martin cardozo' position='Vicedirector TT'/>
          <Autority imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg' name='Prof. Silivina Calisaya' position='Secretaria'/>
          <Autority imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg' name='Klgo. Matias Morales' position='Prosecretario'/>
          <Autority imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg' name='Prof. Valentin Trejo' position='Jefe de talleres'/>
          <Autority imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg' name='Prof. Viviana Farfan' position='MEP TM'/>
          <Autority imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg' name='Sandra Ramirez' position='MEP TT'/>
        </section>
      </div> 
    );
  }
}

export default Autorities;