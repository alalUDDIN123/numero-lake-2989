import { Box, Button, Link, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import { useLocation, useSearchParams } from 'react-router-dom'

const MobComp = () => {
  
  const [data, setData]= useState([]);
  
  const location = useLocation();
  const [searchParams, setSearchParams]= useSearchParams();

  const initialSort= searchParams.getAll("sort");

  const [sort, setSortBy]= useState( initialSort || '');
  const category= searchParams.getAll("category");

  const handleSort= (e)=>{
    setSortBy(e.target.value);
}

useEffect(()=>{
    let params={};
    params.category= category;
    sort && (params.sort= sort);
    setSearchParams(params);
}, [setSearchParams, searchParams, sort])


  useEffect(()=>{
      if(location || data.length===0){
          const sortBy= searchParams.get("sort");
          const getDataParams={
              params: {
                  _sort: sortBy && "price.value.raw",
                  _order: sortBy,
              }
          }
          getData(getDataParams);
      }
  }, [data.length, location.search])

  const getData= (params)=>{
    return axios.get("https://olx-database.vercel.app/mobile", params)
        .then((r)=>setData(r.data))
        .catch((e)=>console.log(e));
  }

  return (
    <Box bg="white">
      <Box justifyContent="right" display="flex" bg="white" alignItems="center" mb="20px">
        <Text fontSize="large" fontWeight="bold">Sort By:-</Text>
        <Select w="10%" bg="white" onChange={handleSort}>
              <option value="" name="sortBy">Sort</option>
              <option value="asc" name="sortBy">Price: Low to High</option>
              <option value="desc" name="sortBy">Price: High to Low</option>
          </Select>
      </Box>
      <Box w="100%" display="grid" gap="10px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} >
        {data && data.map((el)=>{
            return <ProductCard key={el.id} props={el} />
        })}
      </Box>
      <Box mt="10px" textAlign="center" mb="20px">
        <Button border="1px solid black" rounded="5px" fontWeight="bold" fontSize="16px" p="15px 15px">Load More</Button>
      </Box>
    </Box>
  )
}

export default MobComp
