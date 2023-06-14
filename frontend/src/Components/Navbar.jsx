import { Box, Text, Image, HStack, VStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { FaGiphonthub } from 'react-icons/fa';
import { Search2Icon, BellIcon, SmallAddIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from 'react';
const Navbar = () => {
  const [profilebar,setprofilebar]=useState(false)

  const handleprofilebarvisiblity=()=>{
      setprofilebar(prev=>!prev)
  }
  return (
    <Box>
      <Box position={'absolute'} display={'flex'} backgroundColor='#24292f' w="100%" h={'60px'}>
        <HStack border='1px solid red' w={'25%'} ml={'2%'}>
          {/* <VStack> */}
          <Image w="11%" h="30px" src="https://tse4.mm.bing.net/th?id=OIP.YdGdMlhgxeiiJ7kQ4bZ2GQHaFj&pid=Api&P=0&h=180"></Image>
          <InputGroup >
            <InputLeftElement pointerEvents='none' alignItems={'center'}>

              <Search2Icon fontSize={'13px'} mb={'7px'} color='gray' />

            </InputLeftElement>
            <Input h={'30px'} w={'100%'} fontSize={'13px'} border="0.1px solid silver" focusBorderColor='none' _hover={"none"} color={'white'} placeholder='Search or jump to...'
              _placeholder={{ color: 'silver' }} />
          </InputGroup>
        </HStack>

        <HStack w={'26%'} border='1px solid red' display={'flex'} justifyContent={'space-between'} color={'#e6edf3'} ml={'20px'} fontSize={'12px'} fontWeight={'600'} fontFamily={'sans-serif'}>
          <Text >Pull requests</Text>
          <Text>Issues</Text>
          <Text>Codespaces</Text>
          <Text>Marketplace</Text>
          <Text>Explore</Text>
        </HStack>

        <HStack w="50%" border="1px solid white" alignItems={'center'} justifyContent={'end'} mr="20px">

          <Text><BellIcon color={'white'}/></Text>
          <Text><SmallAddIcon color={'white'}/></Text>
          <Box w="17px" h="17px" borderRadius={'50%'} border="1px solid red"><Image borderRadius={'50%'}></Image></Box>
          <ChevronDownIcon onClick={handleprofilebarvisiblity}  ml="-8px" color={'white'}/>
        </HStack>
      </Box>
      <Box position={'relative'} top={'12'}  display={!profilebar?"none":"block"} w="98.4%" justifyContent='flex-end'  margin="auto 0 auto auto" ml="0px">
        <Box ml={'-10px'}  w={'11%'} h="480px" border={'1px solid gray'}  margin="auto 0 auto auto">

        </Box>
      </Box>
    </Box>
  )
}

export default Navbar