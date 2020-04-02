import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = () => {
  
  const [ recipeList, setRecipeList] = useState([]);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('http://localhost:4000/recipelist');
      console.log("here is the fetch result", response.data.recipeNames);
      setRecipeList(response.data);
    }
    fetchRecipes();
  }, [])
  
  console.log("this is the recipe list response:", recipeList.recipes)
  const recipeComponents = !recipeList ? recipeList.recipes.map(item => {
    return (
      <p>{item.name}</p>
    )
  }) : <p>nothing here</p>
  
  const test = <p>hi this is a test</p>;
  
  return (
    <section>
      <h1>This is the recipes List</h1>
      <section>
        {recipeComponents}
        {test}
      </section>
      <form  action="recipelist"  method="POST" autoComplete="off">
        <h2>Submit A Recipe:</h2>
        <input type="hidden" name="user_id" value=""/>
        <input type="hidden" name="first_name" value=""/>
        <input type="hidden" name="last_name" value=""/>
        <label>Recipe Title:
            <input type="text" name="title" placeholder="Recipe Title"/>
        </label>
        <label>Rating: 
            <input type="text" name="rating" placeholder="Rate This Recipe"/>
        </label>
        <label>Ingredients: 
            <textarea name="ingredients" placeholder="Seperated by commas please ;)" rows="10" cols="40"></textarea>
        </label>
        <label>Directions: 
            <textarea name="directions" placeholder="Enter Your Directions" rows="10" cols="40"></textarea>
        </label>
        <label>Image: 
            <input type="file" name="img_upload"/>
        </label>
        <button type="submit">Submit Recipe</button>
    </form>
      <a href='/'>Home</a>
    </section>
  );
  
}


export default Recipes;