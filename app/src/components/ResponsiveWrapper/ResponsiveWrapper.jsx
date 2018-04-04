import React, { Component } from 'react';
import _ from 'lodash';
import Home from '../Home/Home';
import InfoSection from '../InfoSection/InfoSection';

class ResponsiveWrapper extends Component {

  render() {
    return(
      <section id="responsive-wrapper">
        <Home />
        <InfoSection />
      </section>
    );
  };

}

export default ResponsiveWrapper;
