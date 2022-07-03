import React from 'react';
import styled from 'styled-components';
import { LandingPage } from '../components/LandingPage';
import { Map } from '../components/Map';
import { Results } from '../components/Results';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const ResultsWrap = styled.div`
  margin-bottom: 30px;
`;

const ResultsHeader = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 35px;
  font-family: 'Nunito', Sans-serif;
`

export const Home = () => {
  return (
    <Container>
      <LandingPage />
      <Map />
      <ResultsWrap>
        <ResultsHeader id="Results">Let's see your results</ResultsHeader>
        <Results />
      </ResultsWrap>
    </Container>
  );
};
