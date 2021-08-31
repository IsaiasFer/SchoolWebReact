import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/home'
import Fotos from '../pages/fotos'
import Institucional from '../pages/institucional'
import Header from '../components/header'
import PrePlatform from './prePlatform';
import Footer from './footer';
import NavBarContainer from './navBarContainer';

import '../styles/platform.css'
import { burguerButton, menuLateral } from '../scripts/functions';
import NotFound from './notFound';


class App extends React.Component {
    componentDidMount(){
        burguerButton()
        menuLateral()
    }
    render() {
        return (
            <BrowserRouter>
                <PrePlatform />
                <Header />
                <NavBarContainer />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/fotos' component={Fotos} />
                    <Route exact path='/institucional' component={Institucional} />
                    <Route exact path='/plataformas' component={PrePlatform} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;