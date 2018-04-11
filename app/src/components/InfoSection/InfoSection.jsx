import React, { Component } from 'react';

import Map from '../Map/Map';

import airbnb from '../../../assets/images/airbnb.png';
import airbnbInfo from '../../../assets/images/airbnb_logo.png';
import tent from '../../../assets/images/tent.jpg';

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
                <div className="month">AUG</div>
                <div className="day">4</div>
                <div className="year">2018</div>
              </div>
            </article>

            <article className="where">
              <header>WHERE</header>
              <div className="b-content-container map-box  shadow">
                <Map  />
              </div>
            </article>

          </div>


        </section>

        <section className="venue-container">

            <div className="b-content-container tent-container">
              <div className="tent-header">
                <div className="airbnb-logo"><img src={airbnb}/></div>
                <div className="airbnb-info"><img src={airbnbInfo}/></div>
              </div>

              <div className="visuals">
                <div className="house-pic shadow"><img src={tent}/></div>
              </div>
            </div>

        </section>

      </div>
    );
  };

}

export default InfoSection;

//const API_KEY = "AIzaSyAKVbiPguvPjEeOLOmipeErhsnWQSgi22s";
