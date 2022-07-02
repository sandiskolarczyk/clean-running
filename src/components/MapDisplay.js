import { Wrapper, Status } from '@googlemaps/react-wrapper';
import GoogleMap from './GoogleMap';

const API_KEY = 'AIzaSyDgz-Iu4suXDMHGDFYxN1OBFYhtDWxEUPQ';

export default function MapDisplay() {
  console.log('inside MapDisplay');
  const zoom = 14;
  const center = { lat: -0.131, lng: 51.501 };

  const render = status => {
    console.log('inside render');
    if (status === Status.FAILURE) console.log('failure');
  };

  return (
    <Wrapper apiKey={API_KEY} render={render}>
      <div style={{ backgroundColor: 'black' }}>
        <GoogleMap
          center={center}
          zoom={zoom}
          // style={{ height: '100vh', width: '100vw' }}
        />
      </div>
    </Wrapper>
  );
}
