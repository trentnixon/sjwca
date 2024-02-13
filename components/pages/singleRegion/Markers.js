import React from 'react';
import { Marker } from '@react-google-maps/api';

const Markers = ({ grounds, markerIcon }) => {
  return grounds.map((region, i) => (
    <Marker
      key={i}
      icon={markerIcon}
      position={{
        lat: parseFloat(region.Lat),
        lng: parseFloat(region.Long),
      }}
    />
  ));
};

export default Markers;
