import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';
import Recipes from './components/Recipes';
import LogIn from './components/LogIn';


const App = () => {
  const [testInfo, setTestInfo ] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/');
      setTestInfo(response.data);
    };
    fetchData();
  }, []);
  
  //console.log(testInfo);
  
  
  return (
    <div className="App">
      <Router>
        <Route path='/' exact>
          <h1>{testInfo.title}here we go!</h1>
          <a href="/user/login">Log In</a>
          <a href="/recipes">Recipe</a>
        </Route>
        <Route path='/recipes' component={Recipes} />
        <Route path='/user/login' component={LogIn} />
      </Router>
    </div>
  );
}

export default App;
