import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const PakageCardProfile = ({ title, body, documentation }) => {
    return (
        <DIV>
            <Heading>{title}</Heading>
            <Text>{body}</Text>
            <br />
            <Button
                style={{
                    alignItems: 'center'
                }}> <a href={documentation} target="_blank" rel="noopener noreferrer" >
                    <br />
                    Read More
                </a></Button>
        </DIV>
    )
}

export default PakageCardProfile

const DIV = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-left: auto;
margin-right: auto;
border: 1px solid black;
padding: 10px;

`