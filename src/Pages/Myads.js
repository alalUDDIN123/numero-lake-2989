import React from 'react'
import { Flex,Box } from '@chakra-ui/react'
function Myads() {

  // backgroundColor={{sm:"mobilex",md:"tablet",lg:"main"}}

  return (
    <div>
        <Flex margin="5"  >
  <Box p='4' borderBottom="1px" borderColor="gray" cursor="pointer" fontSize="small">
    ADS
  </Box>
  <Box p='4' borderBottom="1px" borderColor="gray" cursor="pointer" fontSize="small">
  FAVOURITES
  </Box>
</Flex>
    </div>
  )
}

export default Myads