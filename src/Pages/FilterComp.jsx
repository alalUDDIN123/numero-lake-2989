import React from 'react'
import { Box, Button, Checkbox, Divider, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from '@chakra-ui/react'

const FilterComp = () => {

    const location= [
        "Maharashtra", "Tamil Nadu", "Kerala", "Uttar Pradesh",  "Delhi",
         "Karnataka", "Gujarat", "Telangana", "Punjab", "Haryana",
        "Andhra Pradesh", "Madhya Pradesh", "West Bengal", "Rajasthan",
         "Assam", "Chandigarh", "Chhattisgarh", "Bihar", "Jammu & Kashmir", "Uttaranchal"
    ]

    const brands=[
        "Maruti Suzuki", "Hyundai", "Mahindra", "Honda", "Tata", "Toyota",
        "Ford", "Volkswagen", "Renault", "Chevrolet", "Mercedes-Benz",
        "Skoda", "BMW", "Nissan", "Audi", "Kia", "Datsun", "Fiat",
        "Jeep", "MG", "Land Rover", "Bajaj", "Mitsubishi", "Volvo",
        "Ashok Leyland", "Jaguar", "Force Motors", "Mini", "Porche",
        "Ambassador", "Other Brands", "Eicher Polaris", "Mahindra renault",
        "Isuzu", "Ashok", "Ssangyong", "Smart", "Maserati", "Dc", "Lexus",
        "Opel", "Rolls-Royce", "Premier", "Daewoo", "Lamborghini", "San",
        "Bentley", "Peugeot", "Mazda", "Ferrari", "Subaru", "Hindustan Motors",
        "Aston", "Hummer", "ICML", "Cadillac", "Bugatti", "Hindustan",
        "Sipani", "Conquest", "Maybach", "Aston Martin", "Caterham", "Chrysler",
        "Infiniti", "Citroen", "Dodge", "Tesla"
    ]
    const popularBrands=[
        "https://statics.olx.in/olxin/buyers/filters/v1/cars/make/maruti-suzuki_3x.webp",
        "https://statics.olx.in/olxin/buyers/filters/v1/cars/make/hyundai_3x.webp",
        "https://statics.olx.in/olxin/buyers/filters/v1/cars/make/mahindra_3x.webp",
        "https://statics.olx.in/olxin/buyers/filters/v1/cars/make/toyota_3x.webp",
        "https://statics.olx.in/olxin/buyers/filters/v1/cars/make/tata_3x.webp",
        "https://statics.olx.in/olxin/buyers/filters/v1/cars/make/honda_3x.webp",
    ]
    const allModels=[
        "A8I", "Ambassador Ambassador", "Ashok Leyland Stile",
        "Aston Martin DB11", "Aston Martin DB9", "Aston Martin DBS",
        "Aston Martin One 77", "Aston Martin Rapide", 
        "Aston Martin V12 Vantage", "Aston Martin V8 Vantage",
        "Aston Martin Vanquish", "Aston Martin Vantage", "Aston Martin Virage",
        "Audi A3", "Audi A3 Cabriolet", "Audi A4", "Audi A5", "Audi A6",
        "Audi A7", "Audi A8", "Audi A8L", "Audi Q3", "Audi Q5", "Audi Q7", 
        "Audi R8", "Audi S6", "Audi TT", "Bajaj RE60", "Bentley Arnage",
        "Bentley Azure", "Bentley Bentayga", "Bentley Continental", 
        "Bentley Continental Flying Spur", "Bentley Continental GT",
        "Bentley Continental GTC", "Bentley Flying Spur", "Bentley Mulsanne",
        "BMW 1 Series", "BMW 2 Series", "BMW 3 Series"
    ]
    const budget=[
        "Below 1 Lac", "1 Lac - 2 Lac", "2 Lac - 3 Lac", "3 Lac - 5 Lac",
         "5 Lac and Above"
    ]
    const year=[
        "Under 3 Years", "Under 5 Years", "Under 7 Years",
        "7 Years and Above",
    ]
    const owners=[
        "First", "Second", "Third", "Fourth", "More than Four"
    ]
    const kmDriven= [
        "Below 25000km", "25000km - 50000km", "50000km - 75000km",
        "75000km - 100000km", "100000km and Above"
    ]
    const fuel= [
        "Petrol", "Diesel", "LPG", "CNG & Hybrids", "Electric"
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
    <Box textAlign="left" display="flex" justifyContent="flex-end">
      <Box w="90%" p="0px 10px" >
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
            <Box className="brandAndModel">
                <Box>
                    <Text fontWeight="bold" color="black">BRAND AND MODEL</Text>
                    <Input color="black" variant='outline' border="1px solid gray" placeholder="Search brand or model" />
                </Box>
                <Box className='popularBrands'>
                    <Text fontWeight="bold" color="black">Popular Brands</Text>
                    <Box display="grid" gap="12px" gridTemplateColumns="repeat(3, 1fr)">
                        {popularBrands && popularBrands.map((el)=>{
                            return <Box w="75px" p="10px 7px" border="1px solid gray" borderRadius="10px">
                                <Image w="100%" m="auto" src={el} alt="popular-brand" />
                            </Box>
                        })}
                    </Box>
                </Box>
                <Divider />
                <Box className="allBrands">
                    <Text>ALL BRANDS</Text>
                    <Box display="flex" justifyContent="flex-end" h="200px" overflow="auto">
                        <Box w="98%">
                            {brands && brands.map((el)=>{
                                return <Box display="flex">
                                    <Checkbox border="1px solid black" />
                                    <label>{el}</label>
                                </Box>
                            })}
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box className="allModels">
                    <Text>ALL MODELS</Text>
                    <Box display="flex" justifyContent="flex-end" h="200px" overflow="auto">
                        <Box w="98%">
                            {allModels && allModels.map((el)=>{
                                return <Box display="flex">
                                    <Checkbox border="1px solid black" />
                                    <label>{el}</label>
                                </Box>
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
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
                        <RangeSlider defaultValue={[1, 500000]} min={1} max={1000000} step={30}>
                        <RangeSliderTrack bg='black.800'>
                            <RangeSliderFilledTrack bg='black' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0} />
                        <RangeSliderThumb boxSize={6} index={1} />
                        </RangeSlider>
                    </Box>
                </Box>
            </Box>
            <Box mt="10px" className="year">
                <Box>
                    <Text fontWeight="bold" color="black">YEAR</Text>
                    <Text>Choose from options below</Text>
                    <Box>
                        {year && year.map((el)=>{
                            return <Box border="1px solid gray" w="100%" m="10px auto">
                                <Text m="0px">{el}</Text>
                            </Box>
                        })}
                    </Box>
                    <Box>
                        <Text>Choose a range below</Text>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Input p="0px" h="25px" w="80px" placeholder='2002' />
                            <Text>to</Text>
                            <Input p="0px" h="25px" w="80px" placeholder='2022' />
                            <Button border="1px solid gray">Apply</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box mt="10px" className="noOfOwners">
                <Box>
                    <Text fontWeight="bold" color="black">NO. OF OWNERS</Text>
                    <Text>Choose from options below</Text>
                    <Box>
                        {owners && owners.map((el)=>{
                            return <Box display="flex">
                                <Checkbox border="1px solid black" />
                                <label>{el}</label>
                            </Box>
                        })}
                    </Box>
                </Box>
            </Box>
            <Divider color="black" />
            <Box mt="10px" className="inspectionStatus">
                <Box>
                    <Text fontWeight="bold" color="black">INSPECTION STATUS</Text>
                    <Text>Choose from options below</Text>
                    <Box>
                        <Box display="flex">
                            <Checkbox border="1px solid black" />
                            <label>Inspected Cars Only</label>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box mt="10px" className="kmDriven">
                <Box>
                    <Text fontWeight="bold" color="black">KM DRIVEN</Text>
                    <Text>Choose from options below</Text>
                    <Box>
                        {kmDriven && kmDriven.map((el)=>{
                            return <Box border="1px solid gray" w="100%" m="10px auto">
                                <Text m="0px">{el}</Text>
                            </Box>
                        })}
                    </Box>
                    <Box>
                        <Text>Choose a range below</Text>
                        <RangeSlider defaultValue={[1, 50000]} min={1} max={200000} step={30}>
                        <RangeSliderTrack bg='black.800'>
                            <RangeSliderFilledTrack bg='black' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0} />
                        <RangeSliderThumb boxSize={6} index={1} />
                        </RangeSlider>
                    </Box>
                </Box>
            </Box>
            <Box mt="10px" className="fuel">
                <Box>
                    <Text fontWeight="bold" color="black">FUEL</Text>
                    <Text>Choose from below options</Text>
                    <Box display="flex" justifyContent="flex-end">
                        <Box w="98%">
                            {fuel && fuel.map((el)=>{
                                return <Box display="flex">
                                    <Checkbox border="1px solid black" />
                                    <label>{el}</label>
                                </Box>
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box mt="10px" className="transmision">
                <Box>
                    <Text fontWeight="bold" color="black">TRANSMISSION</Text>
                    <Text>Choose from below options</Text>
                    <Box>
                        <Box border="1px solid gray" w="100%" m="10px auto">
                            <Text m="0px">Automatic</Text>
                        </Box>
                        <Box border="1px solid gray" w="100%" m="10px auto">
                            <Text m="0px">Manual</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FilterComp
