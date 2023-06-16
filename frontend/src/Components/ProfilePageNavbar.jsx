import { Heading } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import { IoBookSharp } from 'react-icons/io5';
import {AiFillStar , AiFillCodeSandboxCircle} from 'react-icons/ai'
import {BiRectangle} from 'react-icons/bi'
import {GoFileDirectory} from 'react-icons/go'
import { Link } from 'react-router-dom';

const ProfilePageNavbar = () => {
  return (
    <DIV>
      <Heading as='h5' size='sm' className='Heading'><IoBookSharp style={{marginTop : "3px"}}/><Link to={'/profile'}> OverView</Link></Heading>
      <Heading as='h5' size='sm' className='Heading'><BiRectangle style={{marginTop : "3px"}}/> <Link to={'/repositories'}>Repositories</Link></Heading>
      <Heading as='h5' size='sm' className='Heading'><GoFileDirectory style={{marginTop : "3px"}}/> <Link to={'/projects'}>Projects</Link></Heading>
      <Heading as='h5' size='sm' className='Heading'><AiFillCodeSandboxCircle style={{marginTop : "3px"}}/> <Link to={"/pakages"}>Packages</Link></Heading>
      <Heading as='h5' size='sm' className='Heading'><AiFillStar style={{marginTop : "3px"}}/> Stars</Heading>
      <hr />
    </DIV>
  )
}

export default ProfilePageNavbar

const DIV = styled.div`
display: flex;
justify-content: space-around;
gap: 20px;
width: 50%;
margin: auto;

.Heading {
    display: flex;
    flex-direction: row;
    gap: 9px;
   font-size: 20px;
   /* border: 1px solid red; */
}
.Heading:hover{
    text-decoration: underline;
}

`

/**@souravsarkar1	souravsarkar1
Overview
Repositories
35
Projects
Packages
Stars
1 */