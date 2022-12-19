import React from 'react'
import FilterComp from './FilterComp'
import ProductComp from './ProductComp'
import { Box } from '@chakra-ui/react';

function Products() {
  return (
    <Box display="flex" bg="white" color="black" pt="100px">
      <Box w="27%">
        <FilterComp />
      </Box>
      <Box w="70%">
        <ProductComp />
      </Box>
  </Box>
  )
}

export default Products
