import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { AirUtilAPI } from '../api/AirUtilAPI';
import GoogleMap from './GoogleMap';
import { MAP_API } from '../apiKeys/apiKeys';

let markersArray = [];

const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #937dc2;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 3px 3px 2px 1px rgba(50, 10, 205, 0.2);
  font-family: 'Inconsolata';
  font-size: 18px;
`;

const ResultsButton = styled(SubmitButton)`
  width: 200px;
`;

export default function MapDisplay({ aqiData, setAqiData }) {
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState({ lat: 51.53042, lng: -0.07647 });
  const [clicks, setClicks] = useState();
  const [allMarkers, setAllMarkers] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  const onClick = e => {
    if (allMarkers.length <= 5) {
      const lng = e.latLng.lng();
      const lat = e.latLng.lat();
      const coordinates = { lng: lng, lat: lat };
      setClicks(coordinates);
      markersArray.push(coordinates);
      setAllMarkers(markersArray);
    }
  };

  const render = status => {
    if (status === Status.FAILURE) console.log('Failed response');
  };

  useEffect(() => {
    const getData = async () => {
      setAqiData([]);
      for (let i = 0; i < coordinates.length; i++) {
        if (Object.keys(coordinates[i]).length !== 0) {
          const data = await AirUtilAPI(coordinates[i].lat, coordinates[i].lng);
          setAqiData(aqiData => [...aqiData, data]);
        }
      }
    };

    getData();
  }, [coordinates, setAqiData]);

  const handleSubmit = e => {
    e.preventDefault();
    if (allMarkers.length === 5) {
      allMarkers.pop();
      setCoordinates([...allMarkers]);
    }
    setCoordinates([...allMarkers]);
  };

  return (
    <Wrapper apiKey={MAP_API} render={render}>
      <GoogleMap
        center={center}
        zoom={zoom}
        position={clicks}
        onClick={onClick}
        allMarkers={allMarkers}
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>

      {aqiData.length > 0 ? (
        <a href="#Results">
          <ResultsButton>See Results</ResultsButton>
        </a>
      ) : (
        <iframe
          title="flying paper plane"
          src="https://embed.lottiefiles.com/animation/77737"
        ></iframe>
      )}
    </Wrapper>
  );
}
