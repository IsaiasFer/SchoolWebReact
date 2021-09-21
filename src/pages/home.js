import React from 'react';

import Hero from '../components/hero';
import News from '../components/news';
import About from '../components/about';

import '../styles/landingStyles.scss';

class Home extends React.Component {
  componentWillUnmount(){
    window.scroll(0, 0)
  }
  render() {
    window.scroll(0, 0)
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
