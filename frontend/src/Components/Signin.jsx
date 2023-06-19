import {  Box, Button, Input ,Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'



const Signin = () => {
   const navigate=useNavigate()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [msg,setmsg]=useState(false)
    const handleRegister=()=>{
      const payload={
        email,
        password
      }
       fetch("http://localhost:8080/users/login",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
       })
       .then((res)=>res.json())
       .then((res)=>{
        console.log(res)
        // localStorage.setItem("token",res.token)
        setmsg(res.msg)
       })
       .catch((err)=>{
        console.log(err)
       })
    }
    if(msg==="Login succesful"){
        setTimeout(() => {
            navigate("/")
        }, 2000);
    }
  return (
    <Box pt='90px' w='20%' m='auto'>
    <Text textAlign={'center'} w='10%' m='auto'><FaGithub fontSize={'35px'} w='100%' m='auto' display={'block'}/></Text>
    <Text fontSize={'25px'} mb='20px' >Signin to GitHub</Text>
    {/* <Text >{msg}</Text> */}
    <Input
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      color='gray'
      placeholder='Email'
      _placeholder={{ color: 'gray' }}
    />
    <br></br>
    <br></br>
    <Input
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      color='gray'
      placeholder='Password'
      _placeholder={{ color: 'gray' }}
    />
    <br></br>
    <br></br>
    <Button onClick={handleRegister} _hover='none' w='100%' bg='green' color='white'>Sign in</Button>
    
   
  </Box>
  )
}

export default Signin