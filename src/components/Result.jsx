import React from 'react'
import styled from 'styled-components'
import {GiCircle} from 'react-icons/gi'

const Circle = styled.div`
    background-color: transparent;
    border: 1px black solid;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    text-align: center;
    padding: 40px 0 0 0;
`

export const  Result = ({aqi, category}) => {
  return (
    <div>
        {/* <GiCircle size={70}/> */}
        <Circle>
        <p>{aqi}</p>
        </Circle>
        <p>{category}</p>
    </div>
  )
}
