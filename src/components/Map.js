import React from 'react';
import styled from 'styled-components';
import MapDisplay from './MapDisplay';

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(102, 191, 191, 0.5);
  display: flex;
  justify-content: space-evenly;
  flex-flow: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Map = ({aqiData, setAqiData}) => {
  return (
    <>
      <MapContainer id="Route">
        <MapDisplay aqiData={aqiData} setAqiData={setAqiData} />
      </MapContainer>
    </>
  );
};
