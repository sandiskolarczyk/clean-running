import { useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import GoogleMap from './GoogleMap';

const API_KEY = 'AIzaSyDgz-Iu4suXDMHGDFYxN1OBFYhtDWxEUPQ';
let markersArray = [];

export default function MapDisplay() {
  // console.log('inside MapDisplay');
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState({ lat: 51.53042, lng: -0.07647 });
  const [clicks, setClicks] = useState({ lat: 51.53042, lng: -0.07647 });
  const [allMarkers, setAllMarkers] = useState([]);

  const onClick = e => {
    if (allMarkers.length < 6) {
      // setClicks([e.latLng]);
      const lng = e.latLng.lng();
      const lat = e.latLng.lat();
      const coordinates = { lng: lng, lat: lat };
      // console.log(coordinates);
      setClicks(coordinates);
      markersArray.push(coordinates);
      setAllMarkers(markersArray);
      console.log(allMarkers);
    }
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
        allMarkers={allMarkers}
      >
        {/* {clicks.map((latLng, i) => (
        <Marker key={i} position={latLng} />
        ))} */}

        {/* <AllMarkers clicks={clicks} /> */}
      </GoogleMap>
    </Wrapper>
  );
}
