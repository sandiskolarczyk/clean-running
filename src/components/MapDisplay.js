import { useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import GoogleMap from './GoogleMap';
import AllMarkers from './AllMarkers';
// import Marker from './Marker';

const API_KEY = 'AIzaSyDgz-Iu4suXDMHGDFYxN1OBFYhtDWxEUPQ';

export default function MapDisplay() {
  console.log('inside MapDisplay');
  const [zoom, setZoom] = useState(12);
  const [center, setCenter] = useState({ lat: 51.501, lng: -0.131 });
  const [position, setPosition] = useState({ lat: 51.53042, lng: -0.07647 });
  const [clicks, setClicks] = useState([]);

  const onClick = e => {
    setClicks([e.latLng]);
    // console.log('position', clicks, e.latLng._.De);
  };

  const render = status => {
    console.log('status', status);
    if (status === Status.FAILURE) console.log('failure');
  };

  return (
    <Wrapper apiKey={API_KEY} render={render}>
      <GoogleMap
        center={center}
        zoom={zoom}
        position={position}
        onClick={onClick}
      >
        <AllMarkers clicks={clicks} />
      </GoogleMap>
    </Wrapper>
  );
}
