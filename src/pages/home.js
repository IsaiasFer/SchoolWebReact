import React from "react";

import Hero from "../components/hero";
import News from '../components/news'
import About from '../components/about'

import "../styles/landingStyles.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <News />
        <About />
      </React.Fragment>
    );
  }
}

export default Home;
