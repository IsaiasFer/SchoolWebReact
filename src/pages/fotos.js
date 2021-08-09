import React from "react";

import Header from "../components/header";
import Footer from '../components/footer'
import PrePlatform from '../components/prePlatform'
import NavBar from '../components/navBar'
import PhotosContent from '../components/photosContent'

import '../styles/photoStyles.css'

class Fotos extends React.Component {
  render() {
    return (
        <div className="appContent">
        <PrePlatform/>
        <Header/>
        <div className="navContainer">
          <NavBar/>
        </div>
        <PhotosContent/>
        <Footer/>
      </div>
    );
  }
}

export default Fotos;