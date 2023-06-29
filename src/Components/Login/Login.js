import React from 'react'
import styles from './Login.css';

function Login() {
  return (
    <div className="login-form">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="login" className="login-button">LOGIN</button>
      <p>Not yet registered?</p>
       <a href="#">Register</a>
   
    </div>
  );
}

export default Login;