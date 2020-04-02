import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';

const App = () => {
  const [testInfo, setTestInfo ] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000');
      setTestInfo(response.data);
    };
    fetchData();
  }, []);
  
  console.log(testInfo);
  
  
  return (
    <div className="App">
      <h1>here we go!</h1>
    </div>
  );
}

export default App;
