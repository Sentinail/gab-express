import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider'

const RegisterFormStyle = styled.div`
    min-height: 500px;
    min-width: 400px;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
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
        text-align: center;
    }
    
    
    & .form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        & .input-container {
            position: relative;

            & p {
                position: absolute;
                width: 100%;
                top: 100%;
                left: 0px;
                font-size: 0.9rem;
                color: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};
            }
        }

        & input {
            height: 50px;
            width: 100%;
            text-align: center;
            color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
            outline: none;
            
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
            color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
        }
    }

    @media screen and (max-width: 450px) {
        & {
            min-width: 0px;
        }
    }
`

const Button = styled.button`
    min-width: 100px;

    padding: 10px;
    background-color: ${props => 
    {return props.isActive ?
    `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, 0.1)`
    : `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};

    border: none;
    border-radius: 10px;

    transition: all 0.2s ease;

    &:hover {
        cursor: ${props => {return props.isActive ? "auto" : "pointer"}};
        scale: ${props => {return props.isActive ? "auto" : 1.1}};
    }
`

const RegisterForm = () => {    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [firstNameIsValid, setFirstNameIsValid] = useState(false);
    const [lastNameIsValid, setLastNameIsValid] = useState(false);
    const [userNameIsValid, setUserNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false);

    const navigate = useNavigate()

    const styles = useContext(stylesContext)
    const API = useContext(apiEndpointContext)

    let buttonIsActive = (firstNameIsValid && lastNameIsValid && userNameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid)

    const register = (event) => {
        event.preventDefault()
        if (buttonIsActive) {
            axios.post(API.gabExpressApi + "/users", {
                first_name: firstName,
                last_name: lastName,
                user_name: userName,
                email_address: email,
                password: password,
            }).then(res => {
                alert(res.data.message)
                res.data.created ? navigate("/login") : navigate("/register")
            }).catch(err => {
                alert(err)
            })
        }
    }

    useEffect(() => {
        firstName.length > 0 ? setFirstNameIsValid(true) : setFirstNameIsValid(false)
        lastName.length > 0 ? setLastNameIsValid(true) : setLastNameIsValid(false)
        userName.length > 0 ? setUserNameIsValid(true) : setUserNameIsValid(false)
        const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        isValidEmail ? setEmailIsValid(true) : setEmailIsValid(false)
        password.length >= 8 ? setPasswordIsValid(true) : setPasswordIsValid(false)
        confirmPassword === password ? setConfirmPasswordIsValid(true) : setConfirmPasswordIsValid(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstName, lastName, userName, email, password, confirmPassword])

    return (
        <RegisterFormStyle backgroundColor={styles.primaryColor} secondaryColor={styles.secondaryColor}>
            <form action="">
                <h1>REGISTER</h1>
                <div className='form'>
                    <div className='input-container' id='first-name'>
                        <input
                        onChange={(event) => {setFirstName(event.target.value)}}
                        autoComplete='on'
                        type="text"
                        placeholder='First Name'
                        required
                        />
                        <p hidden={firstNameIsValid || firstName.length <= 0}> Please input first name </p>
                    </div>
                    <div className='input-container' id='last-name'>
                        <input
                        onChange={(event) => {setLastName(event.target.value)}}
                        autoComplete='on'
                        type="text"
                        placeholder='Last Name'
                        required
                        />
                        <p hidden={lastNameIsValid || lastName.length <= 0}> Please input last name </p>
                    </div>
                    <div className='input-container' id='user-name'>
                        <input
                        onChange={(event) => {setUserName(event.target.value)}}
                        autoComplete='on'
                        type="text"
                        placeholder='Username'
                        required
                        />
                        <p hidden={userNameIsValid || userName.length <= 0}> Please input username </p>
                    </div>
                    <div className='input-container' id='email'>
                        <input
                        onChange={(event) => {setEmail(event.target.value)}}
                        autoComplete='on'
                        type="email"
                        placeholder='Email'
                        required
                        />
                        <p hidden={emailIsValid || email.length <= 0}> Please input valid email </p>
                    </div>
                    <div className='input-container' id='password'>
                        <input
                        onChange={(event) => {setPassword(event.target.value)}}
                        autoComplete='on'
                        type="password"
                        placeholder='Enter Password'
                        required
                        />
                        <p hidden={passwordIsValid || password.length <= 0}> Password requires 8 characters </p>
                    </div>
                    <div className='input-container' id='confirm-password'>
                        <input
                        onChange={(event) => {setConfirmPassword(event.target.value)}}
                        autoComplete='on'
                        type="password"
                        placeholder='Confirm Password'
                        required
                        />
                        <p hidden={confirmPasswordIsValid || confirmPassword.length <= 0}> Confirm password doesn't match </p>
                        <p hidden={(passwordIsValid || confirmPassword.length > 0 || password.length > 0) || confirmPassword.length <= 0}> Confirm password requires 8 characters </p>
                    </div>
                </div>  
                <div className="login-container">
                    <Button isActive={!buttonIsActive}  onClick={(event) => {register(event)}} backgroundColor={styles.secondaryColor} 
                    disabled={!buttonIsActive}> 
                    REGISTER 
                    </Button>
                    <p> Already registered? </p>
                    <Link 
                    style={{color: `rgb(${styles.secondaryColor[0]} ${styles.secondaryColor[1]} ${styles.secondaryColor[2]})`}} 
                    to="/login"> 
                    Login 
                    </Link>
                </div>
            </form>
        </RegisterFormStyle>
    )
}


function RegisterFormTest() {
  return (
    <RegisterForm></RegisterForm>
  )
}

export default RegisterFormTest