import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import ResponsiveWrapper from './ResponsiveWrapper/ResponsiveWrapper';

import '../../scss/main.scss';


class Main extends Component {
  render() {
      return (
        <HashRouter>
          <ResponsiveWrapper />
        </HashRouter>
      );
  }
}

export default Main;
