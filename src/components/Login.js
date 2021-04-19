import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../helpers/axiosWithAuth";


const initialCredentials = {
  username: '',
  password: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initialCredentials)
  const history = useHistory()

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        history.push('/bubbles')
      })
      .catch(err => {
        setError(err.response.data.error)
      })
  }

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  const [error, setError] = useState('');
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
            data-testid='username'
          />
        </label>
        <label>
          Password
          <input
            type='text'
            name='password'
            value={credentials.password}
            onChange={handleChange}
            data-testid='password'
          />
        </label>
        <button>Log In</button>
      </form>
    </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.