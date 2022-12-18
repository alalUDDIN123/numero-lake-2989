import React, { useEffect, useState } from 'react'
import { Box, Button, Checkbox, Divider, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

const MobFilter = () => {

    const location= [
        "Maharashtra", "Tamil Nadu", "Kerala", "Uttar Pradesh",  "Delhi",
         "Karnataka", "Gujarat", "Telangana", "Punjab", "Haryana",
        "Andhra Pradesh", "Madhya Pradesh", "West Bengal", "Rajasthan",
         "Assam", "Chandigarh", "Chhattisgarh", "Bihar", "Jammu & Kashmir", "Uttaranchal"
    ]

    const brands=[
        "iPhone", "Samsung", "Mi", "Vivo", "Oppo", "Realme"
    ]
    const allbrands=[
        "Nokia","Asus" ,"iPhone" ,"Micromax" ,"Sony","HTC","BlackBerry" ,"Karbonn","LG"
         ,"Other Mobiles","Intex","Lava","Lenovo","Mi" ,"Motorola","Oppo","Vivo" ,"Gionee",
         "One Plus","Google Pixel","Honor","Huawei","Infinix","Realme" ,"Techno"
    ]
    const budget=[
        "Below 10000", "10000 - 20000", "20000 - 30000", "30000 - 50000",
         "50000 and Above"
    ]



    const [searchParams, setSearchParams]= useSearchParams();

    const initialCategory= searchParams.getAll("category");

    const initialSort= searchParams.getAll("sort");

    const [category, setCategory]= useState(initialCategory || []);

    const [sort, setSortBy]= useState( initialSort || '');

    const handleFilterCheckbox= (e)=>{
        const newCategory= [...category];
        let value=e.target.value;
        if(e.target.value==="Maruti Suzuki"){
            value=84
        }
        if(newCategory.includes(value)){
            newCategory.splice(newCategory.indexOf(value), 1);
        }else{
            newCategory.push(value)
        }
        setCategory(newCategory);
    }
    const handleSort= (e)=>{
        setSortBy(e.target.value);
    }

    useEffect(()=>{
        let params={};
        params.category= category;
        sort && (params.sort= sort);
        setSearchParams(params);
    }, [category, setSearchParams, searchParams, sort])




  return (
    <Box textAlign="left" display="flex" justifyContent="flex-end" color="gray.800">
      <Box w="95%" p="0px 10px">
        <Box className="filtetcompHome">
            <Text color="black" fontSize="25px" fontWeight="bold">Used Cars in India</Text>
            <Box className="categories">
                <Text fontWeight="bold" color="black">CATEGORIES</Text>
                <Box display="flex" justifyContent="flex-end">
                    <Box w="95%">
                        <Text fontWeight="bold" color="black">All Categories</Text>
                        <Box display="flex" justifyContent="flex-end">
                            <Box w="90%" bg="skyblue">
                                <Text>Cars</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider color="black" />
            <Box className="locations">
                <Text fontWeight="bold" color="black">LOCATIONS</Text>
                <Box display="flex" justifyContent="flex-end">
                    <Box w="95%">
                        <Text>India</Text>
                        <Box display="flex" justifyContent="flex-end" overflow="auto">
                            <Box w="90%" height="170px">
                                {location && location.map((el)=>{
                                    return <Text>{el}</Text>
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider color="black" />
        </Box>
        <Box className="filtetcompfilter">
            <Text mb="15px" fontSize="larger" fontWeight="bold" color="black">Filters</Text>
            <Box mt="10px" className="budget">
                <Box>
                    <Text fontWeight="bold" color="black">BUDGET</Text>
                    <Text>Choose from options below</Text>
                    <Box>
                        {budget && budget.map((el)=>{
                            return <Box border="1px solid gray" w="100%" m="10px auto">
                                <Text m="0px">{el}</Text>
                            </Box>
                        })}
                    </Box>
                    <Box>
                        <Text>Choose a range below</Text>
                        <Box display="flex">
                            <RangeSlider defaultValue={[100, 24000]} min={1} max={50000} step={30}>
                                <RangeSliderTrack bg='gray.100'>
                                    <RangeSliderFilledTrack bg='gray' />
                                </RangeSliderTrack>
                                <RangeSliderThumb border="gray" boxSize={6} index={0} />
                                <RangeSliderThumb border="gray" boxSize={6} index={1} />
                            </RangeSlider>
                            <Button border="1px solid gray">Apply</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="brandAndModel">
                <Box mt="15px" className="allBrands">
                    <Text fontWeight="bold" color="black">BRANDS</Text>
                    <Box display="flex" justifyContent="flex-end" h="170px" overflow="auto">
                        <Box w="98%">
                            {brands && brands.map((el)=>{
                                return <Box display="flex" gap="5px">
                                    <Checkbox border="gray" checked={category.includes({el})} value={el} onChange={handleFilterCheckbox} />
                                    <label>{el}</label>
                                </Box>
                            })}
                        </Box>
                    </Box>
                </Box>
                <Divider color="black" />
                <Box mt="10px" className="allModels">
                    <Text fontWeight="bold" color="black">ALL BRANDS</Text>
                    <Box display="flex" justifyContent="flex-end" h="170px" overflow="auto">
                        <Box w="98%">
                            {allbrands && allbrands.map((el)=>{
                                return <Box display="flex" gap="5px">
                                    <Checkbox border="gray" checked={category.includes({el})} value={el} onChange={handleFilterCheckbox} />
                                    <label>{el}</label>
                                </Box>
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MobFilter
