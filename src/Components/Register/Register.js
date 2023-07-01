import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; 
    min-height: 100vh;

    & .register-form {
        width: 380px;
        height: 600px;
        margin: 0 auto;
        text-align: center;
        float: right;    
        background-color: #2F2E2E;
        position: absolute;
        top: 52.5%;
        transform: translateY(-50%);
        right: 50px;
        border-radius: 10px;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    & .form-items {
        width: 271px;
        height: 455px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin: 0 auto;   
    }

    & h1 {
        margin-top: 0;
    }

    & input {
        width: 271px;
        height: 55px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
    }

    & .register-button {
        width: 141px;
        height: 59px;
        background-color: #4B8DC1;
        color: white;    
        border: none;
        cursor: pointer;    
        border-radius: 5px; 
    }

    a {
        text-decoration: none;
        color: #4B8DC1;
    }

    p {
      color:white;
    }
`

function Register () {
  return (
    <StyledDiv img={require("../../Assets/Images/Sign-in_Bg_2.jpg")}>
        <div className="register-form">
      <div className="form-items">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit" className="register-button">REGISTER</button>
        <p>Already registered?
        <br></br>
        <Link to={"/login"}> LOGIN </Link>
        </p> 
      </div>
    </div>
    </StyledDiv>
  )
}

export default Register;
