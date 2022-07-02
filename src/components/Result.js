import React from 'react';
import styled, { keyframes } from 'styled-components';
import { resultInfo } from '../utils/resultInfo'
import { COLORS } from '../styles/colors';

const LEVELS = {
    good: COLORS.good,
    moderate: COLORS.moderate,
    sensitive: COLORS.sensitive,
    unhealthy: COLORS.unhealthy,
    "very unhealthy": COLORS.veryUnhealthy,
    hazardous: COLORS.hazardous
}

const ResultWrapper = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black */
`

const Circle = styled.div`
  background-color: transparent;
  border: 2px solid ${props => props.color};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
const Level = styled.div`
  text-align: center;
  font-weight: 900;
  margin-right: 20px;
`

const Detail = styled.div`
  width: 250px;
  font-family: Sans-serif;
`

const drawLine = keyframes`

`
// @keyframes increase {
//   100% {
//       width: 300px;
//   }
// }


export const Result = ({ aqi, category }) => {
    return (
      <ResultWrapper>
        <Circle color={LEVELS[category.toLowerCase()]}>
          <p>{aqi}</p>
        </Circle>
        <Level>
          <p>{category.toUpperCase()}</p>
        </Level>
        <Detail>
          <p>{resultInfo[category.toLowerCase()]}</p>
        </Detail>
      </ResultWrapper>
    );
  };
