import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


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
  
  &hover {
    background-color: red;
  }
`


const CommentForm = (props) => {
  
  const handleTitle = (event) => {
    setTitleValue(event.target.value)
    //console.log(titleValue);
  }
  
  const handleRating = (event) => {
    setRatingValue(event.target.value);
    //console.log(ratingValue);
  }
  
  const handleComment = (event) => {
    setCommentValue(event.target.value);
    console.log(commentValue);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    
  }
  
  const [ratingValue , setRatingValue ] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [userId, setUserId] = useState(3);
  const {id} = props;
  const postLink = `http://localhost:4000/recipelist/${id}`
  return (
    <Form  action={postLink} method="POST" onSubmit={handleSubmit}>
        <h3>Leave a comment: </h3>
        <input type="hidden" name="user_id" value={userId} />
        <Label>Title:
            <Input type="text" name="title" value={titleValue} placeholder="Comment Title"onChange={handleTitle}/>
        </Label>
        <Label>Rating: 
            <Input type="text" name="rating" value={ratingValue} placeholder="Rate it!" onChange={handleRating}/>
        </Label>
        <Label>Comment:
            <TextArea rows="10" cols="40" name="comment" value={commentValue} placeholder="Enter Your Comment." onChange={handleComment}></TextArea>
        </Label>
        <Button type="submit">Comment!</Button>
    </Form>
    
  );
}

export default CommentForm;