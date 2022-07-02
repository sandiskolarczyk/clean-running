import React from 'react'

export const  Result = ({aqi, category}) => {
  return (
    <div>
        <p>{aqi}</p>
        <p>{category}</p>
    </div>
  )
}
