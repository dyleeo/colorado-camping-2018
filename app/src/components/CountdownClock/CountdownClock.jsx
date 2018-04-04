import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import './CountdownClock.scss';


class CountdownClock extends Component {

  constructor() {
    super();

    this.state = {
      current: new Date(),
      target: new Date('2018-08-04'),
      time: {
        total: null,
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
      }
    };

    this.timeinterval = undefined;
    //this.getCountdownData = this.getCountdownData.bind(this);

  }

  componentWillMount() {
    this.initializeClock(this.state.target);
  }

  componentWillUnmount() {
    this.initializeClock(this.state.target);
  }

  initializeClock(endtime) {
    this.timeinterval = setInterval(()=>{
      this.getCountdownData();
      if(this.state.time.total<=0){
        clearInterval(this.timeinterval);
      }
    },1000);
  }

  getCountdownData() {
    const timeDelta = Date.parse(this.state.target) - Date.parse(new Date());
    const seconds = Math.floor((timeDelta / 1000) % 60);
    const minutes = Math.floor((timeDelta / 1000 / 60) % 60);
    const hours = Math.floor((timeDelta / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDelta / (1000 * 60 * 60 * 24));

    this.setState({
      time: {
        total: timeDelta,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    });
  }

  render() {
    return (
      <div className="countdown-container">
        <div className="container days"><span>DAYS</span>{this.state.time.days}</div>
        <div className="container hrs"><span>HOURS</span>{this.state.time.hours}</div>
        <div className="container mins"><span>MINUTES</span>{this.state.time.minutes}</div>
        <div className="container secs"><span>SECONDS</span>{this.state.time.seconds}</div>
      </div>
    );
  }

}

export default CountdownClock;
