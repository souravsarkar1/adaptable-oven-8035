import { Button, Input,Textarea } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import styled from "styled-components";
const intialstate ={
  title :"",
  language :"",
  about:"",
  content:""
}
const Codeupload = () => {

  const [payload,setpayload] = useState(intialstate);

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setpayload({...payload,[name]:value})
  }

  const handleUpload = ()=>{
    if(payload.title!=="" && payload.language!=="" && payload.about!=="" && payload.content!==""){
      
      axios.post("http://localhost:4500/code/upload",payload,{
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhkOTUwN2U1NmIwYWUxMWVlMmNiYTQiLCJ1c2VyIjoiU2hpdmEiLCJpYXQiOjE2ODcwMTY5NDF9.snKRYdIJhQqGuTr0_CcIE-cpZ4FfTfZ-c1W_Gw7hTsc",
        },
      }).then(res=> console.log(res))
      .catch(error=> console.log(error));
      setpayload(intialstate);
    }else{
      console.log("require all feilds")
    }
    }


  return (
    <div >
       <div style={{border:"1px solid yellow",width:"100%"}}>

       </div>
       <DIV >
        <div className='input_box'>
          <Input placeholder='Enter Your Title' name='title' value={payload.title} onChange={handleChange} required/>
          
          <Input placeholder='Enter Your Language' name='language' value={payload.language} onChange={handleChange} required/>

          <Textarea rows="24" cols="20" placeholder='About Your Code' name='about' value={payload.about} onChange={handleChange} required></Textarea>
        </div>
        <div className='textarea'>
        <Textarea rows="30" cols="80" placeholder='Enter Your Code' name='content' color={"white"} value={payload.content} onChange={handleChange} required></Textarea>
    </div>
       </DIV>
       <div width={"100%"}>
          <Button m={"auto"} w={"150px"}  onClick={handleUpload} bgColor={"#26a641"} mt={"20px"} color={"white"} _hover={{bgColor:"#39d353"}} >Push The Code</Button>

       </div>
    </div>
  )
}

export default Codeupload;


const DIV = styled.div`

display: flex;
margin-top: 100px;
justify-content: space-around;

.input_box>input{
  border: 1px solid white;
  background-color: #0D1117;
color: white;
margin-bottom: 20px;
}

.input_box>textarea{
  background-color: #0D1117;
  color: white;
}

.textarea>textarea{
  background-color: #0D1117;
  color: white;
}
`