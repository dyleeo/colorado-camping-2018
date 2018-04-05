import React, { Component } from 'react';

import CountdownClock from '../CountdownClock/CountdownClock';

import testImg from '../../../assets/images/screen.png';
import heroImage from '../../../assets/images/colorado_hero_w.png';

import './Home.scss';

class Home extends Component {

  render() {
    return(
      <div id="home">
        <div className="smokescreen"></div>
        <div className="container">
          <div className="hero-img-container"><img src={heroImage} /></div>
          <div className="hero-content">
            <CountdownClock />
          </div>
          <div className="down-arrow" />
        </div>
        <div className="pexel">
          <a href="https://www.pexels.com/photo/mountain-and-lake-at-sunset-135157/">Photo by monicore - Pexels</a>
        </div>
      </div>
    );
  };

}

export default Home;
