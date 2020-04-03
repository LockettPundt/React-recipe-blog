import React, { useState } from 'react';
import styled from 'styled-components';

const CommentSection = styled.div`
  background-color: palevioletred;
  padding: 2vh;
  border-radius: 6px;
  margin: 1vh auto;
`;

const Comment = (props) => {
  
  const { title, rating, first, last, comment} = props;
 
  return (
   
    <CommentSection>
        <h3>{title} {"★".repeat(rating)}</h3>
        <p>By: {first} {last}</p>
        <p>{comment}</p>
    </CommentSection>
  );
}


export default Comment;