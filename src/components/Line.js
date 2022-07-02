import React from 'react'

import styled from 'styled-components'

export const Line = () =>  {
  return (
    <LineWrap></LineWrap>
  )
}

const LineWrap = styled.div`
height: 50px;
width: 2px;
background-color: mistyrose;
transform: translateY(-50%);
transition: 0.4 ease-in;
`