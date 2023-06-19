import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import s1 from "../images/s1.png"
import s2 from "../images/s2.png"

const Homepart_two = () => {
    return (
        <Box>
            {/* <Box border="1px solid white" h="500px" w={'100%'}>
                <Box display={'flex'}>
                    <Text color='white'>For you</Text>
                    <Box fontSize={'13px'} color='green' padding={'0px 2px'} border={'1px solid green'} borderRadius={'10px'}>Beta</Box>
                   <Text>Following</Text>
                </Box>
            </Box> */}
            <Image w="100%" src={s1} h="550px"/>
            <Image w="100%" src={s2} h="550px"/>
        </Box>
    )
}

export default Homepart_two