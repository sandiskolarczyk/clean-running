import React, { useState } from 'react';
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
`;

export const Home = () => {
  const [aqiData, setAqiData] = useState([]);

  // console.log('aqi in home', aqiData)
  // console.log('aqiset in home', setAqiData)
  return (
    <Container>
      <LandingPage id="Home" />
      <Map aqiData={aqiData} setAqiData={setAqiData} />
      <ResultsHeader id="Results">Let's see your results</ResultsHeader>
      {aqiData.length > 0 ? (
        <ResultsWrap>
          <Results aqiData={aqiData} />
        </ResultsWrap>
      ) : null}
    </Container>
  );
};
