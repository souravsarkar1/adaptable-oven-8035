import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getproduct } from '../Redux/ProductReducer/action';
import AdminUserCard from './AdminUserCard';
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


const Admingetuser = () => {
const navigate = useNavigate()

    const dispatch = useDispatch()

   const {data} = useSelector((store)=>store.productReducer)


   const handleDelete = (id)=>{
    dispatch(deleteProduct(id)).then(()=>{dispatch(getproduct())})
  }

   useEffect(()=>{
    // dispatch(get)
    dispatch(getproduct())
   },[])


   const handlenavigatetoadduser = ()=>{
    navigate("/postuser")
   }

  return (
    <div style={{paddingTop:"4rem"}}>
       <div>
              <Button
              flex={1}
              fontSize={'xl'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={handlenavigatetoadduser} 
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
              Add User
                
            </Button>
            </div> 
    {
        data.map((el)=>{
            return (
              
              <AdminUserCard handleDelete={handleDelete} key={el.id} {...el}/>
              
            )
        })
    }    
    </div>
  )
}

export default Admingetuser