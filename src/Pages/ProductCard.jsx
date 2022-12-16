import React from 'react'
import { Box, Icon, Image, Text } from '@chakra-ui/react'
import { BiHeart } from 'react-icons/bi';


const ProductCard = ({props}) => {
  return (
    <Box border="1px solid gray" rounded="5px" position="relative">
      <Image w="100%" h="300px" src={props.images[0].url} alt="img" />
      <Box textAlign="left" padding="10px">
        <Text color="#424040" fontWeight="bold" m="1">{props.price.value.display}</Text>
        <Text fontSize="13px" m="1">{props.main_info}</Text>
        <Text color="#424040" m="1" fontWeight="bold">{props.title}</Text>
        <Text fontSize="11px" m="1">{props.locations_resolved.ADMIN_LEVEL_3_name}</Text>
      </Box>
      <Box boxSize="30px" rounded="50%" display="flex" justifyContent="center" alignItems="center" position="absolute" top="5px" right="5px" bg="#424040">
        <Icon boxSize={24} color="white" as={BiHeart} />
      </Box>
    </Box>
  )
}

export default ProductCard
