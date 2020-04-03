import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

const SingleRecipe = (props) => {
  const { id } = props.match.params;
  const [recipe, setRecipe] = useState([])
  const [comments, setComments] = useState([]);
  const [submitted, setSubmitted] = useState([]);
  

  
  useEffect(() => {
    const fetchSingleRecipe = async () => {
      const response = await axios.get(`http://localhost:4000/recipelist/${id}`);
      //console.log("this is the single recipe response", response.data[0][0].title);
      setRecipe(response.data[0][0] || []);
      setComments(response.data[2] || []);
      setSubmitted(response.data[1][0] || []);
    }
    
    fetchSingleRecipe();
  }, [id]);
  //console.log("recipe: ",recipe.ingredients);
  console.log("comments: ", comments);
  console.log("cSubmitted: ", submitted);
  const rating = !!recipe ? "★".repeat(recipe.rating) : 'Not yet Rated';
  
  const recipeData = !!recipe.ingredients ? recipe.ingredients.split(',').map(item => {
    return <li>{item}</li>
  }) : '';
  
  const commentList = !!(comments.length) ? comments.map((item, index) => {
    return (
      <section>
        <h3>{item.title} {"★".repeat(item.rating)}</h3>
        <p>By: {item.first_name} {item.last_name}</p>
        <p>{item.comment}</p>
      </section>
    )
  }) : <h3>Be the first to leave a comment!</h3>
 

  return (
    <>
      <h1>{recipe.name ? recipe.name : ''}</h1>
      <h3>Submitted By: {submitted.first_name}  {submitted.last_name}</h3>
      <h3>{rating}</h3>
      <ul>
        {recipeData}
      </ul>
      <section>
        {recipe.directions}
      </section>
      <a href="/recipes">Back</a>
      {commentList}
    </>
  )
  
}



export default SingleRecipe;