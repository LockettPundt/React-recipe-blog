import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';



const Form = styled.form`
  font-size: 2.6vh;
  background-color: #ffd9de;
  background-image: linear-gradient(315deg, #ffd9de 0%, #e99ba6 74%);
  color: black;
  padding: 2vh;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  
`
const Input = styled.input`
  border-radius: 3px;
  width: 30%;
  border: none;
  padding: 1vh;
  
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  font-size: 2vw;
  margin: 2vw 0vh;;
  width: 32%;
  border-radius: 3px;
  color: black;
  border: 5px solid black;
  padding: 2vh;
  
  &:hover {
    border: 5px solid white;
    color: #e99ba6;
    background-color: rgb(23, 23, 23)
   
  }
`

const LogIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState([]);
  
  useEffect(() => {
    const getSession = async () => {
      const response = await axios.get('http://localhost:4000/users/login');
      setSession(response.data);
    }
    getSession();
  }, [])
  
  const handleSubmit = (event) => {
    event.preventDefualt();
    axios.post(`http://localhost:4000/users/login`, {email, password});
    console.log('submitted');
  }
  
  const handlePassword = (event) => {
    setPassword(event.target.value);
    //console.log(password);
  }
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
    //console.log(email);
  }
  console.log(session);
  return (
    <Form onSubmit={handleSubmit}>
      <Label>Email:
          <Input type="text" name="user_email" value={email} placeholder="Enter Your Email" onChange={handleEmail}/>
      </Label>
      <Label>Password:
          <Input type="password" name="user_password" value={password} placeholder="Enter Your Password" onChange={handlePassword}/>
      </Label >
      <Button type="submit">LOG IN</Button>
    </Form>
  )
}


export default LogIn;