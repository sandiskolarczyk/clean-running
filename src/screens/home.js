import React from 'react';
import MapDisplay from '../components/MapDisplay'
import { Box } from '@chakra-ui/react'


export const Home = () => {
  // console.log("hello")
  return (
    <Box minH="100vh">
      <MapDisplay />
    </Box>
  )
}
