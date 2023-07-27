import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../ContextProviders/AuthProvider'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider'


const LoginContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    background-image: url(${require("../../Assets/Images/Sign-in_Bg_2.jpg")});
    background-size: cover;

    @media screen and (max-width: 450px) {
        & {
            background-image: none;
            background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
        }

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
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};

    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`
const MessagePTag = styled.p`
    color: ${props => {return `rgb(${props.textColor[0]}, ${props.textColor[1]}, ${props.textColor[2]}, ${props.textColor[3]})`}};
    margin-top: 20px;
`

const LoginForm = () => {
    const styles = useContext(stylesContext)
    const API = useContext(apiEndpointContext)
    const { setIsAuth, setUserInfomation } = useContext(authContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const getUserColorPreference = async () => {
        try {
            const result = await axios.get(API.gabExpressApi + "/users/preference", {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})
            return result.data
        } catch (err) {
            console.log(err)
        }
    }

    const authenticateUser = (event) => {
        event.preventDefault();

        if (email.length <= 0 || password.length <= 0) {
            setMessage("Invalid Login")
            return

        } else {
            axios.post(
                API.gabExpressApi + "/users/login", 
                {
                    email_address: email,
                    password: password
                },    
                {
                    headers: {
                        'ngrok-skip-browser-warning': true
                    }, 
                    withCredentials: true,
                }
            )
            .then(res => {
                setMessage(res.data.message)

                if (res.data.login) {
                    setIsAuth(res.data.login)
                    setUserInfomation(res.data.user_data)
                } else {
                    setIsAuth(false)
                }
                res.data.login ? navigate("/home") : navigate("/login")
                
                const userColorPreference = async () => {
                    const result = await getUserColorPreference()
                    styles.setPrimaryColor(result.primary_color) 
                    styles.setSecondaryColor(result.secondary_color)
                    styles.setSupportingColor(result.supporting_color)
                }
        
                userColorPreference()
            })
            
            .catch(err => {console.log(err)})
        }
    }


    return (
        <form action="">
            <LoginFormStyle backgroundColor={styles.primaryColor}>
                
                    <h1> LOGIN </h1>
                    <div className='form'>
                        <input onFocus={() => {setMessage("")}} onChange={event => {setEmail(event.target.value)}} autoComplete='on' id='email' type="email" placeholder='Email' required/>
                        <input onFocus={() => {setMessage("")}} onChange={event => {setPassword(event.target.value)}} autoComplete='on' id='password' type="password" placeholder='Enter Password' required/>
                    </div>
                    <MessagePTag textColor={styles.secondaryColor}> {message} </MessagePTag>
                    <div className="login-container">
                        <Button backgroundColor={styles.secondaryColor} onClick={event => {authenticateUser(event)}}> LOGIN </Button>
                        <p> Not yet registered? </p>
                        <Link 
                        style={{color: `rgb(${styles.secondaryColor[0]} ${styles.secondaryColor[1]} ${styles.secondaryColor[2]})`}}  
                        to="/register"> 
                        Register 
                        </Link>
                    </div>
            
            </LoginFormStyle>
        </form>
    )
}



function Login() {
    const styles = useContext(stylesContext)

  return (
    <LoginContainer backgroundColor={styles.primaryColor}>
        <LoginForm></LoginForm>
    </LoginContainer>
  )
}

export default Login