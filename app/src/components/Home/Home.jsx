import React, { Component } from 'react';
import testImg from '../../../assets/images/screen.png';
import './Home.scss';

class Home extends Component {

  render() {
    return(
      <div id="Home">
        <h1>HOME</h1>
        <div>
          Hello React!
          <img src={testImg} />
          
        </div>
    </div>
    );
  };

}

export default Home;
