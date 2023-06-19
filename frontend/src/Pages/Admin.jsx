
import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { addproduct } from '../Redux/ProductReducer/action';

const initialState = {
  
  username: '',
  email: '',
  password: '',
};

export default function Admin() {
  const [data, setData] = useState(initialState);


  const dispatch = useDispatch();










  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handlecancel = ()=>{
    setData(initialState);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(addproduct(data))
    setData(initialState);
  };

  return (
   

  
    <form  onSubmit={handleSubmit} style={{paddingTop:"2rem"}}>
       
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
          bg={useColorModeValue('white', 'white.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          background={"gray.200"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} color={"black"} fontSize={{ base: '2xl', sm: '3xl' }}>
            Add Users here
          </Heading>
          <FormControl id="userName">
            <FormLabel color={"black"}>User Description</FormLabel>
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
                <Button w="full" bg={"black"}>Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel color={"black"}>User name</FormLabel>
            <Input
              placeholder="UserName"
              border={"1px solid black"}
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={data.username}
              name="username"
              color={"black"}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl color={"black"} id="email" isRequired>
            <FormLabel color={"black"}>Email address</FormLabel>
            <Input
            border={"1px solid black"}
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              color={"black"}
              value={data.email}
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel color={"black"}>Password</FormLabel>
            <Input
            border={"1px solid black"}
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              name="password"
              color={"black"}
              value={data.password}
              onChange={handleChange}
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              onClick={handlecancel}
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
    
  );
}
