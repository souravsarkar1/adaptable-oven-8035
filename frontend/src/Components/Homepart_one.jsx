import React, { useEffect, useState } from 'react'
import { Box, Text, Image, Input, InputGroup, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons"
import Homepart_two from './Homepart_two'


const Homepart_one = () => {
    const [reponame, setreponame] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/create/allrepo")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setreponame(res.repo)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <Box>
            <Box color="white" w="98.4%" justifyContent='flex-end' margin="auto 0 auto auto" ml="0px" >
                <Box mt={'35px'} border={'1px solid gray'} h="auto" w="100%" display={'flex'}>
                    {/* box1 */}
                    <Box pl={'20px'} pr={'20px'} pt={'20px'} backgroundColor={'#0d1117'} w={'23%'} h="auto" pb="100px">
                        {/* box I */}
                        <Box display={'flex'}>
                            <Box w="19px" h="19px" borderRadius={'50%'} border="1px solid red">
                                <Image src='https://avatars.githubusercontent.com/u/112754573?v=4' w='100%' borderRadius={'50%'}></Image>
                            </Box>
                            <Text ml={'5px'} fontSize={'12px'} fontWeight={'500'} display={'inline'}>sourabh7909</Text>
                            <ChevronDownIcon mt={'2px'} />
                        </Box>

                        {/* box II */}
                        <Box mt={'20px'} display={'flex'} justifyContent={'space-between'} >
                            <Text fontSize={'13px'} fontWeight={'500'}>Top Repositories</Text>
                            <Button fontSize={'12px'} w='65px' h='27px' bg='green' color='white'><EditIcon color={'white'} mr={'10px'} />New</Button>
                        </Box>
                        <InputGroup >
                            {/* <InputLeftElement pointerEvents='none' >
            </InputLeftElement> */}
                            <Input mt={'8px'} h={'28px'} w={'100%'} fontSize={'13px'} border="0.1px solid gray" focusBorderColor='none' _hover={"none"} color={'white'} placeholder='Find a repository...'
                                _placeholder={{ color: 'gray' }} />
                        </InputGroup>

                        <Box mt={'20px'}  >
                            <Box display={'flex'} w="15px" h="15px" borderRadius={'2px'} >
                                <Image src='https://avatars.githubusercontent.com/u/61222534?s=16&v=4' w='100%' ></Image>
                            </Box>
                            <Text fontWeight={'500'} mt="-17px" fontSize={'12px'} color={'#c9d1d9'}>masai-course/sourabh_patidar_fw21_0386</Text>
                        </Box>

                        {/* <Box mt={'10px'} >
                            <Box display={'flex'} w="15px" h="15px" borderRadius={'50%'} >
                                <Image borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754573?v=4' w='100%' ></Image>
                            </Box>
                            <Text textAlign={'left'} ml="21px" fontWeight={'500'} mt="-17px" fontSize={'12px'} color={'#c9d1d9'}>sourabh7909/sourabh7909</Text>
                        </Box> */}


                        {/* <Box mt={'10px'}  >
                            <Box display={'flex'} w="15px" h="15px" borderRadius={'50%'} >
                                <Image borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754573?v=4' w='100%' ></Image>
                            </Box>
                            <Text textAlign={'left'} ml="21px" fontWeight={'500'} mt="-17px" fontSize={'12px'} color={'#c9d1d9'}>sourabh7909/Flowers-1800.com</Text>
                        </Box> */}


                        {reponame.map((el) =>{                       
                            return  <Box mt={'10px'}  key={el._id}>
                            <Box display={'flex'} w="15px" h="15px" borderRadius={'50%'} >
                                <Image borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754573?v=4' w='100%' ></Image>
                            </Box>
                            <Text textAlign={'left'} ml="21px" fontWeight={'500'} mt="-17px" fontSize={'12px'} color={'#c9d1d9'}>sourabh7909/{el.name}</Text>
                        </Box>
                        })}

                        {/* <Box mt={'10px'}  >
                            <Box display={'flex'} w="15px" h="15px" borderRadius={'50%'} >
                                <Image borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754573?v=4' w='100%' ></Image>
                            </Box>
                            <Text textAlign={'left'} ml="21px" fontWeight={'500'} mt="-17px" fontSize={'12px'} color={'#c9d1d9'}>sourabh7909/Flowers-1800.com</Text>
                        </Box>




                        <Box mt={'10px'} >
                            <Box display={'flex'} w="15px" h="15px" borderRadius={'50%'} >
                                <Image borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754573?v=4' w='100%' ></Image>
                            </Box>
                            <Text textAlign={'left'} ml="21px" fontWeight={'500'} mt="-17px" fontSize={'12px'} color={'#c9d1d9'}>sourabh7909/Orbitz.com</Text>
                        </Box>

                        <Box mt={'10px'} >
                            <Box display={'flex'} w="15px" h="15px" borderRadius={'50%'} >
                                <Image borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754573?v=4' w='100%' ></Image>
                            </Box>
                            <Text textAlign={'left'} ml="21px" fontWeight={'500'} mt="-17px" fontSize={'12px'} color={'#c9d1d9'}>sourabh7909/sourabh7909.github.io</Text>
                        </Box>

                        <Box mt={'10px'}  >
                            <Box display={'flex'} w="15px" h="15px" borderRadius={'50%'} >
                                <Image borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/112754573?v=4' w='100%' ></Image>
                            </Box>
                            <Text textAlign={'left'} ml="21px" fontWeight={'500'} mt="-17px" fontSize={'12px'} color={'#c9d1d9'}>sourabh7909/major-flock-5344</Text>
                        </Box> */}

                        <Text fontSize={'13px'} fontWeight={'500'} mt="20px" textAlign={'left'}>Recent activity</Text>
                        <Box mt={'8px'} border='1px dotted gray' borderRadius={'5px'}>
                            <Text textAlign={'left'} color='gray' p={'15px 20px 15px 15px'} fontSize={'11px'}>When you take actions across Github,we'll provide links to that activity here.</Text>
                        </Box>

                        <Text fontSize={'13px'} fontWeight={'500'} mt="20px" textAlign={'left'}>Your teams</Text>
                        <InputGroup >
                            {/* <InputLeftElement pointerEvents='none' >
            </InputLeftElement> */}
                            <Input mt={'8px'} h={'28px'} w={'100%'} fontSize={'13px'} border="0.1px solid gray" focusBorderColor='none' _hover={"none"} color={'white'} placeholder='Find a team...'
                                _placeholder={{ color: 'gray' }} />
                        </InputGroup>
                        <Box mt={'18px'}  >
                            <Box display={'flex'} w="15px" h="15px" borderRadius={'3px'} >
                                <Image borderRadius={'3px'} src='https://avatars.githubusercontent.com/t/6417918?s=16&v=4' w='100%' ></Image>
                            </Box>
                            <Text textAlign={'left'} ml="21px" fontWeight={'500'} mt="-17px" fontSize={'12px'} color={'#c9d1d9'}>masai-course/students</Text>
                        </Box>

                    </Box>
                    {/* second part */}
                    {/* <Box border="1px solid white" h="500px">
                        <Text color='white'>For you</Text>
                    </Box> */}
                    <Box w="90%" h="600px" >
                    <Homepart_two />
                    </Box>
                </Box>
            </Box>

            {/* <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Actions
                </MenuButton>
                <MenuList bg='black' border='none'>
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
                            <Text><a href="/login">Sign out</a></Text>
                        </Box>


                    </Box>
                </MenuList>
            </Menu> */}

            {/* orignal */}
            {/* <Box position={'relative'} top={'-620'} borderRadius={'5px'} textAlign={'left'} w={'11%'} h="510px" margin="auto 0 auto auto" mr="23px" backgroundColor={"#161b22"} fontSize={'13.2px'}>

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
                    <Text><a href="/login">Sign out</a></Text>
                </Box>


            </Box> */}
            {/* <Box w="150px" h="170px" bg="#0d1117"  top={'-620px'}  margin={'auto'} mr="60px" borderRadius={'5px'} position={'relative'} color="#c9d1d9" fontSize={'14px'} textAlign={'left'} pl='14px' lineHeight={'25px'} pt="10px">
                 <a href="/new_repo"><Text>New repository</Text></a>
                 <Text>import repository</Text>
                 <Text>New codespace</Text>
                 <Text>New gist</Text>
                 <Text>New orgnaization</Text>
                 <Text>New project</Text>
            </Box> */}

        </Box>
    )
}

export default Homepart_one