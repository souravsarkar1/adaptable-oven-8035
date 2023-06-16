import { Heading } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const ProfileWorkSpaceCard = ({title , texhstack , visible }) => {
  return (
    <DIV>
      <Heading as='h6' size='xs'>{title}</Heading>
      <br />
      <Heading as='h6' size='xs'>{texhstack}</Heading>
      <br />
      <Heading as='h6' size='xs'>{visible}</Heading>

    </DIV>
  )
}

export default ProfileWorkSpaceCard

const DIV = styled.div`
border: 1px solid black;
padding: 20px;
width: 400px;
height: 150px;
margin-top: 10px;
margin-bottom: 1px;
margin-left: auto;
margin-left: auto;
`