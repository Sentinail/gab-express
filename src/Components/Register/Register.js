import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RegisterContainer = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 50px;
    justify-content: center;

    background-image: url(${require("../../Assets/Images/Sign-in_Bg_2.jpg")});
    background-size: cover;
`

const RegisterFormStyle = styled.div`
    min-height: 500px;
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
        color: #FFFFFF;
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

const RegisterForm = () => {
  return (
    <form action="">
        <RegisterFormStyle>
            <h1>REGISTER</h1>
            <div className='form'>
                <input autoComplete='on' id='first-name' type="text" placeholder='First Name' />
                <input autoComplete='on' id='last-name' type="text" placeholder='Last Name' />
                <input autoComplete='on' id='user-name' type="text" placeholder='Username'/>
                <input autoComplete='on' id='email' type="email" placeholder='Email'/>
                <input autoComplete='on' id='password' type="password" placeholder='Enter Password'/>
                <input autoComplete='on' id='confirm-password' type="password" placeholder='Confirm Password'/>
            </div>
            <div className="login-container">
                <Button> REGISTER </Button>
                <p> Already registered? </p>
                <Link to="/login"> Login </Link>
            </div>
        </RegisterFormStyle>
    </form>
  )
}



function Register() {
  return (
    <RegisterContainer>
        <RegisterForm></RegisterForm>
    </RegisterContainer>
  )
}

export default Register