import React, { useEffect, useState } from "react";
import {
  HStack,
  Box,
  Flex,
  Spacer,
  IconButton,
  Tooltip,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Avatar,
  Button,
  Center,
  Image,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { HorizontalCarousel } from "../Componets/HorizontalCarousel";
import { BsHeart, BsShare } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import mapPlaceholder from "../../src/mapPlaceholder.png";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetails = () => {
  const { id } = useParams();
  let [pData, setPData] = useState({});

  const getData = () => {
    axios
      .get(`https://olx-database.vercel.app/page3/${id}`)
      .then((res) => {
        setPData(res.data);
      })
      .catch((e) => {
        console.log("Error:", e);
      });
  };

  useEffect(() => {
    getData();
    console.log(pData);
  }, []);

  return (
    <HStack
      mt="150px"
      align="flex-start"
      ml="50px"
      mr="50px"
      // pb="30px"
      backgroundColor="#f2f4f5 "
    >
      <Box
        // border="1px solid blue"
        w="60%"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        backgroundColor="#fff"
      >
        <HorizontalCarousel images={pData.images} />
        <Box
          w="100%"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          mt="30px"
          h="200px"
          backgroundColor="#fff"
        >
          <Box pb="20px">
            <Box pl="10px">
              <Text fontSize="2xl" as="b" color="#002f34">
                Details
              </Text>
            </Box>
            <Flex w="300px" pl="10px" mt="10px">
              <Box>
                <Text fontSize="md" color="gray.600">
                  Brand
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize="md" color="gray.600">
                  Oppo
                </Text>
              </Box>
            </Flex>
          </Box>
          <Divider pl="10px" pr="10px" />
          <Box>
            <Box pl="10px">
              <Text fontSize="2xl" as="b" color="#002f34">
                Description
              </Text>
            </Box>
            <Box mt="10px">
              <UnorderedList styleType="none">
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="40%">
        <Box
          w="100%"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          backgroundColor="#fff"
          pb="14px"
        >
          <Box pt="8px" pl="10px" pr="10px">
            <Flex w="100%">
              <Box w="150px">
                <Heading color="#002f34">₹ 17,999</Heading>
              </Box>
              <Spacer />
              <HStack w="100px">
                <Box w="100%">
                  <Tooltip label="Share" fontSize="xs">
                    <IconButton
                      variant="outline"
                      colorScheme="gray"
                      fontSize="20px"
                      icon={<BsShare />}
                      border="none"
                    />
                  </Tooltip>
                </Box>
                <Box w="100%">
                  <Tooltip label="Favourite" fontSize="xs">
                    <IconButton
                      variant="outline"
                      colorScheme="gray"
                      fontSize="20px"
                      icon={<BsHeart />}
                      border="none"
                    />
                  </Tooltip>
                </Box>
              </HStack>
            </Flex>
          </Box>
          <Box w="100%" mt="8px" pl="10px">
            <Text>iphone XR/128gb available in all colors and varients</Text>
          </Box>
          <Flex mt="14px" pl="10px">
            <Box w="300px" mt="4px">
              <Text>Samudrapur, Maharashtra, India</Text>
            </Box>
            <Spacer />
            <Box w="100px" mt="4px">
              <Text>{`${4} days ago`}</Text>
            </Box>
          </Flex>
        </Box>
        <Box
          w="100%"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          backgroundColor="#fff"
          mt="10px"
          pb="30px"
        >
          <Box pl="10px" pt="14px">
            <Text fontSize="2xl">Seller description</Text>
          </Box>
          <Flex mt="10px" w="100%" pl="10px" alignItems="center">
            <HStack w="300px">
              <Box>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="xl"
                      name="Christian Nwamba"
                      src="https://bit.ly/code-beast"
                    />{" "}
                  </WrapItem>
                </Wrap>
              </Box>
              <Box w="100%">
                <Box>
                  <Text as="b" fontSize="lg">
                    Vikram Singh
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm">Member since Jul 2022</Text>
                </Box>
              </Box>
            </HStack>
            <Spacer />
            <Box>
              <IconButton
                variant="outline"
                colorScheme="gray"
                fontSize="20px"
                icon={<AiOutlineRight />}
                border="none"
              />
            </Box>
          </Flex>
          <Box w="100%" mt="20px" pl="10px" pr="10px">
            <Center>
              <Button
                borderColor="#002f34"
                color="#002f34"
                variant="outline"
                // pl="30px"
                // pr="30px"
                w="100%"
                borderRadius="4px"
              >
                Chat with seller
              </Button>
            </Center>
          </Box>
        </Box>
        <Box
          w="100%"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          backgroundColor="#fff"
          mt="10px"
          pb="20px"
        >
          <Box pl="10px" pt="14px">
            <Text fontSize="xl" as="b" color="#002f34">
              Posted in
            </Text>
          </Box>
          <Box pl="10px" mt="12px">
            <Text fontSize="sm">Tilak Nagar, Delhi, Delhi</Text>
          </Box>
          <Box w="100%" pl="10px" pr="10px" mt="10px">
            <Image src={mapPlaceholder} borderRadius="5px" />
          </Box>
        </Box>
      </Box>
    </HStack>
  );
};
