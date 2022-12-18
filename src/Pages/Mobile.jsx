import React from 'react'
import { Box } from '@chakra-ui/react';
import MobFilter from './MobFilter';
import MobComp from './MobComp';

function Mobile() {
  return (
    <Box display="flex" bg="white" color="black">
      <Box w="27%">
        <MobFilter />
      </Box>
      <Box w="70%">
        <MobComp />
      </Box>
  </Box>
  )
}

export default Mobile;
