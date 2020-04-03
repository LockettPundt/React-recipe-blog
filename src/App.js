import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';
import Recipes from './components/Recipes';
import LogIn from './components/LogIn';
import SingleRecipe from './components/SingleRecipe';
import Wrapper from './components/Wrapper'

const App = () => {
  const [testInfo, setTestInfo ] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/');
      setTestInfo(response.data[0]);
    };
    fetchData();
  }, []);
  
  //console.log(testInfo);
  
  
  return (
    <Wrapper>
      <Router>
        <Route path='/' exact>
          <h1>{testInfo.title}here we go!</h1>
          <a href="/user/login">Log In</a>
          <a href="/recipes">Recipe</a>
        </Route>
        <Route path='/singlerecipe/:id?' exact component={SingleRecipe} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/user/login' exact component={LogIn} />
        
      </Router>
    </Wrapper>
  );
}

export default App;
