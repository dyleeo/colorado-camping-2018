import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div >{text}</div>; //this can be styled or used with another comp

class Map extends Component {

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: [process.env.GOOGLE_MAPS_API_KEY] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
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
