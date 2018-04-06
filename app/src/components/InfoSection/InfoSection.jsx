import React, { Component } from 'react';

import Map from '../Map/Map';

import './InfoSection.scss';

class InfoSection extends Component {


  render() {
    return(
      <div id="info">

        <h1>Information</h1>

        <section className="info-section">

          <h2>It's Colorado or bust!</h2>
          <p>It started as a nonchalant challenge from Tito and Sewon during a fun-filled family gathering, and so planted was the seed of what this "camping" trip has evolved into.</p>


          <div className="panels-container">

            <article className="when">
              <header>WHEN</header>
              <div className="b-content-container">
                <h1>August 4th, 2018</h1>
              </div>
            </article>

            <article className="where">
              <header>WHERE</header>
              <div className="b-content-container map-box">
                <Map  />
              </div>
            </article>

          </div>


        </section>

      </div>
    );
  };

}

export default InfoSection;

//const API_KEY = "AIzaSyAKVbiPguvPjEeOLOmipeErhsnWQSgi22s";
