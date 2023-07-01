import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LoginContainer = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    background-image: url(${require("../../Assets/Images/Sign-in_Bg_2.jpg")});
    background-size: cover;

    @media screen and (max-width: 450px) {
        & form {
            width: 100%;
            height: 100%;

            & div {
                border-radius: 0px;
                width: 100%;
                height: 100%;
            }
        }
    }
`

const LoginFormStyle = styled.div`
    min-height: 300px;
    width: 400px;
    background-color: #2F2E2E;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column; 
    align-items: center;

    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-50px);}
        to { opacity: 1; transform: translateY(0px);}
    }

    & * {
        color: #FFFFFF;
        letter-spacing: 1.75px;
    }

    & h1 {
        font-size: 3rem;
        margin: 20px;
        
    }
    
    
    
    & .form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        & input {
            height: 50px;
            text-align: center;
            color: #2F2E2E;
        }

        & #user-name, #email, #password, #confirm-password {
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }

    & .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;

        & p {
            margin: 25px;
        }

        & a {
            color: #4B8DC1;
        }
    }
`

const Button = styled.button`
    min-width: 100px;

    padding: 10px;
    background-color: #4B8DC1;

    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`

const LoginForm = () => {
  return (
    <form action="">
        <LoginFormStyle>
            
                <h1> LOGIN </h1>
                <div className='form'>
                    <input autoComplete='on' id='email' type="email" placeholder='Email' required/>
                    <input autoComplete='on' id='password' type="password" placeholder='Enter Password' required/>
                </div>
                <div className="login-container">
                    <Button> LOGIN </Button>
                    <p> Not yet registered? </p>
                    <Link to="/register"> Register </Link>
                </div>
        
        </LoginFormStyle>
    </form>
  )
}



function Login() {
  return (
    <LoginContainer>
        <LoginForm></LoginForm>
    </LoginContainer>
  )
}

export default Login