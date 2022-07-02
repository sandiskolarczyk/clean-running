import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../styles/colors';

const ResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  background-color: transparent;
  border: 1px ${COLORS.sensitive} solid;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Result = ({ aqi, category }) => {
  return (
    <ResultWrapper>
      <Circle>
        <p>{aqi}</p>
      </Circle>
      <p>{category}</p>
    </ResultWrapper>
  );
};
