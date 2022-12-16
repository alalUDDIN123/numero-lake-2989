import React from "react";
import { HStack, Box } from "@chakra-ui/react";

export const ProductDetails = () => {
  return (
    <HStack mt="100px" border="1px solid red" h="900px" align="flex-start">
      <Box border="1px solid blue" w="60%">
        Container 1
      </Box>
      <Box border="1px solid blue" w="40%">
        Container 2
      </Box>
    </HStack>
  );
};
