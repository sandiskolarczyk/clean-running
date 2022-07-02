import { useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import GoogleMap from './GoogleMap';
// import AllMarkers from './AllMarkers';
// import Marker from './Marker';

const API_KEY = 'AIzaSyDgz-Iu4suXDMHGDFYxN1OBFYhtDWxEUPQ';

export default function MapDisplay() {
  // console.log('inside MapDisplay');
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState({ lat: 51.53042, lng: -0.07647 });
  const [position, setPosition] = useState();
  const [clicks, setClicks] = useState({});

  const onClick = e => {
    // setClicks([e.latLng]);
    const lng = e.latLng.lng()
    const lat = e.latLng.lat()
    const coordinates = {lng: lng, lat: lat}
    console.log(coordinates)
    setClicks(coordinates);
    console.log(clicks)
    // console.log("lng", lng)
    // console.log("lat", lat)
  };

  const render = status => {
    // console.log('status', status);
    if (status === Status.FAILURE) console.log('failure');
  };

  return (
    <Wrapper apiKey={API_KEY} render={render}>
      <GoogleMap
        center={center}
        zoom={zoom}
        position={clicks}
        onClick={onClick}
      >

        {/* {clicks.map((latLng, i) => (
        <Marker key={i} position={latLng} />
        ))} */}

        {/* <AllMarkers clicks={clicks} /> */}
      </GoogleMap>
    </Wrapper>
  );
}
