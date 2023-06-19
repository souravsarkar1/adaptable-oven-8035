import React, { useState } from 'react'
import styled from 'styled-components'

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    socialMediaLink1: '',
    socialMediaLink2: '',
    socialMediaLink3: '',
    file: null
  })

  const handleChange = (event) => {
    const { name, value, files } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'file' ? files[0] : value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      socialMediaLink1: '',
      socialMediaLink2: '',
      socialMediaLink3: '',
      file: null
    })
  }

  return (
    <Container>
      <Title>Update Your Profile</Title>
      <Form onSubmit={handleSubmit}>
        <InputLabel>Update Your Name</InputLabel>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputLabel>Update Your Email</InputLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputLabel>Update Your Social Media Link</InputLabel>
        <Input
          type="text"
          name="socialMediaLink1"
          placeholder="Enter your Social Media Link 1"
          value={formData.socialMediaLink1}
          onChange={handleChange}
        />
        <InputLabel>Update Your Social Media Link</InputLabel>
        <Input
          type="text"
          name="socialMediaLink2"
          placeholder="Enter your Social Media Link 2"
          value={formData.socialMediaLink2}
          onChange={handleChange}
        />
        <InputLabel>Update Your Social Media Link</InputLabel>
        <Input
          type="text"
          name="socialMediaLink3"
          placeholder="Enter your Social Media Link 3"
          value={formData.socialMediaLink3}
          onChange={handleChange}
        />
        <InputLabel htmlFor="">Upload Your Photo</InputLabel>
        <FileInput
          type="file"
          name="file"
          onChange={handleChange}
        />
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  )
}

export default EditProfile

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f2f2;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  color: #333333;
  font-size: 24px;
  margin-bottom: 20px;
`

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
`

const InputLabel = styled.label`
  color: #333333;
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
`

const FileInput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 16px;
`

const Button = styled.button`
  width: 120px;
  height: 40px;
  background: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #45a049;
  }

  &:focus {
    outline: none;
  }
`;
