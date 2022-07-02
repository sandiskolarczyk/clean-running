import React from 'react';
import styled from 'styled-components';
import { Results } from '../components/Results';

const Container = styled.div`

`

const MapContainer = styled.div`

`

export const Home = () => {
  return (
    <Container>
      <MapContainer />
      <Results />
    </Container>
  )
};
