import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../../../assets/data/map_cleancut.json';
import sign from '../../../assets/images/sign.png';

//<img className="sign-post" src={sign} />
const AnyReactComponent = ({ text }) => <div className="map-info" >

    {text}
  </div>; //this can be styled or used with another comp

class Map extends Component {

  createMapOptions(maps) {
    return {
      styles: mapStyles
    }
  }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: [process.env.GOOGLE_MAPS_API_KEY] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        options={this.createMapOptions}
      >
        <AnyReactComponent
          lat={39.6528607}
          lng={-106.1162855}
          text={'Silverthorne, Colorado'}
        />
      </GoogleMapReact>
    );
  }
}

Map.defaultProps = {
  center: {
    lat: 39.6528607,
    lng: -106.1162855
  },
  zoom: 7
};

export default Map;
