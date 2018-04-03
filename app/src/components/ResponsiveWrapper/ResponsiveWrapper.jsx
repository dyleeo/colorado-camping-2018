import React, { Component } from 'react';
import _ from 'lodash';
import Home from '../Home/Home';

class ResponsiveWrapper extends Component {

  render() {
    return(
      <section id="responsive-wrapper">
        <Home />
      </section>
    );
  };

}

export default ResponsiveWrapper;
