import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { editproduct } from '../Redux/ProductReducer/action';

const EditAdminUser = () => {
  const { id } = useParams();
  const [bigdata, setdata] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.productReducer.products);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleedit = (e) => {
    e.preventDefault();
    console.log(bigdata);
    dispatch(editproduct(bigdata, id)).then(() => {
      setSuccess(true);
    });
  };

  useEffect(() => {
    if (data) {
      const dataid = data.find((el) => el.id === +id);
      setdata(dataid);
    }
  }, [data, id]);

  return (
    <div>
      <h3>Edit product {id}</h3>
      <h2>{success ? 'Product Edited Successfully' : 'Product Edit Failed'}</h2>
      <form onSubmit={handleedit}>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            background={"gray.200"}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} color={"black"} fontSize={{ base: '2xl', sm: '3xl' }}>
              User Profile Edit
            </Heading>
            <FormControl id="userName">
              <FormLabel color={"black"}>User Icon</FormLabel>
              <Stack direction={['column', 'row']} spacing={6}>
                <Center>
                  <Avatar size="xl" src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ">
                    <AvatarBadge
                      as={IconButton}
                      size="sm"
                      rounded="full"
                      top="-10px"
                      colorScheme="red"
                      aria-label="remove Image"
                      icon={<SmallCloseIcon />}
                    />
                  </Avatar>
                </Center>
                <Center w="full">
                  <Button bg={"black"} w="full">Change Icon</Button>
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="userName" isRequired>
              <FormLabel color={"black"}>User name</FormLabel>
              <Input
              border={"1px solid black"}
               color={"black"}
                placeholder="UserName"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={bigdata.username || ''}
                name="username"
                onChange={handlechange}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel color={"black"}>Email address</FormLabel>
              <Input
              border={"1px solid black"}
              color={"black"}
                placeholder="your-email@example.com"
                _placeholder={{ color: 'gray.500' }}
                type="email"
                value={bigdata.email || ''}
                name="email"
                onChange={handlechange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={"black"}>Password</FormLabel>
              <Input
              border={"1px solid black"}
              color={"black"}
                placeholder="password"
                _placeholder={{ color: 'gray.500' }}
                type="password"
                name="password"
                value={bigdata.password || ''}
                onChange={handlechange}
              />
            </FormControl>
            <Stack spacing={6} direction={['column', 'row']}>
              <Button
                bg={'red.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'red.500',
                }}
              >
                Cancel
              </Button>
              <Button
                bg={'blue.400'}
                color={'white'}
                w="full"
                type="submit"
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </form>
    </div>
  );
};

export default EditAdminUser;
