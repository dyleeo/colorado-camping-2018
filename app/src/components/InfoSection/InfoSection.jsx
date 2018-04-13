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

        <h1 className="header-banner">Information</h1>

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

              <div className="tent-amenities">
                <h1>Amenities</h1>
                <div className="row">
                  <div className="info-col col-xs-12 col-md-4 col-lg-4 ">
                    <h3>Basic</h3>
                    <div className="listing">
                      -Dryer<br />
                      <div className="sub">In the building, free or for a fee</div><br />

                      -Essentials<br />
                      <div className="sub">Towels, bed sheets, soap, and toilet paper</div><br />

                      -Indoor fireplace<br /><br />

                      -Heating<br />
                      <div className="sub">Central heating or a heater in the listing</div><br />

                      -Hot water<br /><br />

                      -Iron<br /><br />

                      -Laptop friendly workspace<br />
                      <div className="sub">A table or desk with space for a laptop and a chair that’s comfortable to work in</div><br />

                      -TV<br /><br />

                      -Washer<br />
                      <div className="sub">In the building, free or for a fee</div><br />

                      -Wifi<br />
                      <div className="sub">Continuous access in the listing</div><br />
                    </div>
                  </div>

                  <div className="info-col col-xs-12 col-md-4 col-lg-4">
                    <h3>Family features</h3>
                    <div className="listing">
                      -Baby monitor<br />
                      -Bathtub<br />
                      -Children’s books and toys<br />
                      -Crib<br />
                      -High chair<br />
                      -Pack ’n Play/travel crib<br />
                      -Stair gates<br />

                      <h3>Facilities</h3>
                      -Free parking on premises<br />
                      -Gym<br />
                      -Free, in the building or nearby<br />
                      -Hot tub<br /><br />


                      <h3>Dining</h3>
                      -Kitchen<br />
                      <div className="sub">Space where guests can cook their own meals</div>
                    </div>
                  </div>

                  <div className="info-col col-xs-12 col-md-4 col-lg-4">

                    <h3>Guest access</h3>
                    <div className="listing">
                      -Keypad
                      <div className="sub">A keypad must be available 24 hours a day to provide entry to your listing for your guest</div><br />

                      -Private entrance
                      <div className="sub">Separate street or building entrance</div>

                      <h3>Bed and bath</h3>
                      -Hair dryer<br />
                      -Hangers<br />
                      -Shampoo<br />

                      <h3>Safety features</h3>
                      -Fire extinguisher<br />
                      -Carbon monoxide detector<br />
                      -Smoke detector<br />
                      -First aid kit<br />
                    </div>
                  </div>

                </div>

              </div>
            </div>
        </section>

      </div>
    );
  };

}

export default InfoSection;

//const API_KEY = "AIzaSyAKVbiPguvPjEeOLOmipeErhsnWQSgi22s";
