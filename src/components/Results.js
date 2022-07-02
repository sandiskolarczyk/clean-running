import React from 'react'

import styled from 'styled-components';

import { Result } from './Result'
import { Line } from './Line';

// mock data for now
const results = [
    {
        aqi: 50,
        category: "Sensitive"
    },
    {
        aqi: 87,
        category: "Very Unhealthy"
    },
    {
        aqi: 17,
        category: "Good"
    },
    {
        aqi: 17,
        category: "Good"
    }
]

const ResultsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const Results = () => {
  return (
    <ResultsWrapper>
    {results.map((item, idx) => <Result key={idx} {...item}/>)}
    <Line/>
    </ResultsWrapper>
  )
}