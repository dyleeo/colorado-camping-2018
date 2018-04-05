import React, { Component } from 'react';

import './InfoSection.scss';

class InfoSection extends Component {

  render() {
    return(
      <div id="info">

        <h1>Information</h1>

        <section className="info-section">

          <h2>It's Colorado or bust!</h2>
          It started as a nonchalant challenge from Tito and Sewon during a fun-filled<br/>family gathering, and so planted was the seed of what this "camping" trip has evolved into.


          <div className="panels-container">
            <article className="when">
              <header>WHEN</header>
              <div className="content-container">
                August 4th, 2018
              </div>
            </article>

            <article className="where">
              <header>WHERE</header>
              <div className="content-container">aaa</div>
            </article>

          </div>


        </section>

      </div>
    );
  };

}

export default InfoSection;
