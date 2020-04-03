import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Recipes from './components/Recipes';
import LogIn from './components/LogIn';
import SingleRecipe from './components/SingleRecipe';
import Wrapper from './components/Wrapper';


const Button = styled.button`
  font-size: 2vw;
  margin: 2vw 2vh;;
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
const Title = styled.h1`
  font-size: 4vw;
  color: linear-gradient(315deg, #ffd9de 0%, #e99ba6 74%);
`

const Section = styled.div`
  text-align: center;
  padding: 2vh;
  border-radius: 6px;
  margin: 15vh 0vh;
  background-color: #ffd9de;
  background-image: linear-gradient(315deg, #ffd9de 0%, #e99ba6 74%);
  
`

const App = () => {
  const [testInfo, setTestInfo ] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/');
      setTestInfo(response.data[0]);
    };
    fetchData();
  }, []);
  
  const handleClickRecipes = () => {
    
    window.location.href = '/recipes';
  }
  
  const handleClickLogIn = () => {
    window.location.href = '/user/login'
  }
  
  
  return (
    <Wrapper>
      <Router>
        <Route path='/' exact>
          <Section>
              <Title>{testInfo.title}</Title>
              <Title></Title>
              <Button type="button"  onClick={handleClickLogIn}>Log In</Button>{' '}
              <Button type="button" onClick={handleClickRecipes}>Recipes</Button>      
            </Section>
        </Route>
        <Route path='/singlerecipe/:id?' exact component={SingleRecipe} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/user/login' exact component={LogIn} />
        
      </Router>
    </Wrapper>
  );
}

export default App;
