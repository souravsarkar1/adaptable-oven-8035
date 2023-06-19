import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Homepart_two = () => {
    return (
        <Box>
            <Box border="1px solid white" h="500px" w={'100%'}>
                <Box display={'flex'}>
                    <Text color='white'>For you</Text>
                    <Box fontSize={'13px'} color='green' padding={'0px 2px'} border={'1px solid green'} borderRadius={'10px'}>Beta</Box>
                   <Text>Following</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Homepart_two