import React, { useState } from 'react';
import '../Style.css';
import axios from 'axios';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (isLogin) {
        try{
            const response = await axios.post('/login',{username,password})
            console.log(response);
        }catch(err){
            console.log(err);
        }
      // Handle login logic here
      console.log('Logging in with', { username, password });
    } else {
      // Handle sign up logic here
      console.log('Signing up with', { username, password });
    }
  };

  return (
    <div className='login-page'>
      <div className='login-box'>
        <div className='wrapper'>
          <img src='https://img.freepik.com/premium-vector/fast-food-burger-cartoon-flat-cartoon-illustration_403370-761.jpg' alt='Login' />
        </div>
        <p className='form-tittle'>Welcome</p>
        <p>{isLogin ? 'Login to the Dashboard' : 'Sign up for a new account'}</p>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='btn'>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button
          className='toggle-btn'
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};
