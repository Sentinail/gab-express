import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; 
    min-height: 100vh;

    & .login-form {
        width: 380px;
        height: 500px;
        background-color: #2F2E2E;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        float: right ;
        position: absolute;
        top: 52.5%;
        transform: translateY(-50%);
        right: 50px;
        border-radius: 10px;
    }

    & h1 {
        margin-top: 0;
    }

    & input {
        width: 75%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
    }

    & .login-button {
        background-color: #4B8DC1;
        color:#ccc;
        padding: 10px;
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`


function Login () {
  return (
    <StyledDiv img={require("../../Assets/Images/Sign-in_Bg_2.jpg")}>
        <div className="login-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="login" className="login-button"><Link to={"/myaccount"}> LOGIN </Link></button>
            <p>Not yet registered? 
                <br>
                </br>
            <Link to={"/register"}> Register </Link>
            </p>
    </div>
    </StyledDiv>
  )
}

export default Login;