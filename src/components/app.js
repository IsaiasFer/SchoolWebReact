import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Fotos from '../pages/fotos';
import Institucional from '../pages/institucional';
import Header from '../components/header';
import PrePlatform from './prePlatform';
import Footer from './footer';
import NavBarContainer from './navBarContainer';
import Academico from '../pages/academic';
import Locacion from '../pages/location';

import '../styles/platform.scss';
import { burguerButton, menuLateral } from '../scripts/functions';
import NotFound from './notFound';
// ---------NEWS---------
// import Formulario from './news/Formulario';
import Comisiones from './news/comisiones';
import SorteoTurnos from './news/sorteoTurnos';
import Bioseguridad from './news/bioseguridad';
import Dictamen from './news/dictamenInterno';
import new1 from './news/new1';
import new2 from './news/new2';
import new3 from './news/new3';
import new4 from './news/new4';
import new5 from './news/new5';
import new6 from './news/new6';
import new7 from './news/new7';
import new8 from './news/new8';
import new9 from './news/new9';
import new10 from './news/new10';
import new11 from './news/new11';
import talleres_24_09 from './news/talleres24_09';

class App extends React.Component {
  componentDidMount() {
    burguerButton();
    menuLateral();
  }
  render() {
    return (
      <BrowserRouter>
        <PrePlatform />
        <Header />
        <NavBarContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fotos" component={Fotos} />
          <Route exact path="/institucional" component={Institucional} />
          <Route exact path="/plataformas" component={PrePlatform} />
          <Route exact path="/ubicacion" component={Locacion} />
          <Route exact path="/academico" component={Academico} />
          <Route exact path="/comisiones" component={Comisiones} />
          <Route exact path="/sorteo" component={SorteoTurnos} />
          <Route exact path="/bioseguridad" component={Bioseguridad} />
          <Route exact path="/dictamen" component={Dictamen} />
          <Route exact path="/DICTAMEN T.E.L.Y F. E" component={new1} />
          <Route exact path="/ASPIRANTES" component={new2} />
          <Route exact path="/CONVOCATORIA" component={new3} />
          <Route exact path="/MERITO" component={new4} />
          <Route exact path="/CONTINIUDAD PEDAGÓGICA" component={new5} />
          <Route exact path="/ASPIRANTES BROMATOLOGÍA" component={new6} />
          <Route exact path="/LIBERACION CATEDRA" component={new7} />
          <Route exact path="/MESAS 07/2021" component={new8} />
          <Route exact path="/MESAS 06/2021" component={new9} />
          <Route exact path="/COMUNICADO DE MESAS JULIO" component={new10} />
          <Route exact path="/CONCURSO GUEMES" component={new11} />
          <Route exact path="/Talleres 23_09" component={talleres_24_09} />

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
