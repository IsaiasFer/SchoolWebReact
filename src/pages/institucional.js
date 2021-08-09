import React from "react";

import Header from "../components/header";
import Footer from '../components/footer'
import PrePlatform from '../components/prePlatform'
import NavBar from '../components/navBar'
import Autorities from '../components/autorities'

import "../styles/institucionalStyles.css";

class Institucional extends React.Component {
  render() {
    return (
      <div className="appContent">
        <PrePlatform/>
        <Header/>
        <div className="navContainer">
          <NavBar/>
        </div>
        <Autorities/>
        <Footer/>
      </div>
    );
  }
}

export default Institucional;