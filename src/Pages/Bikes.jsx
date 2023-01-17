import React from 'react'
import { Box } from '@chakra-ui/react';
import BikeFilter from './BikeFilter';
import BikeComp from './BikeComp';

function Bikes() {
  return (
    <Box display="flex" bg="white" color="black">
      <Box w="27%">
        <BikeFilter />
      </Box>
      <Box w="70%">
        <BikeComp />
      </Box>
  </Box>
  )
}

export default Bikes
