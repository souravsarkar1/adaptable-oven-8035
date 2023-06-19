import { ChevronDownIcon, WarningIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Checkbox } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const NewRepository = () => {
  const navigate=useNavigate()
  const [name,setreponame]=useState("")
  const [description,setdescription]=useState("")
  const [msg,setmsg]=useState("")
  console.log(msg)
  const create_repo=()=>{
    const payload={
        name,
        description
    }
   
    fetch("http://localhost:8080/create/repo", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setmsg(res.msg)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  if(msg==="new repository created"){
    setTimeout(() => {
      navigate("/")
    }, 2000);
  }
  return (
    <Box bg='#0d1117'>
      <Box w='60%' margin={'auto'} pt='80px'>
        <Heading fontSize={'24px'} fontFamily={'500'} textAlign={'left'}>Create a new repository</Heading>
        <Text color='rgb(125, 133, 144)' mt='5px' fontSize={'12.5px'} textAlign={'left'} >A repository contains all project files, including the revision history. Already have a project repository elsewhere?</Text>
        <Text fontSize={'13px'} pb="10px" textAlign={'left'} color='rgb(47, 129, 247)' >import a repository.</Text>
        <hr></hr>
        <Text mt='10px' textAlign={'left'} fontSize={'13px'} mb='15px' fontStyle={'italic'}>Required fields are marked with an asterisk (*).</Text>
        <Box display={'flex'}>
          <Box mb='5px'>
            <Text fontSize={'13px'} fontWeight={'500'} textAlign={'left'} >Owner*</Text>
            {/* <Button h='32px' fontSize={'14px'}>Choose an owner<ChevronDownIcon /></Button><span style={{ marginLeft: '10px', marginRight: '10px', fontSize: '22px' }}>/</span> */}


            <Menu>
              <MenuButton backgroundColor={'rgb(33, 38, 45)'} fontSize={'13px'} h='33px' color={'rgb(201, 209, 217)'} as={Button} rightIcon={<ChevronDownIcon />}>
                Choose an owner
              </MenuButton>
              <MenuList backgroundColor={'rgb(22, 27, 34)'} fontSize={'13px'}>
                <Box display={'flex'} pl='10px' alignItems={'center'} justifyContent={'center'}>
                  <Image h='17px' w='17px' borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754573?v=4' />
                  <MenuItem backgroundColor={'rgb(22, 27, 34)'} w='80%'>sourabh7909</MenuItem>
                </Box>

                <Box display={'flex'} pl='10px' alignItems={'center'} justifyContent={'center'}>
                  <Image h='17px' w='17px' borderRadius={'50%'} src='	https://avatars.githubusercontent.com/u/61222534?v=4' />
                  <MenuItem color='rgb(72, 79, 88)' backgroundColor={'rgb(22, 27, 34)'} w='80%'>masai course(insufficient permision)</MenuItem>
                </Box>
                {/* <MenuItem backgroundColor={'rgb(22, 27, 34)'} w='80%'>Create a Copy</MenuItem> */}
              </MenuList>
            </Menu>
            <span style={{ marginLeft: '10px', marginRight: '10px', fontSize: '22px' }}>/</span>
          </Box>

          <Box>
            <Text fontSize={'13px'} fontWeight={'500'} textAlign={'left'} mb='4px'>Repository name*</Text>
            <Input value={name} onChange={(e)=>setreponame(e.target.value)}/>
          </Box>
        </Box>
        <Text fontSize={'13.1px'} textAlign={'left'}>Great repository names are short and memorable. Need inspiration? How about <span style={{ color: 'rgb(63, 185, 80)' }}>refactored-winner?</span></Text>
        <Text mb='3px' textAlign={'left'} mt='5px' fontSize={'14px'} fontWeight={'500'}>Description <span style={{ fontSize: '12px', color: 'rgb(125, 133, 144)' }} >(optional)</span></Text>
        <Input value={description} onChange={(e)=>setdescription(e.target.value)} mb={'15px'} display={'block'} h='30px' w='70%' />
        <hr></hr>
        <Box mb='15px' mt="15px" borderRadius={'7px'} bg='#3487F81A' border='1px solid rgb(108, 165, 243)' p="10px">
          <Text fontSize={'14px'} textAlign={'left'}><WarningIcon color='rgb(47, 129, 247)' mr='10px' mt='-2px'></WarningIcon>Please choose an owner to see the available visibility options.</Text>
        </Box>
        <hr></hr>
        <Text mb='2px' mt='10px' textAlign={'left'} fontSize={'13.5px'} fontWeight={'500'}>Initialize this repository with:</Text>
        <Box>
          <Box display={'flex'}>
            <Checkbox fontSize={'10px'} mr='5px' mt='5px' textAlign={'left'} display={'block'} />
            <Text fontSize={'13.5px'} fontWeight={'500'}>Add a README file</Text>
          </Box>
          <Text color='rgb(125, 133, 144)' textAlign={'left'} ml='22px' fontSize={'11px'}>This is where you can write a long description for your project. <span style={{ color: 'rgb(47, 129, 247)' }}>Learn more about READMEs.</span></Text>
        </Box>
        <Text textAlign={'left'} fontSize={'13.5px'} fontWeight={'500'} mt='20px'>Add .gitignore</Text>
        <Button fontSize={'13px'} display={'block'}><span style={{ color: 'rgb(125, 133, 144)' }}>.gitignore template</span>: None<ChevronDownIcon /></Button>
        <Text mt='8px' color='rgb(125, 133, 144)' textAlign={'left'} fontSize={'11px'}>Choose which files not to track from a list of templates.<span style={{ color: 'rgb(47, 129, 247)' }}> Learn more about ignoring files.</span></Text>

        <Text mt='20px' textAlign={'left'} fontSize={'13.5px'} fontWeight={'500'}>Choose a license</Text>
        <Button fontSize={'13px'} display={'block'}><span style={{ color: 'rgb(125, 133, 144)' }}> License</span>: None<ChevronDownIcon /></Button>
        <Text mb={'15px'} mt='8px' color='rgb(125, 133, 144)' textAlign={'left'} fontSize={'11px'}>A license tells others what they can and can't do with your code.<span style={{ color: 'rgb(47, 129, 247)' }}> Learn more about license.</span></Text>
        <hr></hr>
        <Button onClick={create_repo} fontSize={'15px'} h='30px' display={'block'} alignItems={'right'} color={'white'} bg='green' margin={'20px 0px 0px auto'}>Create repository</Button>
      </Box>
    </Box>
  )
}

export default NewRepository