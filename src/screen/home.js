import { React, useState, useEffect } from 'react';
import { AirUtilAPI } from '../api/AirUtilAPI';
import { Box, Text } from '@chakra-ui/react';

export const Home = () => {
  // const [latLng1, setLatLng1] = useState({});
  // const [latLng2, setLatLng2] = useState({});
  // const [latLng3, setLatLng3] = useState({});
  // const [latLng4, setLatLng4] = useState({});
  // const [latLng5, setLatLng5] = useState({});
  const [coordinates, setCoordinates] = useState([]);
  const [aqiData, setAqiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setAqiData([]);
      for (let i = 0; i < coordinates.length; i++) {
        // console.log(coordinate[i].lat, coordinate[i].lng);
        if (Object.keys(coordinates[i]).length !== 0) {
          const data = await AirUtilAPI(coordinates[i].lat, coordinates[i].lng);
          setAqiData(aqiData => [...aqiData, data]);
          console.log(coordinates[i]);
          // setAqiData(coordinate);
        }
      }
    };
    getData();
  }, [coordinates]);

  const handleSubmit = e => {
    e.preventDefault();

    setCoordinates([
      { lat: 21.4107071, lng: 39.2245606 },
      { lat: 21.3783405, lng: 39.242746 },
      { lat: 37.4815, lng: -122.2091 },
      { lat: 36.4787, lng: -121.7244 },
      { lat: 21.4345697, lng: 39.2816971 },
    ]);
  };

  console.log(coordinates);

  return (
    <>
      <Box>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <Text>Response: </Text>
        {aqiData.map(data => {
          return (
            <div>
              <Text>Aqi: {data[0].aqi}</Text>
              <Text>Category: {data[0].category}</Text>
            </div>
          );
        })}
      </Box>
    </>
  );
};
