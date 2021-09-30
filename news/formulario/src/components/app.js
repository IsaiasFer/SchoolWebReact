import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import NavBarContainerNew from './navBarContainerNew';


import Noticia from "./noticia"
import { burguerButton } from '../scripts/functions';
import ShareSection from './sharelinks';
/* import NotFound from './notFound'; */

class App extends React.Component {
  componentDidMount() {
    burguerButton();
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <NavBarContainerNew />
        <Switch>
          <Route exact path="" component={Noticia} />
        </Switch>
        <ShareSection link={window.location.href}/>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;