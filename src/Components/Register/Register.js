import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { stylesContext } from '../../ContextProviders/StylesProvider'

const RegisterContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-image: url(${require("../../Assets/Images/Sign-in_Bg_2.jpg")});
    background-size: cover;

    & form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 450px) {
        & {
            background-image: none;
            background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
        }

        & div {
            width: 100%;
            min-height: 100%;
            border-radius: 0px;

            & form {
                width: 100%;
                height: 100%;
            }
        }
    }
`

const RegisterFormStyle = styled.div`
    min-height: 500px;
    width: 400px;
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
            color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
        }
    }
`

const Button = styled.button`
    min-width: 100px;

    padding: 10px;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};

    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`

const RegisterForm = () => {
    const styles = useContext(stylesContext)
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerUser = (event) => {
        event.preventDefault();
        const isValidName = firstName.length > 0 && lastName.length > 0 && userName.length > 0;
        const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        const isValidPassword = password === confirmPassword


        if (isValidName && isValidEmail && isValidPassword) {
            const date = new Date()
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()
            let fullDate = `${month}-${day}-${year}`

            axios.post("http://localhost:5000/users", {
                fullName: `${firstName} ${lastName}`,
                userName: userName,
                emailAddress: email,
                password: password,
                memberSince: fullDate,
                totalDonation: 0
            }).then(res => {
                alert(res.data.message)
                res.data.authenticated ? navigate("/login") : navigate("/register")
            }).catch(err => {
                alert(err)
            })
        } else {
            alert("Invalid Registration")
        }
    }

    return (
        <RegisterFormStyle backgroundColor={styles.primaryColor}>
            <form action="">
                <h1>REGISTER</h1>
                <div className='form'>
                    <input
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete='on'
                    id='first-name'
                    type="text"
                    placeholder='First Name'
                    required
                    />
                    <input
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete='on'
                    id='last-name'
                    type="text"
                    placeholder='Last Name'
                    required
                    />
                    <input
                    onChange={(e) => setUserName(e.target.value)}
                    autoComplete='on'
                    id='user-name'
                    type="text"
                    placeholder='Username'
                    required
                    />
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='on'
                    id='email'
                    type="email"
                    placeholder='Email'
                    required
                    />
                    <input
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='on'
                    id='password'
                    type="password"
                    placeholder='Enter Password'
                    required
                    />
                    <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete='on'
                    id='confirm-password'
                    type="password"
                    placeholder='Confirm Password'
                    required
                    />
                </div>
                <div className="login-container">
                    <Button onClick={(event) => {registerUser(event)}} backgroundColor={styles.secondaryColor}> REGISTER </Button>
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



function Register() {
    const styles = useContext(stylesContext)

    return (
        <RegisterContainer backgroundColor={styles.primaryColor}>
            <RegisterForm></RegisterForm>
        </RegisterContainer>
    )
}

export default Register