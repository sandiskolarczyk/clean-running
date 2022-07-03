import React from 'react';

import styled, { keyframes } from 'styled-components';
import { MEDIA } from '../styles/media';

import { Result } from './Result';

// mock data 
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
];

const ResultsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  // height: 100vh;
  margin-bottom: 300px;
  width: 500px;
`;

const lineAnimationMobile = keyframes`
    0% {height: 0%;}
    100% {height: 45%;}
`;

const lineAnimationDesktop = keyframes`
    0% {height: 0%;}
    100% {height: 70%;}
`;

const Animation = styled.div`
  background-color: #e0e0e0;
  position: absolute;
  top: 10%;
  left: 5%;
  transform: translateX(-50%);
  height: 70%;
  width: 4px;
  z-index: -1;
  animation-name: ${lineAnimationDesktop};
  transition: 0.4s ease;
  animation-duration: 5s;

  @media (max-width: ${MEDIA.desktop}) {
    animation-name: ${lineAnimationMobile};
    height: 45%;
  }
`;

const itemAnimation = keyframes`
  0% {margin-bottom: -20px;}
  40% {margin-bottom: 20px;}
  100% {margin-bottom: 0px;}
`;

const ResultAnimation = styled.div`
  transition: 0.4s ease;
  animation-name: ${itemAnimation};
  animation-duration: 3s;
`;

export const Results = ({aqiData}) => {
  
  return (
    <ResultsWrapper>
      <Animation />
      {aqiData.map((item, idx) => (
        <ResultAnimation>
          <Result key={idx} {...item[0]} />
        </ResultAnimation>
      ))}
    </ResultsWrapper>
  );
};
