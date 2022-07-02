import React from 'react'
import {GiCircle} from 'react-icons/gi'

export const  Result = ({aqi, category}) => {
  return (
    <div>
        <GiCircle width={70}/>
        <p>{aqi}</p>
        <p>{category}</p>
    </div>
  )
}
