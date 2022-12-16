import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'

const ProductComp = () => {

    const [data, setData]= useState([]);

    useEffect(()=>{
        getData();
    }, [])

    const getData= () => {
        axios.get("https://olx-database.vercel.app/car")
        .then((r)=>setData(r.data))
        .catch((e)=>console.log(e));
    }

    console.log(data);

  return (
    <Box>
      <Box w="100%" display="grid" gap="10px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} >
        {data && data.map((el)=>{
            return <ProductCard key={el.id} props={el} />
        })}
      </Box>
      <Box mt="10px">
        <Button rounded="5px" fontWeight="bold" fontSize="16px" p="15px 15px">Load More</Button>
      </Box>
    </Box>
  )
}

export default ProductComp
