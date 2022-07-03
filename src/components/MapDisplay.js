import { React, useState, useEffect } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { AirUtilAPI } from '../api/AirUtilAPI';
import GoogleMap from './GoogleMap';

const API_KEY = 'AIzaSyDgz-Iu4suXDMHGDFYxN1OBFYhtDWxEUPQ';
let markersArray = [];

export default function MapDisplay() {
  // console.log('inside MapDisplay');
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState({ lat: 51.53042, lng: -0.07647 });
  const [clicks, setClicks] = useState({ lat: 51.53042, lng: -0.07647 });
  const [allMarkers, setAllMarkers] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [aqiData, setAqiData] = useState([]);

  const onClick = e => {
    if (allMarkers.length <= 5) {
      // setClicks([e.latLng]);
      const lng = e.latLng.lng();
      const lat = e.latLng.lat();
      const coordinates = { lng: lng, lat: lat };
      // console.log(coordinates);
      setClicks(coordinates);
      markersArray.push(coordinates);
      setAllMarkers(markersArray);
      // console.log(allMarkers);
    }
  };

  const render = status => {
    // console.log('status', status);
    if (status === Status.FAILURE) console.log('failure');
  };

  useEffect(() => {
    const getData = async () => {
      setAqiData([]);
      for (let i = 0; i < coordinates.length; i++) {
        // console.log(coordinate[i].lat, coordinate[i].lng);
        if (Object.keys(coordinates[i]).length !== 0) {
          // const data = await AirUtilAPI(coordinates[i].lat, coordinates[i].lng);
          // setAqiData(aqiData => [...aqiData, data]);
          // console.log(coordinates[i]);
          // setAqiData(coordinate);
        }
      }
    };
    getData();
  }, [coordinates]);

  const handleSubmit = e => {
    e.preventDefault();
    if (allMarkers.length === 5) {
      allMarkers.pop();
      // console.log(allMarkers);
      // console.log(coordinates);
    }

    setCoordinates([{ lng: -0.07647, lat: 51.53042 }, ...allMarkers]);
    // console.log(allMarkers);
    // console.log(coordinates);
  };

  return (
    <Wrapper apiKey={API_KEY} render={render}>
      <GoogleMap
        center={center}
        zoom={zoom}
        position={clicks}
        onClick={onClick}
        allMarkers={allMarkers}
      ></GoogleMap>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <h2>Response: </h2>
      {aqiData.map(data => {
        return (
          <div>
            <h3>Aqi: {data[0].aqi}</h3>
            <h3>Category: {data[0].category}</h3>
          </div>
        );
      })}
    </Wrapper>
  );
}
