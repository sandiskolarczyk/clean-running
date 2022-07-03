import React from 'react';
import styled from 'styled-components';

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

export const Map = () => {
  return (
    <>
      <MapContainer id="Map">
        GOOGLE MAP
        <a href="#Results">
            <SubmitButton>
                Submit
            </SubmitButton>
        </a>
      </MapContainer>
    </>
  );
};
