import React from 'react'
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';


const AdminUserCard = ({username,email,password,id,handleDelete}) => {
 console.log(username,email,password,id)
const navigate = useNavigate()

 const handlenavigate = ()=>{
  console.log("working")
  navigate(`/edit/${id}`)
 }


   return (
    <div>
   
    
     
     
    
      
      
       
    <Center py={6}>
       
      <Stack gap={"20px"}
      style={{background:"white"}}
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            borderRadius={"50%"}
            bg={"none"}
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading color={"black"} fontSize={'2xl'} fontFamily={'body'}>
            {username}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {email}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            welcome to gitlab.
            <Link href={'#'} color={'blue.400'}>
              #CODE COMMIT REPEAT in Your Accounts
            </Link>
              
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #CODE
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #COMMIT
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #REPEAT
            </Badge>
          </Stack>
          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
            onClick={()=> {handleDelete(id)}}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={"gray"}
              _focus={{
                bg: 'black.200',
                color:"black"
              }}
              _hover={{
                bg: 'black.500',
              }}>
              Delete
            </Button>


           
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={handlenavigate} 
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
                 
                {/* <Link to={`/edit/${id}`} >Update</Link> */}
              Update
                
            </Button>
          </Stack>
        </Stack>
      </Stack>
      </Center>
     </div>

  )
}

export default AdminUserCard





{/* 
<Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
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
              <Button w="full">Change Icon</Button>
            </Center> */}