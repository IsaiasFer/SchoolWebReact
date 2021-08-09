import React from "react";

import Header from "../components/header";
import Hero from "../components/hero";
import News from '../components/news'
import About from '../components/about'
import Footer from '../components/footer'
import PrePlatform from '../components/prePlatform'

import "../styles/landingStyles.css";

class Home extends React.Component {
  render() {
    return (
      <div className="appContent">
        <PrePlatform/>
        <Header />
        <Hero />
        <News/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
