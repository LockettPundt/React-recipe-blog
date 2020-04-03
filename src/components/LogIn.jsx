import React, { useState, useEffect } from 'react';


const LogIn = () => {
  
  return (
    <form action="/users/login" method="POST">
      <label>Email:
          <input type="text" name="user_email" placeholder="Enter Your Email" />
      </label>
      <label>Password:
          <input type="password" name="user_password" placeholder="Enter Your Password" />
      </label >
      <button type="submit">LOG IN</button>
    </form>
  )
}


export default LogIn;