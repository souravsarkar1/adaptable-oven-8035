import { Box, Text, Image, HStack, VStack, Input, InputGroup, InputLeftElement, Button, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { FaGiphonthub } from 'react-icons/fa';
import { Search2Icon, BellIcon, SmallAddIcon, ChevronDownIcon, EditIcon } from "@chakra-ui/icons"
import { useState } from 'react';
import Homepart_one from './Homepart_one';
import { useDispatch, useSelector } from "react-redux"
import { success_action } from '../Redux/HomeReducer.jsx/action';
const Navbar = () => {
  
  return (
    <Box>
      <Box position={'absolute'} display={'flex'} backgroundColor='#24292f' w="100%" h={'60px'}>
        <HStack  w={'25%'} ml={'2%'}>
          {/* <VStack> */}
          <Image borderRadius={'50%'} w="11%" h="30px" src="https://tse4.mm.bing.net/th?id=OIP.YdGdMlhgxeiiJ7kQ4bZ2GQHaFj&pid=Api&P=0&h=180"></Image>
          <InputGroup >
            <InputLeftElement pointerEvents='none' alignItems={'center'}>

              <Search2Icon fontSize={'13px'} mb={'7px'} color='gray' />

            </InputLeftElement>
            <Input h={'30px'} w={'100%'} fontSize={'13px'} border="0.1px solid gray" focusBorderColor='none' _hover={"none"} color={'white'} placeholder='Search or jump to...'
              _placeholder={{ color: 'silver' }} />
          </InputGroup>
        </HStack>

        <HStack w={'26%'} display={'flex'} justifyContent={'space-between'} color={'#e6edf3'} ml={'20px'} fontSize={'12px'} fontWeight={'600'} fontFamily='apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji'>
          <Text >Pull requests</Text>
          <Text>Issues</Text>
          <Text>Codespaces</Text>
          <Text>Marketplace</Text>
          <Text>Explore</Text>
        </HStack>

        <HStack w="50%"  alignItems={'center'} justifyContent={'end'} mr="20px">

          <Text><BellIcon color={'white'} /></Text>
          {/* <Text><SmallAddIcon color={'white'} /></Text> */}
          <Menu>
            <MenuButton rightIcon={<ChevronDownIcon />}>
              <Text><SmallAddIcon color={'white'} /></Text>
            </MenuButton>
            <MenuList bg='#1a202c' border='none'>
              <a href='/new_repo'><MenuItem bg='#1a202c'>New repository</MenuItem></a>
              <MenuItem bg='#1a202c'>import repository</MenuItem>
              <MenuItem bg='#1a202c'>New codespace</MenuItem>
              <MenuItem bg='#1a202c'>New gist</MenuItem>
              <MenuItem bg='#1a202c'>New orgnaization</MenuItem>
              <MenuItem bg='#1a202c'>New project</MenuItem>
            </MenuList>
          </Menu>
          <Box w="17px" h="17px" borderRadius={'50%'} >
            <Image src="https://avatars.githubusercontent.com/u/112754573?v=4" borderRadius={'50%'}></Image></Box>

          
            <Menu>
              <MenuButton rightIcon={<ChevronDownIcon />}>
                <ChevronDownIcon />
              </MenuButton>
              <MenuList bg='none' border='none'>
                <Box borderRadius={'5px'} textAlign={'left'} h="510px" margin="auto 0 auto auto" mr="23px" backgroundColor={"#161b22"} fontSize={'13.2px'}>

                  <Box pl="15px" pt="5px" pb="5px" borderBottom='1px solid grey'>
                    <Text>Signed in as</Text>
                    <Text>sourabh7909</Text>
                  </Box>
                  <Box w={'100%'} m='auto' pt="8px" pb="8px" borderBottom='1px solid grey'>
                    <Text pl="30px" w="80%" margin={'auto'} border='1px solid grey' pt="2px" pb="2px" fontSize={'12px'} color={'gray'}>Set status</Text>
                  </Box>
                  <Box pt="10px" pb="10px" pl="15px" borderBottom='1px solid grey' lineHeight={'26px'}>
                    <Text>Your profile</Text>
                    <Text>Your repositories</Text>
                    <Text>Your orgnaizations</Text>
                    <Text>Your enterprises</Text>
                    <Text>Your projects</Text>
                    <Text>Your stars</Text>
                    <Text>Your gists</Text>
                    <Text>Your sponsors</Text>
                  </Box>
                  <Box pl="15px" pb={'10px'} pt="10px" borderBottom='1px solid grey' lineHeight={'26px'}>
                    <Text>Upgrade</Text>
                    <Text>Try Enterprise</Text>
                    <Text>Feature preview</Text>
                    <Text>Help</Text>
                    <Text>Settings</Text>
                  </Box>
                  <Box pl="15px" pt={"7px"} lineHeight={'26px'}>
                    <a href="/register"><Text>Sign out</Text></a>
                  </Box>
                </Box>
              </MenuList>
            </Menu>
       
          {/* <ChevronDownIcon onClick={handleprofilebarvisiblity} ml="-8px" color={'white'} /> */}
        </HStack>
      </Box>
      <br></br>
     
    </Box>
    //  </Box>
  )
}

export default Navbar