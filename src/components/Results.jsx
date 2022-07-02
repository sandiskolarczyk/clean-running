import React from 'react'

import { Result } from './Result'

// mock data for now
const results = [
    {
        aqi: 50,
        category: "Moderate"
    },
    {
        aqi: 87,
        category: "High"
    },
    {
        aqi: 17,
        category: "Low"
    }
]

export const Results = () => {
  return (
    <>
    {results.map(item => <Result {...item}/>)}
    </>
  )
}
