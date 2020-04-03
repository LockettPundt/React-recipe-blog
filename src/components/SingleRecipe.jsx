import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Comment from './Comment';
import Wrapper from './Wrapper'
import CommentForm from './CommentForm';



const Title = styled.h1`
    font-size: 5vh;
    color: rgb(23, 23, 23);
    width: 100%;
  
  `
  const SectionTitle = styled.h1`
    font-size: 3vh;
    
  
  
  `;
  
  
  const RecipeImg = styled.img`
    height: 30vh;
    width: auto;
  `;
  const Rating = styled.span`
    color: gold;
    font-size: 4vh;
  
  `;
  const RepLink = styled.a`
  transform: 0.3s;
  font-size: 3vh;
  text-decoration: none;
  color: rgb(23, 23, 23);
  
  &:hover {
    
    color: #e99ba6;
   
  }
`;

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
  // console.log("comments: ", comments);
  // console.log("cSubmitted: ", submitted);
  const rating = !!recipe ? "★".repeat(recipe.rating) : 'Not yet Rated';
  const recipeData = !!recipe.ingredients ? recipe.ingredients.split(',').map((item, index) => {
    return <li key={index}>{item}</li>
  }) : '';
  
  console.log(recipe.id);
  const commentList = !!(comments.length) ? comments.map((item, index) => {
    
    return (
      <Comment key={index} title={item.title} rating={item.rating} first={item.first_name} last={item.last_name} comment={item.comment} />
    )
  }) : <h3>Be the first to leave a comment!</h3>
 

  return (
    <div>
      <Title>{recipe.name ? recipe.name : ''}</Title>
      <RecipeImg src={recipe.img} />
      <h2>Submitted By: {submitted.first_name}  {submitted.last_name} <Rating>{rating}</Rating>{' '}({comments.length})</h2>
      <SectionTitle>Ingredients</SectionTitle>
      <ul>
        {recipeData}
      </ul>
      <section>
        <SectionTitle>Directions</SectionTitle>
        {recipe.directions}
      </section>
      
      {commentList}
      <CommentForm id={recipe.id} />
      <RepLink href="/recipes">Back</RepLink>
    </div>
  )
  
}



export default SingleRecipe;