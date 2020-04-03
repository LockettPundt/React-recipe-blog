/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Thumbnail = styled.img`
  width: 10vh;
  height: 10vh;
  border-radius: 6px;
  margin: 0 2vh;
`;
  
const RecipeItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1vw;
  
`
const Title = styled.h1`
  font-size: 4vw;
  
`
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
const TextArea = styled.textarea`
  border-radius: 3px;
  width: 30%;
  border: none;
  padding: 1vh;
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
const List = styled.li`
  text-decoration: none;
  list-style: none;
  
`
const RepLink = styled.a`
  transform: 0.3s;
  font-size: 4vh;
  text-decoration: none;
  color: rgb(23, 23, 23);
  
  &:hover {
    
    color: #e99ba6;
   
  }
`

const Recipes = () => {
  
  const [ recipeList, setRecipeList] = useState([]);
  const [ directionsValue, setDirectionsValue] = useState('');
  const [ rateValue, setRatevalue] = useState('');
  const [ ingredientsValue, setIngredientsValue] = useState('');
  const [ imageValue, setImageValue] = useState('');
  const [ titleValue, setTitleValue] = useState('');
  const [ userId, setUserId] = useState(1);
  const [ userFirst, setUserFirst] = useState('Lockett');
  const [ userLast, setUserLast] = useState('Pundt');
  
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('http://localhost:4000/recipelist');
      // console.log("here is the fetch result", response.data);
      setRecipeList(response.data);
    }
    fetchRecipes();
  }, [])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:4000/recipelist`, {rateValue, ingredientsValue, directionsValue, imageValue, titleValue, userId, userFirst, userLast});
    console.log('submitted');
  }
  
  const handleRate = (event) => {
    setRatevalue(event.target.value);
  }
  
  const handleTitle = (event) => {
    setTitleValue(event.target.value);
  }
  
  const handleIngredients = (event) => {
    setIngredientsValue(event.target.value);
  }
  
  const handleDirections = (event) => {
    setDirectionsValue(event.target.value);
  }
  
  const handleImage = (event) => {
    setImageValue(event.target.value);
    console.log(imageValue);
  }
  
  const recipeComponents = !!recipeList ? recipeList.map((item, index) => {
    
      const recipeLink = `./singlerecipe/${item.id}`;
      const imgSrc = `${item.img}`;
      return (
        <RecipeItem key={item.id}>
          <Thumbnail src={imgSrc} alt='recipe thumbnail' /><List ><RepLink href={recipeLink}>{item.name}</RepLink></List>
        </RecipeItem>
      )
    
  }) : <p>nothing here</p>
  

  
  return (
    <section>
      <Title>Recipes</Title>
      <ul>
        {recipeComponents}
      </ul>
      <Form  onSubmit={handleSubmit} autoComplete="off">
        <h2>Submit A Recipe:</h2>
        <Input type="hidden" name="user_id" value=""/>
        <Input type="hidden" name="first_name" value=""/>
        <Input type="hidden" name="last_name" value=""/>
        <Label>Recipe Title:
            <Input type="text" name="title" value={titleValue} placeholder="Recipe Title" onChange={handleTitle}/>
        </Label>
        <Label>Rating: 
            <Input type="text" name="rating" value={rateValue} placeholder="Rate This Recipe" onChange={handleRate}/>
        </Label>
        <Label>Ingredients: 
            <TextArea name="ingredients" value={ingredientsValue} placeholder="Seperated by commas please ;)" rows="10" cols="40" onChange={handleIngredients}></TextArea>
        </Label>
        <Label>Directions: 
            <TextArea name="directions" value={directionsValue} placeholder="Enter Your Directions" rows="10" cols="40" onChange={handleDirections}></TextArea>
        </Label>
        <Label>Image: 
            <Input type="file" value={imageValue} name="img_upload" onChange={handleImage}/>
        </Label>
        <Button type="submit">Submit Recipe</Button>
    </Form>
      <RepLink href='/'>Home</RepLink>
    </section>
  );
  
}


export default Recipes;