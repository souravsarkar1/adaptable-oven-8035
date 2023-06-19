import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert'


const Login = () => {
  const navigate = useNavigate()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [msg, setmsg] = useState(false)
  const handleRegister = () => {
    const payload = {
      name,
      email,
      password
    }
    fetch("http://localhost:8080/users/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
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
  if (msg === "user has been registered") {
    setTimeout(() => {
      navigate("/signin")
    }, 2000);
  }
  return (
    <Box pt='90px' w='20%' m='auto'>
      {/* {msg && <Alert/>} */}
      {/* <Alert/> */}
      <Text textAlign={'center'} w='10%' m='auto'><FaGithub fontSize={'35px'} w='100%' m='auto' display={'block'} /></Text>
      <Text fontSize={'25px'} mb='20px' >Register to GitHub</Text>
      {/* <Text >{msg}</Text> */}
      <Input
        value={name}
        onChange={(e) => setname(e.target.value)}
        color='gray'
        placeholder='Name'
        _placeholder={{ color: 'gray' }}
      />
      <br></br>
      <br></br>
      <Input
        value={email}
        onChange={(e) => setemail(e.target.value)}
        color='gray'
        placeholder='Email'
        _placeholder={{ color: 'gray' }}
      />
      <br></br>
      <br></br>
      <Input
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        color='gray'
        placeholder='Password'
        _placeholder={{ color: 'gray' }}
      />
      <br></br>
      <br></br>
      <Button onClick={handleRegister} _hover='none' w='100%' bg='green' color='white'>Register</Button>
      <Text mb='-5px' mt='10px'>Already have an account / Sign in</Text>
      <a href='/signin'><Button mt='10px' _hover='none' w='100%' bg='red' color='white'>Sign in</Button></a>
    </Box>
  )
}

export default Login