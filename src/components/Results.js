import React from 'react';

import styled, { keyframes } from 'styled-components';

import { Result } from './Result';

// mock data for now
const results = [
  {
    aqi: 50,
    category: 'Sensitive',
  },
  {
    aqi: 87,
    category: 'Very Unhealthy',
  },
  {
    aqi: 17,
    category: 'Good',
  },
  {
    aqi: 37,
    category: 'Moderate',
  },
  {
    aqi: 300,
    category: 'Hazardous',
  },
  {
    aqi: 60,
    category: 'Unhealthy',
  },
];

const ResultsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
  /* justify-content: center;
  align-items: center; */
  /* min-height: 100vh; */
  max-height: 100%;
  width: 500px;
`;

const lineAnimation = keyframes`
0% {height: 0%;}
100% {height: 85%;}
`;

const Animation = styled.div`
  & {
    background-color: #e0e0e0;
    position: absolute;
    top: 10%;
    left: 5%;
    transform: translateX(-50%);
    height: 85%;
    width: 4px;
    z-index: -1;
    transition: 0.4s ease;
    animation-name: ${lineAnimation};
    animation-duration: 5s;
  }

  /* &::before {
    content: '';
    background-color: #e0e0e0;
    position: absolute;
    top: 0%;
    left: 5%;
    height: 200%;
    width: 4px;
    z-index: -2;
  } */
`;

export const Results = () => {
  return (
    <ResultsWrapper>
      <Animation />
      {results.map((item, idx) => (
        <Result key={idx} {...item} />
      ))}
    </ResultsWrapper>
  );
};